import ArticleCardList from "@/features/markdown/components/article-card-list";
import type { Article } from "@/features/markdown/utils/types";
import ArticleIcon from "@mui/icons-material/Article";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import BlogArticlesLink from "./blog-articles-link";

export interface BlogSectionProps {
  blogArticles: Article[];
}

export default async function BlogSection({ blogArticles }: BlogSectionProps) {
  return (
    <Stack component="section" spacing={3}>
      <Typography
        component="h2"
        variant="h5"
        display="flex"
        alignItems="center"
        gap="0.5rem"
      >
        <ArticleIcon />
        ブログ
      </Typography>
      <ArticleCardList
        articles={blogArticles
          .slice()
          .sort((a, b) => b.createdTimestamp - a.createdTimestamp)
          .slice(0, 2)}
      />
      <Box>
        <BlogArticlesLink />
      </Box>
    </Stack>
  );
}
