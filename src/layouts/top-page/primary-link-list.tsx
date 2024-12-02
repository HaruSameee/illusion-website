"use client";

import DiscordIcon from "@/components/discord-icon";
import PrimaryLink from "@/layouts/top-page/primary-link";
import ArticleIcon from "@mui/icons-material/Article";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import type { ReactNode } from "react";

export default function PrimaryLinkList(): ReactNode {
  return (
    <Paper variant="outlined">
      <Stack direction="row" spacing={2} padding={2}>
        <PrimaryLink Icon={DiscordIcon} href="#discord">
          Discord
        </PrimaryLink>
        <PrimaryLink Icon={ArticleIcon} href="/articles">
          ブログ
        </PrimaryLink>
      </Stack>
    </Paper>
  );
}
