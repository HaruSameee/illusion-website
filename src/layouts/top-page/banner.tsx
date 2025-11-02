"use client";

import Logo from "@/layouts/top-page/logo";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export default function Banner(): ReactNode {
  return (
    <Stack
      position="relative"
      overflow="hidden"
      alignItems="center"
      direction="row"
      sx={{
        "::before": {
          content: '""',
          backgroundImage:
            "linear-gradient(to right bottom, #152b59, #102040, #62abd9, #85e7f2, #59564f)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
          position: "absolute",
          inset: "-5px",
          zIndex: -1,
          filter: "blur(5px) brightness(0.75)",
        },
      }}
    >
      <Container>
        <Stack
          zIndex={1}
          spacing={5}
          direction="row"
          alignItems="flex-end"
          justifyContent="space-between"
          flexWrap="wrap"
          paddingY={6}
          borderRadius="5px"
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              paddingY: 3,
            },
          })}
        >
          <Stack spacing={1} alignItems="flex-start" zIndex={1}>
            <Logo />
            <Typography variant="h5" component="p">
              AyanamistによるDiscord雑談サーバー
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
