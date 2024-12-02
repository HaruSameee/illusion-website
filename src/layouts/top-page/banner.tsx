import Logo from "@/layouts/top-page/logo/logo";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";
import "@/layouts/top-page/styles/snowfall.css";
import PrimaryLinkList from "@/layouts/top-page/primary-link-list";

export default function Banner(): ReactNode {
  return (
    <Stack
      paddingY={3}
      position="relative"
      overflow="hidden"
      minHeight="15rem"
      sx={{
        "::before": {
          content: '""',
          backgroundImage:
            "linear-gradient(to right bottom, #152b59, #102040, #62abd9, #85e7f2, #59564f)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
          position: "absolute",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          zIndex: -1,
          filter: "blur(0.5rem) brightness(0.75)",
        },
      }}
    >
      <Box
        className="snows"
        sx={{
          "--snowball-color": "snow",
          "--snowball-blur": "1px",
        }}
      >
        <div />
        <div />
        <div />
        <div />
      </Box>
      <Container>
        <Stack
          zIndex={1}
          spacing={5}
          direction="row"
          alignItems="flex-end"
          justifyContent="space-between"
          flexWrap="wrap"
          padding={3}
          borderRadius="5px"
        >
          <Stack spacing={1} alignItems="flex-start" zIndex={1}>
            <Logo />
            <Typography variant="h5" component="p">
              AyanamistによるDiscord雑談サーバー
            </Typography>
          </Stack>
          <Box zIndex={1}>
            <PrimaryLinkList />
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
}
