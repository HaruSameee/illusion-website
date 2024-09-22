"use client";

import { discordInviteCode } from "@/consts/discord";
import { siteDescription, siteName, siteShortDescription } from "@/consts/site";
import ArticleCardList from "@/features/markdown/components/article-card-list";
import type { Article } from "@/features/markdown/utils/types";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { lighten } from "@mui/material";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import MuiLink from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";

export type TopPageProps = {
  guidelines: Article;
  roles: Article;
  blogArticles: Article[];
};

export default function TopPage({
  guidelines,
  roles,
  blogArticles,
}: TopPageProps): JSX.Element {
  return (
    <Stack>
      <Stack
        overflow="hidden"
        paddingY={7.5}
        position="relative"
        sx={{
          "::before": {
            content: '""',
            background: (theme) =>
              lighten(theme.palette.background.default, 0.1),
            backgroundImage: "url(/images/logo-594x594.webp)",
            backgroundAttachment: "fixed",
            top: "-5px",
            bottom: "-5px",
            left: "-5px",
            right: "-5px",
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "absolute",
            filter: "blur(7.5px)",
            zIndex: "-1",
          },
        }}
        zIndex={0}
      >
        <Container>
          <Stack sx={{ textShadow: "0 0 10px #333" }}>
            <Typography color="text.secondary" component="h1" variant="h2">
              {siteName}
            </Typography>
            <Typography component="span" variant="h5">
              {siteShortDescription}
            </Typography>
          </Stack>
        </Container>
      </Stack>
      <Container>
        <Stack paddingY={4}>
          <Grid container columnSpacing={4} rowSpacing={6}>
            <Grid size={{ sm: 6 }}>
              <Paper variant="outlined">
                <Stack padding={1} spacing={1}>
                  <Typography component="h2" variant="h5">
                    illusionとは？
                  </Typography>
                  <Divider />
                  <Typography>
                    {siteDescription}
                    <br />
                    何気ない雑談から専門的な話題まで、様々なトピックが飛び交っています。
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
            <Grid size={{ sm: 6 }}>
              <Paper variant="outlined">
                <Stack padding={1} spacing={1}>
                  <Typography component="h2" variant="h5">
                    Ayanamistとは誰ですか？
                  </Typography>
                  <Divider />
                  <Typography>
                    Ayanamistとはillusionの二人の創設者のことであり、綾波レイが好きな人のことでもあります。
                    illusionではAyanamistが管理人で、2ndAyanamistが副管理人となります。
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
            <Grid size={{ sm: 12 }}>
              <Stack spacing={1}>
                <Typography component="h2" variant="h5">
                  Discordサーバーに参加
                </Typography>
                <Divider />
                <Stack alignItems="flex-start" spacing={2}>
                  <Stack
                    sx={(theme) => ({
                      flexDirection: "row",
                      gap: 2,
                      [theme.breakpoints.down("md")]: {
                        flexDirection: "column",
                        gap: 1,
                      },
                    })}
                  >
                    <MuiLink
                      component={NextLink}
                      fontSize="1.5rem"
                      href="/discord/guidelines"
                      underline="hover"
                    >
                      {guidelines.title}
                    </MuiLink>
                    <MuiLink
                      component={NextLink}
                      fontSize="1.5rem"
                      href="/discord/roles"
                      underline="hover"
                    >
                      {roles.title}
                    </MuiLink>
                  </Stack>
                  <MuiLink
                    fontSize="1.5rem"
                    href={`https://discord.gg/${discordInviteCode}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    discord.gg/{discordInviteCode}
                    <OpenInNewIcon
                      color="action"
                      sx={{ verticalAlign: "middle" }}
                    />
                  </MuiLink>
                </Stack>
              </Stack>
            </Grid>
            {blogArticles.length > 0 && (
              <Grid size={{ sm: 12 }}>
                <Stack spacing={1}>
                  <Typography component="h2" variant="h5">
                    ブログ
                  </Typography>
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
              </Grid>
            )}
          </Grid>
        </Stack>
      </Container>
    </Stack>
  );
}
