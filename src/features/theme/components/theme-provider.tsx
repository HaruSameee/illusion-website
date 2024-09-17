import { theme } from "@/features/theme/utils/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import type { PropsWithChildren, ReactNode } from "react";

export default function ThemeProvider({
  children,
}: PropsWithChildren): ReactNode {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
