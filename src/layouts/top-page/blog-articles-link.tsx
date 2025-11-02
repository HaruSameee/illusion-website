"use client";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Button from "@mui/material/Button";
import NextLink from "next/link";

export default function BlogArticlesLink() {
  return (
    <Button
      LinkComponent={NextLink}
      href="/articles"
      endIcon={<ArrowRightIcon />}
    >
      すべての記事
    </Button>
  );
}
