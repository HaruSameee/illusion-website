import TopPage from "@/components/top-page";
import { ContentsDir } from "@/features/markdown/utils/content";

const DISCORD_CONTENT_DIR = new ContentsDir("discord");
const ARTICLE_CONTENT_DIR = new ContentsDir("article");

export default async function Page(): Promise<JSX.Element> {
  const [roles, guidelines, blogArticles] = await Promise.all([
    DISCORD_CONTENT_DIR.getArticle("roles"),
    DISCORD_CONTENT_DIR.getArticle("guidelines"),
    ARTICLE_CONTENT_DIR.getAllArticles(),
  ]);

  return (
    <TopPage
      roles={roles}
      guidelines={guidelines}
      blogArticles={blogArticles}
    />
  );
}
