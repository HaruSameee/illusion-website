"use client";

import DiscordIcon from "@/components/discord-icon";
import { discordInviteCode } from "@/consts/discord";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import MuiLink from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import styles from "./discord-invite-section.module.css";

export default function DiscordInviteSection() {
  return (
    <Stack component="section" spacing={3}>
      <Typography
        component="h2"
        variant="h5"
        display="inline-flex"
        alignItems="center"
        gap="0.5rem"
        id="discord"
      >
        <DiscordIcon />
        Discordコミュニティ
      </Typography>
      <Card>
        <CardActionArea
          LinkComponent="a"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://discord.gg/${discordInviteCode}`}
        >
          <Stack
            component="span"
            padding={2}
            alignItems="center"
            direction="row"
            height={150}
            position="relative"
            className={styles.cardCover}
          >
            <Stack component="span" spacing={1} zIndex={1}>
              <Typography
                variant="h3"
                component="span"
                display="inline-flex"
                alignItems="center"
                gap="0.5rem"
                sx={(theme) => ({
                  [theme.breakpoints.down("md")]: {
                    fontSize: "2rem",
                  },
                })}
              >
                Join DISCORD
                <OpenInNewIcon fontSize="inherit" />
              </Typography>
              <Typography
                component="span"
                fontSize="1.5rem"
                color="textSecondary"
              >
                discord.gg/{discordInviteCode}
              </Typography>
            </Stack>
          </Stack>
        </CardActionArea>
      </Card>
      <Stack spacing={1}>
        <Stack direction="row" flexWrap="wrap" alignItems="center">
          <Typography
            component="p"
            fontSize="large"
            fontWeight="bold"
            className={styles.label}
          >
            <span>参加する前に</span>：
          </Typography>
          <MuiLink
            component={NextLink}
            fontWeight="bold"
            fontSize="large"
            href="/discord/guidelines"
          >
            Discordサーバーガイドライン
          </MuiLink>
        </Stack>
        <Stack direction="row" flexWrap="wrap" alignItems="center">
          <Typography component="p" className={styles.label}>
            <span>関連</span>：
          </Typography>
          <MuiLink component={NextLink} href="/discord/roles">
            Discordサーバーのロールについて
          </MuiLink>
        </Stack>
      </Stack>
    </Stack>
  );
}
