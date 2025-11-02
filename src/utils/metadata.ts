import type { ContentsDir } from "@/features/markdown/utils/content";
import type { Metadata } from "next";

export const notFoundMetadata: Metadata = {
  // TODO: ちょっとメッセージが雑
  title: "ページが見つかりませんでした",
  description: "ページが見つかりませんでした",
};

export const generateArticleMetadata = async (
  slug: string,
  contentsDir: ContentsDir,
): Promise<Metadata> => {
  const exists = await contentsDir.existsSlug(slug);

  if (!exists) {
    return {
      ...notFoundMetadata,
      openGraph: {
        type: "article",
        url: `/article/${encodeURIComponent(slug)}`,
      },
    };
  }

  const { title, description } = await contentsDir.getArticle(slug);

  return {
    title,
    description,
    openGraph: {
      type: "article",
      url: `/article/${encodeURIComponent(slug)}`,
    },
  };
};
