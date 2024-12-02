"use client";

import { notoSansJp } from "@/utils/font";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { blue } from "@mui/material/colors";
import {
  ThemeProvider as MuiThemeProvider,
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
    <AppRouterCacheProvider>
      <MuiThemeProvider theme={theme} defaultMode="dark">
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  );
}
