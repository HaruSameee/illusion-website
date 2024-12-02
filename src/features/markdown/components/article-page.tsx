"use client";

import NonRootPage from "@/components/non-root-page";
import { siteName } from "@/consts/site";
import type { BreadcrumbsItem } from "@/features/markdown/components/breadcrumbs";
import type { Article, Heading } from "@/features/markdown/utils/types";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import DraftBadge from "./draft-badge";
import TableOfContents from "./table-of-contents";
import "@/features/markdown/styles/syntax-highlight.css";

const ArticleContent = styled("div")({
  ".budoux-breaked": {
    wordBreak: "keep-all",
  },
  img: {
    maxWidth: "100%",
  },
  "h1, h2, h3, h4, h5, h6": {
    marginTop: "2rem",
  },
  ".icon-open-in-new": {
    verticalAlign: "middle",
    display: "inline-block",
    width: "1rem",
    height: "1rem",
    maskImage: "url(/icons/open-in-new.svg)",
    maskRepeat: "no-repeat",
    maskPosition: "center center",
    maskSize: "contain",
    backgroundColor: "var(--mui-palette-primary-main)",
  },
});

const ArticleContentContainer = styled(Stack)(({ theme }) => ({
  gap: "1rem",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
  },
}));

const TableOfContentsContainer = styled("div")(({ theme }) => ({
  position: "sticky",
  top: "5rem",
  [theme.breakpoints.up("md")]: {
    border: "none",
  },
  [theme.breakpoints.down("md")]: {
    padding: "0.5rem",
  },
}));

export type ArticlePageProps = Article & {
  headings: Heading[];
  breadcrumbs?: BreadcrumbsItem[];
};

export default function ArticlePage({
  title,
  html,
  draft,
  headings,
  breadcrumbs = [],
}: ArticlePageProps): JSX.Element {
  return (
    <NonRootPage
      breadcrumbs={[
        {
          label: siteName,
          href: "/",
        },
        ...breadcrumbs,
        {
          label: title,
          emphasis: true,
        },
      ]}
    >
      <Stack alignItems="flex-end" direction="row" spacing={1}>
        <Typography component="h1" variant="h5" fontWeight="bold">
          {title}
        </Typography>
        {draft && <DraftBadge />}
      </Stack>
      <ArticleContentContainer>
        <ArticleContent
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
        {headings.length > 0 && (
          <Box>
            <TableOfContentsContainer>
              <TableOfContents headings={headings} />
            </TableOfContentsContainer>
          </Box>
        )}
      </ArticleContentContainer>
    </NonRootPage>
  );
}
