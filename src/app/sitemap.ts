import { ContentsDir } from "@/features/markdown/utils/content";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = false;

// TODO: as cast
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

const url = (url?: string): string =>
  url ? new URL(url, BASE_URL).href : BASE_URL;

const generateArticleSitemap = async (
  dirPath: string,
  priority: number,
): Promise<MetadataRoute.Sitemap> => {
  const contentsDir = new ContentsDir(dirPath);
  const articles = await contentsDir.getAllArticles();

  return articles.map((article) => ({
    url: url(`/${dirPath}/${article.slug}`),
    priority,
    changeFrequency: "monthly",
    lastModified: new Date(
      article.updatedTimestamp || article.createdTimestamp || Date.now(),
    ),
  }));
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: url(),
      priority: 1,
      changeFrequency: "weekly",
      lastModified: new Date(),
    },
    {
      url: url("/articles"),
      priority: 0.5,
      changeFrequency: "weekly",
      lastModified: new Date(),
    },
    ...(await generateArticleSitemap("discord", 0.7)),
    ...(await generateArticleSitemap("article", 0.6)),
  ];
}
