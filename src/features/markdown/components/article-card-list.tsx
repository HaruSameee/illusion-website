import Grid from "@mui/material/Grid2";

import ArticleCard from "@/features/markdown/components/article-card";

import type { Article } from "@/features/markdown/utils/types";

export type ArticleCardListProps = {
  articles: Article[];
};

export default function ArticleCardList({ articles }: ArticleCardListProps) {
  return (
    <Grid container spacing={2}>
      {articles.map((article) => (
        <Grid size={{ xs: 12, sm: 6 }} key={article.slug}>
          <ArticleCard {...article} />
        </Grid>
      ))}
    </Grid>
  );
}
