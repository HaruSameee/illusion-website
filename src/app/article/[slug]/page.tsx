import ArticlePage from "@/features/markdown/components/article-page";
import { ContentsDir } from "@/features/markdown/utils/content";
import { getHeadings } from "@/features/markdown/utils/html";
import type { Slug } from "@/features/markdown/utils/types";
import { generateArticleMetadata } from "@/utils/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageParams = {
  slug: Slug;
};

type PageProps = {
  params: Promise<PageParams>;
};

const ARTICLE_CONTENT_DIR = new ContentsDir("article");

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  return await generateArticleMetadata(slug, ARTICLE_CONTENT_DIR);
}

export async function generateStaticParams(): Promise<PageParams[]> {
  const slugs = await ARTICLE_CONTENT_DIR.getAllSlugs();

  return slugs.map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: PageProps) {
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
