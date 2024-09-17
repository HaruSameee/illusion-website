"use client";

import { logoFont } from "@/features/theme/utils/fonts";
import Typography from "@mui/material/Typography";
import type { PropsWithChildren, ReactNode } from "react";

export type LogoPartsProps = PropsWithChildren<{
  accent?: boolean;
}>;

export default function LogoParts({
  accent,
  children,
}: LogoPartsProps): ReactNode {
  return (
    <Typography
      fontSize="inherit"
      {...logoFont.style}
      component="span"
      color={accent ? "secondary.main" : "text.secondary"}
    >
      {children}
    </Typography>
  );
}
