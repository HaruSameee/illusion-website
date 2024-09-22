import { $boolean, $object, $opt, $string, type Infer } from "lizod";
import type { FileTimestamp } from "./content";

export type Html = string;

export type Markdown = string;

export type Path = string;

export type Slug = string;

export const HeadingLevel = {
  H1: 1,
  H2: 2,
  H3: 3,
  H4: 4,
  H5: 5,
  H6: 6,
} as const;

export type HeadingLevel = (typeof HeadingLevel)[keyof typeof HeadingLevel];

export type Heading = {
  level: HeadingLevel;
  id: string;
  textContent: string;
};

export type Article = FileTimestamp & {
  slug: Slug;
  title: string;
  description: string;
  draft: boolean;
  html: Html;
};

export const ArticleFrontMatter = $object({
  title: $string,
  draft: $opt($boolean),
});

export type ArticleFrontMatter = Infer<typeof ArticleFrontMatter>;
