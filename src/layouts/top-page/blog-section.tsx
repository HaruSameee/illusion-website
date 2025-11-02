"use client";

import IconTypography from "@/components/icon-typography";
import ArticleCardList from "@/features/markdown/components/article-card-list";
import type { Article } from "@/features/markdown/utils/types";
import ArticleIcon from "@mui/icons-material/Article";
import MuiLink from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NextLink from "next/link";
import type { ReactNode } from "react";

export interface BlogSectionProps {
  blogArticles: Article[];
}

export default function BlogSection({
  blogArticles,
}: BlogSectionProps): ReactNode {
  return (
    <Stack spacing={2} component="section">
      <IconTypography Icon={ArticleIcon} component="h2" variant="h6">
        ブログ
      </IconTypography>
      <ArticleCardList
        articles={blogArticles
          .slice()
          .sort((a, b) => b.createdTimestamp - a.createdTimestamp)
          .slice(0, 2)}
      />
      {blogArticles.length > 2 && (
        <div>
          <MuiLink component={NextLink} href="/articles">
            もっと見る
          </MuiLink>
        </div>
      )}
    </Stack>
  );
}
