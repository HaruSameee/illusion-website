import { existsSync } from "node:fs";
import { readFile, readdir, stat } from "node:fs/promises";
import { join, relative } from "node:path";
import { toHtml } from "@/features/markdown/utils/html";
import { summarize } from "@/features/markdown/utils/summarize";
import type { Article, Path, Slug } from "@/features/markdown/utils/types";
import { ArticleFrontMatter } from "@/features/markdown/utils/types";
import matter from "gray-matter";
import { asyncFilter, asyncToArray, execPipe, map, reduce } from "iter-tools";
import simpleGit, { type DefaultLogFields, type LogResult } from "simple-git";
import urlJoin from "url-join";

const dev = process.env.NODE_ENV === "development";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export type FileTimestamp = {
  createdTimestamp: number;
  updatedTimestamp: number;
};

const getFileTimestamp = async (path: Path): Promise<FileTimestamp> => {
  const stats = await stat(path);
  const fsCreatedTimestamp = stats.birthtimeMs || stats.ctimeMs;
  const fsUpdatedTimestamp = stats.mtimeMs;

  const git = simpleGit();
  const log = await new Promise<LogResult<DefaultLogFields>>(
    (resolve, reject) => {
      git.log({ file: path }, (err, log) => {
        if (err) {
          reject(err);
        } else {
          resolve(log);
        }
      });
    },
  );
  const gitCreatedTimestamp = execPipe(
    log.all,
    map((l) => new Date(l.date).getTime()),
    reduce(Number.NaN, (acc, v) => (v < acc ? v : acc)),
  );
  const gitUpdatedTimestamp =
    log.latest?.date && new Date(log.latest.date).getTime();

  const createdTimestamp = Number.isNaN(gitCreatedTimestamp)
    ? fsCreatedTimestamp
    : gitCreatedTimestamp;
  const updatedTimestamp = gitUpdatedTimestamp || fsUpdatedTimestamp;

  return {
    createdTimestamp,
    updatedTimestamp,
  };
};

export class ContentsDir {
  static readonly CONTENTS_BASE_DIR = join(process.cwd(), "./src/contents");

  readonly #contentDirPath: Path;

  constructor(dirPath: Path) {
    this.#contentDirPath = join(ContentsDir.CONTENTS_BASE_DIR, dirPath);
  }

  async existsSlug(slug: Slug): Promise<boolean> {
    const path = join(this.#contentDirPath, slug);

    if (!existsSync(path)) {
      return false;
    }

    const stats = await stat(path);

    if (!stats.isDirectory()) {
      return false;
    }

    const contentPath = join(path, "index.md");

    if (!existsSync(contentPath)) {
      return false;
    }

    const contentPathStats = await stat(contentPath);

    return contentPathStats.isFile();
  }

  async getAllSlugs(): Promise<Slug[]> {
    return await execPipe(
      await readdir(this.#contentDirPath),
      asyncFilter(async (s) => {
        if (!(await this.existsSlug(s))) {
          return false;
        }

        const article = await this.getArticle(s);
        const nonDraft = !article.draft;

        return dev || nonDraft;
      }),
      asyncToArray,
    );
  }

  async getAllArticles(): Promise<Article[]> {
    return await execPipe(
      await this.getAllSlugs(),
      map((s) => this.getArticle(s)),
      asyncToArray,
    );
  }

  async getArticle(slug: Slug): Promise<Article> {
    const path = join(this.#contentDirPath, slug, "index.md");
    const content = await readFile(path, "utf8");
    const parsed = matter(content);
    const context = {
      errors: [],
    };

    if (!ArticleFrontMatter(parsed.data, context)) {
      throw context;
    }

    const baseUrl = urlJoin(
      BASE_URL as string,
      "article-assets",
      relative(ContentsDir.CONTENTS_BASE_DIR, this.#contentDirPath),
      slug,
      "/",
    );
    const html = await toHtml(new URL(baseUrl), parsed.content);

    return {
      slug,
      draft: parsed.data.draft ?? false,
      title: parsed.data.title,
      description: summarize(html, {
        maxLength: 100,
      }),
      html,
      createdTimestamp: 0,
      updatedTimestamp: 0,
      //...(await getFileTimestamp(path)),
    };
  }
}
