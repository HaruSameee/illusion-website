import NonRootPage from "@/components/non-root-page";
import { siteName } from "@/consts/site";
import ArticleCardList from "@/features/markdown/components/article-card-list";
import { ContentsDir } from "@/features/markdown/utils/content";
import { generateDefaultMetadata } from "@/utils/metadata";
import Typography from "@mui/material/Typography";
import type { Metadata } from "next";

const ARTICLE_CONTENT_DIR = new ContentsDir("article");

export const generateMetadata = async (
  _: unknown,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  parent: any,
): Promise<Metadata> => {
  const title = "ブログ";
  const description = "ブログの記事一覧";
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

export default async function Page(): Promise<JSX.Element> {
  const articles = await ARTICLE_CONTENT_DIR.getAllArticles();

  return (
    <NonRootPage
      breadcrumbs={[
        {
          href: "/",
          label: siteName,
        },
        {
          label: "ブログ",
          emphasis: true,
        },
      ]}
    >
      <Typography component="h1" variant="h5" fontWeight="bold">
        ブログ
      </Typography>
      {articles.length > 0 && (
        <ArticleCardList
          articles={articles
            .slice()
            .sort((a, b) => b.createdTimestamp - a.createdTimestamp)}
        />
      )}
      {articles.length === 0 && (
        <Typography>今のところ記事はまだないようです ¯\_(ツ)_/¯</Typography>
      )}
    </NonRootPage>
  );
}
