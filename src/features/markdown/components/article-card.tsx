"use client";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import { summarize } from "@/features/markdown/utils/summarize";

import type { Article } from "@/features/markdown/utils/types";
import DraftBadge from "./draft-badge";

export type ArticleCardProps = Article;

export default function ArticleCard({
  html,
  slug,
  title,
  draft,
}: ArticleCardProps) {
  const shortDescription = summarize(html, { maxLength: 50 });

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      component="article"
    >
      <CardActionArea
        sx={{ flex: 1 }}
        LinkComponent={Link}
        href={`/article/${slug}`}
      >
        <CardContent>
          <Stack alignItems="center" direction="row" spacing={1}>
            <Typography component="h1" variant="h6">
              {title}
            </Typography>
            {draft && <DraftBadge />}
          </Stack>
          <Typography color="text.secondary">{shortDescription}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
