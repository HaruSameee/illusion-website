import ThemeProvider from "@/components/theme-provider";
import { notoSansJp } from "@/utils/font";
import { generateDefaultMetadata } from "@/utils/metadata";
import type { Metadata } from "next";
import type { Viewport } from "next";
import type { ReactNode } from "react";

export const viewport: Viewport = {
  themeColor: "#000d1a",
};

type LayoutProps = {
  children: ReactNode;
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const generateMetadata = (_: unknown, parent: any): Metadata =>
  generateDefaultMetadata(parent);

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <html lang="ja">
      <head />
      <body className={notoSansJp.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
