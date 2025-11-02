import Banner from "@/layouts/top-page/banner";
import BlogSection, {
  type BlogSectionProps,
} from "@/layouts/top-page/blog-section";
import DiscordInviteSection from "@/layouts/top-page/discord-invite-section";
import HelpBoard from "@/layouts/top-page/help-board";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";
import TopNav from "./top-nav";

export interface TopPageProps extends BlogSectionProps {}

export default function TopPage({ blogArticles }: TopPageProps): ReactNode {
  return (
    <Stack minHeight="100svh">
      <Banner />
      <TopNav />
      <Box paddingTop={1}>
        <HelpBoard />
      </Box>
      <Stack flex={1}>
        <Container>
          <Stack paddingY={6} spacing={10}>
            <DiscordInviteSection />
            <BlogSection blogArticles={blogArticles} />
          </Stack>
        </Container>
      </Stack>
      <Container>
        <Stack
          direction="row"
          paddingY={3}
          alignItems="center"
          justifyContent="flex-end"
        >
          <Typography color="textSecondary">
            © 2023 illusion, All Rights Reserved.
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
}
