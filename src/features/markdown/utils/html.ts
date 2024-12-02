import MarkdownLink from "@/features/markdown/components/markdown-link";
import type { Heading, Html, Markdown } from "@/features/markdown/utils/types";
import { HeadingLevel } from "@/features/markdown/utils/types";
import { load } from "cheerio";
import type { Root } from "hast";
import { select, selectAll } from "hast-util-select";
import { toText } from "hast-util-to-text";
import { execPipe, map, toArray } from "iter-tools";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import rehypeBudoux from "rehype-budoux";
import rehypeImgSize from "rehype-img-size";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeRaw from "rehype-raw";
import rehypeReact, { type Options as RehypeReactOptions } from "rehype-react";
import rehypeShiftHeading from "rehype-shift-heading";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { type Plugin, unified } from "unified";

type RehypeFixResourceLinkOptions = {
  baseUrl: URL;
};

const rehypeFixResourceLink: Plugin<[RehypeFixResourceLinkOptions], Root> =
  ({ baseUrl }) =>
  (root) => {
    const images = selectAll("[src],[href]", root);

    for (const image of images) {
      const prop = "src" in image.properties ? "src" : "href";
      const value = image.properties[prop];

      if (typeof value !== "string") {
        continue;
      }

      const isAbsoluteUrl = (() => {
        try {
          new URL(value);

          return true;
        } catch {
          return false;
        }
      })();

      if (isAbsoluteUrl) {
        continue;
      }

      if (
        value.startsWith(".") ||
        value.startsWith("/") ||
        value.startsWith("#") ||
        value.startsWith("?")
      ) {
        continue;
      }

      image.properties[prop] = new URL(value, baseUrl).href;
    }
  };

const rehypeFootnoteTitle: Plugin<[], Root> = () => (root) => {
  for (const footnote of selectAll("li:has([dataFootnoteBackref])", root)) {
    const link = select("a", footnote);
    const href = link?.properties.href;

    if (!link || typeof href !== "string" || !href.startsWith("#")) {
      continue;
    }

    const referenceLink = select(href, root);

    if (referenceLink) {
      referenceLink.properties.title = toText(footnote);
    }
  }
};

export const rehypeFixFootnote: Plugin<[], Root> = () => (root) => {
  const heading = select("#footnote-label", root);

  if (heading) {
    // NOTE: Modify h1 to be h2 because the rehype-react lowers the level of the heading
    heading.tagName = "h1";
  }
};

export const toHtml = async (
  baseUrl: URL,
  markdown: Markdown,
): Promise<Html> => {
  const { renderToString } = await import("react-dom/server");

  return await unified()
    // @ts-expect-error: TODO: type error
    .use(remarkParse)
    .use(remarkRehype, {
      allowDangerousHtml: true,
    })
    .use(rehypeRaw)
    .use(rehypeFixResourceLink, {
      baseUrl,
    })
    .use(rehypeFootnoteTitle)
    .use(rehypeFixFootnote)
    .use(remarkGfm)
    .use(rehypePrettyCode, {
      defaultLang: "plaintext",
    })
    .use(rehypeImgSize)
    .use(rehypeShiftHeading, {
      shift: 1,
    })
    .use(rehypeSlug)
    .use(rehypeBudoux, {
      className: "budoux-breaked",
    })
    // @ts-expect-error: TODO: type error
    .use(rehypeReact, {
      Fragment,
      jsx,
      jsxs,
      components: {
        a: MarkdownLink,
      },
    } as RehypeReactOptions)
    .process(markdown)
    // @ts-expect-error: TODO: type error
    .then(({ result }) => renderToString(result));
};

export const getHeadingLevel = (tagName: string): HeadingLevel => {
  switch (tagName) {
    case "h1": {
      return HeadingLevel.H1;
    }

    case "h2": {
      return HeadingLevel.H2;
    }

    case "h3": {
      return HeadingLevel.H3;
    }

    case "h4": {
      return HeadingLevel.H4;
    }

    case "h5": {
      return HeadingLevel.H5;
    }

    // h6 and other elements as h6
    default: {
      return HeadingLevel.H6;
    }
  }
};

export const getHeadings = (html: Html): Heading[] => {
  const $ = load(html);

  return execPipe(
    $(":header"),
    map((e) => ({
      level: getHeadingLevel(e.tagName),
      id: $(e).attr("id") as string,
      textContent: $(e).text(),
    })),
    toArray,
  );
};
