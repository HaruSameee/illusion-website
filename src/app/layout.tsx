import ThemeProvider from "@/features/theme/components/theme-provider";
import { primaryFont } from "@/features/theme/utils/fonts";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import type { PropsWithChildren, ReactNode } from "react";

export default function Layout({ children }: PropsWithChildren): ReactNode {
  return (
    <html lang="ja" className="dark">
      <head />
      <body className={primaryFont.className}>
        <AppRouterCacheProvider>
          <InitColorSchemeScript attribute="class" />
          <ThemeProvider>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
