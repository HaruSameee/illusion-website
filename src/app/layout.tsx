import { siteDescription, siteName, siteShortDescription } from "@/consts/site";
import ThemeProvider from "@/theme/theme-provider";
import type { Metadata } from "next";
import type { Viewport } from "next";
import type { ReactNode } from "react";

export const viewport: Viewport = {
  themeColor: "#000d1a",
};

type LayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  // TODO: asキャスト
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
  title: {
    template: `%s | ${siteName}`,
    absolute: `${siteName} - ${siteShortDescription}`,
  },
  description: siteDescription,
  openGraph: {
    siteName,
    images: [
      {
        alt: "",
        width: 1200,
        height: 630,
        type: "image/webp",
        url: "/images/ogp-image-1200x630.png",
      },
    ],
  },
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicons/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicons/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "194x194",
      url: "/favicons/favicon-194x194.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/favicons/android-chrome-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicons/favicon-16x16.png",
    },
    {
      rel: "shortcut icon",
      url: "/favicons/favicon.ico",
    },
  ],
  manifest: "/favicons/site.webmanifest",
  other: {
    "msapplication-TileColor": "#2d89ef",
    "msapplication-TileImage": "/favicons/mstile-144x144.png",
    "msapplication-config": "/favicons/browserconfig.xml",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
