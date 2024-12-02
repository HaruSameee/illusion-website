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
import { notFound } from "next/navigation";

type PageParams = {
  slug: Slug;
};

type PageProps = {
  params: Promise<PageParams>;
};

const ARTICLE_CONTENT_DIR = new ContentsDir("article");

export const generateMetadata = async (
  { params }: PageProps,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  parent: any,
): Promise<Metadata> => {
  const { slug } = await params;
  const exists = await ARTICLE_CONTENT_DIR.existsSlug(slug);

  if (!exists) {
    return generateNotFoundMetadata();
  }

  const { title, description } = await ARTICLE_CONTENT_DIR.getArticle(slug);
  const defaultMetadata = await generateDefaultMetadata();

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

export const generateStaticParams = async (): Promise<PageParams[]> => {
  const slugs = execPipe(
    await ARTICLE_CONTENT_DIR.getAllSlugs(),
    map((slug) => ({ slug })),
    toArray,
  );

  // NOTE: https://github.com/vercel/next.js/issues/61213
  if (slugs.length === 0) {
    return [
      {
        slug: "__EMPTYSLUGS",
      },
    ];
  }

  return slugs;
};

export default async function Page({
  params,
}: PageProps): Promise<JSX.Element> {
  const { slug } = await params;

  if (!(await ARTICLE_CONTENT_DIR.existsSlug(slug))) {
    notFound();
  }

  const article = await ARTICLE_CONTENT_DIR.getArticle(slug);
  const headings = getHeadings(article.html);

  return (
    <ArticlePage
      {...article}
      headings={headings}
      breadcrumbs={[
        {
          href: "/articles",
          label: "ブログ",
        },
      ]}
    />
  );
}
