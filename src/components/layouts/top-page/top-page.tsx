import IconTypography from "@/components/icon-typography";
import DiscordInviteSection from "@/components/layouts/top-page/discord-invite-section";
import HelpBoard from "@/components/layouts/top-page/help-board";
import LogoParts from "@/components/layouts/top-page/logo-parts";
import { logoFont } from "@/features/theme/utils/fonts";
import ArticleIcon from "@mui/icons-material/Article";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export default function TopPage(): ReactNode {
  return (
    <Stack minHeight="100svh">
      <Stack
        paddingY={8}
        overflow="hidden"
        position="relative"
        sx={{
          "::before": {
            content: '""',
            backgroundImage: "url(/images/banner-896x504.webp)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center 60%",
            position: "absolute",
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            zIndex: -1,
            filter: "blur(0.5rem) brightness(0.5)",
          },
        }}
      >
        <Container>
          <Stack spacing={1}>
            <Typography variant="h2" component="h1" sx={logoFont.style}>
              <LogoParts>ILLUSI</LogoParts>
              <LogoParts accent>O</LogoParts>
              <LogoParts>N</LogoParts>
            </Typography>
            <Typography variant="h5" component="p">
              AyanamistによるDiscord雑談サーバー
            </Typography>
          </Stack>
        </Container>
      </Stack>
      <HelpBoard />
      <Stack flex={1}>
        <Container>
          <Stack paddingY={6} spacing={7}>
            <DiscordInviteSection />
            <Stack spacing={2} component="section">
              <IconTypography Icon={ArticleIcon} component="h2" variant="h6">
                ブログ
              </IconTypography>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
}
