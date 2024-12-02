"use client";

import Box from "@mui/material/Box";
import type { PropsWithChildren, ReactNode } from "react";

export type BrickWallProps = PropsWithChildren<{
  dark?: boolean;
}>;

export default function BrickWall({
  children,
  dark = false,
}: BrickWallProps): ReactNode {
  const paletteKey = dark ? "darkBrick" : "brick";

  return (
    <Box
      sx={(theme) => ({
        background: `linear-gradient(to bottom, ${theme.vars.palette.background.default} 0%, transparent 25%, transparent 75%, ${theme.vars.palette.background.default} 100%),
                conic-gradient(at 5% 45%, ${theme.vars.palette[paletteKey].default} 90deg, transparent 90deg) 0px 0px / 40px 40px,
                conic-gradient(at 5% 45%, ${theme.vars.palette[paletteKey].accent} 90deg, transparent 90deg) 20px 20px / 40px 40px,
                ${theme.vars.palette[paletteKey].gap}`,
      })}
    >
      {children}
    </Box>
  );
}
