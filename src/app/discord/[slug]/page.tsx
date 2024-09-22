import ArticlePage from "@/features/markdown/components/article-page";
import { ContentsDir } from "@/features/markdown/utils/content";
import { getHeadings } from "@/features/markdown/utils/html";
import type { Slug } from "@/features/markdown/utils/types";
import {
  generateDefaultMetadata,
  generateNotFoundMetadata,
} from "@/utils/metadata";
import { execPipe, map, toArray } from "iter-tools";
import type { Metadata } from "next";

type PageParams = {
  slug: Slug;
};

const DISCORD_CONTENT_DIR = new ContentsDir("discord");

export const generateMetadata = async (
  { params: { slug } }: PageProps,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  parent: any,
): Promise<Metadata> => {
  const exists = await DISCORD_CONTENT_DIR.existsSlug(slug);

  if (!exists) {
    return generateNotFoundMetadata();
  }

  const { title, description } = await DISCORD_CONTENT_DIR.getArticle(slug);
  const defaultMetadata = generateDefaultMetadata(parent);

  return {
    title,
    description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
    },
  };
};

export const generateStaticParams = async (): Promise<PageParams[]> =>
  execPipe(
    await DISCORD_CONTENT_DIR.getAllSlugs(),
    map((slug) => ({ slug })),
    toArray,
  );

type PageProps = {
  params: PageParams;
};

export default async function Page({
  params: { slug },
}: PageProps): Promise<JSX.Element> {
  const article = await DISCORD_CONTENT_DIR.getArticle(slug);
  const headings = getHeadings(article.html);

  return <ArticlePage {...article} headings={headings} />;
}
