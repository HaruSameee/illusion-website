"use client";

import DiscordIcon from "@/components/discord-icon";
import ArticleIcon from "@mui/icons-material/Article";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import NextLink from "next/link";

export default function TopNav() {
  return (
    <Paper elevation={0} sx={{ position: "sticky", top: 0, left: 0 }}>
      <Box padding={1}>
        <Container>
          <Stack direction="row" spacing={2} paddingY={1} alignItems="center">
            <Button
              LinkComponent={NextLink}
              href="#discord"
              size="large"
              startIcon={<DiscordIcon />}
            >
              Discord
            </Button>
            <Button
              LinkComponent={NextLink}
              href="/articles"
              size="large"
              startIcon={<ArticleIcon color="action" />}
            >
              ブログ
            </Button>
          </Stack>
        </Container>
      </Box>
    </Paper>
  );
}
