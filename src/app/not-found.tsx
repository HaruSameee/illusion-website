import NotFoundPage from "@/layouts/not-found-page/not-found-page";
import { notFoundMetadata } from "@/utils/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = notFoundMetadata;

export default function NotFound(): ReactNode {
  return <NotFoundPage />;
}
