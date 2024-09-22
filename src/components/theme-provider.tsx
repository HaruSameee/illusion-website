"use client";

import { notoSansJp } from "@/utils/font";
import CssBaseline from "@mui/material/CssBaseline";
import { blue } from "@mui/material/colors";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  darken,
  extendTheme,
} from "@mui/material/styles";
import type { PropsWithChildren } from "react";

export type ThemeProviderProps = PropsWithChildren;

export default function ThemeProvider({
  children,
}: ThemeProviderProps): JSX.Element {
  const background = darken(blue[900], 0.8);
  const theme = extendTheme({
    typography: {
      fontFamily: [
        notoSansJp.style.fontFamily,
        "Helvetica",
        "Arial",
        "sans-serif",
      ].join(","),
    },
    colorSchemes: {
      dark: {
        palette: {
          background: {
            default: background,
            paper: background,
          },
        },
      },
    },
  });

  return (
    <CssVarsProvider theme={theme} defaultColorScheme="dark" defaultMode="dark">
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}
