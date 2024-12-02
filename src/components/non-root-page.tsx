"use client";

import Breadcrumbs, {
  type BreadcrumbsItem,
} from "@/features/markdown/components/breadcrumbs";
import Header from "@/features/markdown/components/header";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import type { PropsWithChildren } from "react";

export type NonRootPageProps = PropsWithChildren<{
  breadcrumbs?: BreadcrumbsItem[];
}>;

export default function NonRootPage({
  breadcrumbs = [],
  children,
}: NonRootPageProps): JSX.Element {
  return (
    <Stack alignItems="flex-start">
      <Header />
      <Container
        sx={{
          paddingY: "1rem",
        }}
      >
        <Stack spacing={2}>
          {breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
          <Divider />
          {children}
        </Stack>
      </Container>
    </Stack>
  );
}
