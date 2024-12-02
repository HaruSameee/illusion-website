import Banner from "@/layouts/top-page/banner";
import BlogSection, {
  type BlogSectionProps,
} from "@/layouts/top-page/blog-section";
import DiscordInviteSection from "@/layouts/top-page/discord-invite-section";
import HelpBoard from "@/layouts/top-page/help-board/help-board";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import type { ReactNode } from "react";

export interface TopPageProps extends BlogSectionProps {}

export default function TopPage({ blogArticles }: TopPageProps): ReactNode {
  return (
    <Stack minHeight="100svh">
      <Banner />
      <HelpBoard />
      <Stack flex={1}>
        <Container>
          <Stack paddingY={6} spacing={7}>
            <DiscordInviteSection />
            <Divider />
            <BlogSection blogArticles={blogArticles} />
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
}
