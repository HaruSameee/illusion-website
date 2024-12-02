import NotFoundPage from "@/layouts/not-found-page/not-found-page";
import { generateNotFoundMetadata } from "@/utils/metadata";
import type { ReactNode } from "react";

export const generateMetadata = generateNotFoundMetadata;

export default function NotFound(): ReactNode {
  return <NotFoundPage />;
}
