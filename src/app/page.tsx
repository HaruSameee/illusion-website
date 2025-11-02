import { ContentsDir } from "@/features/markdown/utils/content";
import TopPage from "@/layouts/top-page/top-page";
import type { Metadata } from "next";

const ARTICLE_CONTENT_DIR = new ContentsDir("article");

export const metadata: Metadata = {
  openGraph: {
    url: "/",
    type: "website",
  },
};

export default async function Page(): Promise<JSX.Element> {
  const blogArticles = await ARTICLE_CONTENT_DIR.getAllArticles();

  return <TopPage blogArticles={blogArticles} />;
}
