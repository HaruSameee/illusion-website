"use client";

import LogoParts from "@/layouts/top-page/logo/logo-parts";
import { logoFont } from "@/theme/fonts";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export default function Logo(): ReactNode {
  return (
    <Typography
      variant="h2"
      component="h1"
      sx={{
        cursor: "default",
        ...logoFont.style,
        ".logo-accent": {
          transition: (theme) => theme.transitions.create(["color"]),
        },
        ":hover .logo-accent": {
          color: "primary.main",
        },
      }}
    >
      <LogoParts>ILLUSI</LogoParts>
      <LogoParts accent>O</LogoParts>
      <LogoParts>N</LogoParts>
    </Typography>
  );
}
