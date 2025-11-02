"use client";

import DiscordIcon from "@/components/discord-icon";
import IconTypography from "@/components/icon-typography";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Divider from "@mui/material/Divider";
import MuiLink from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import type { ReactNode } from "react";

export default function DiscordInviteSection(): ReactNode {
  return (
    <Stack spacing={2} component="section" id="discord">
      <IconTypography Icon={DiscordIcon} component="h2" variant="h6">
        Discordサーバーに参加
      </IconTypography>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        <Typography fontSize="1.5rem">参加する前に：</Typography>
        <Stack direction="row" sx={{ columnGap: 2 }} flexWrap="wrap">
          <MuiLink
            underline="hover"
            component={NextLink}
            href="/discord/guidelines"
            fontSize="1.5rem"
          >
            Discordサーバーガイドライン
          </MuiLink>
          <Divider flexItem orientation="vertical" />
          <MuiLink
            underline="hover"
            component={NextLink}
            href="/discord/roles"
            fontSize="1.5rem"
          >
            Discordサーバーのロールについて
          </MuiLink>
        </Stack>
      </Stack>
      <div>
        <MuiLink
          fontWeight="bold"
          href="https://discord.gg/aynm"
          target="_blank"
          rel="noopener noreferrer"
          fontSize="1.5rem"
        >
          <span>discord.gg/aynm</span>
          <OpenInNewIcon fontSize="inherit" sx={{ verticalAlign: "middle" }} />
        </MuiLink>
      </div>
    </Stack>
  );
}
