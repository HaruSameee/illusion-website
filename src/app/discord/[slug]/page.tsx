import ArticlePage from "@/features/markdown/components/article-page";
import { ContentsDir } from "@/features/markdown/utils/content";
import { getHeadings } from "@/features/markdown/utils/html";
import type { Slug } from "@/features/markdown/utils/types";
import { generateArticleMetadata } from "@/utils/metadata";
import { execPipe, map, toArray } from "iter-tools";
import type { Metadata } from "next";

type PageParams = {
  slug: Slug;
};

const DISCORD_CONTENT_DIR = new ContentsDir("discord");

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  return await generateArticleMetadata(slug, DISCORD_CONTENT_DIR);
}

export const generateStaticParams = async (): Promise<PageParams[]> =>
  execPipe(
    await DISCORD_CONTENT_DIR.getAllSlugs(),
    map((slug) => ({ slug })),
    toArray,
  );

type PageProps = {
  params: Promise<PageParams>;
};

export default async function Page({
  params,
}: PageProps) {
  const { slug } = await params;
  const article = await DISCORD_CONTENT_DIR.getArticle(slug);
  const headings = getHeadings(article.html);

  return <ArticlePage {...article} headings={headings} />;
}
