"use client";

import Box from "@mui/material/Box";
import { type ReactNode, useEffect, useState } from "react";
import { throttle } from "throttle-debounce";

export interface Poem {
  id: number;
  opacity: number;
  content: string;
  top: number;
  left: number;
}

export const POEM_CONTENTS = [
  "らせん階段",
  "カブト虫",
  "廃墟の街",
  "イチジクのタルト",
  "カブト虫",
  "ドロローサへの道",
  "カブト虫",
  "特異点",
  "ジョット",
  "天使(エンジェル)",
  "紫陽花",
  "カブト虫",
  "特異点",
  "秘密の皇帝",
] as const;

export default function PoemList(): ReactNode {
  const [poems, setPoems] = useState<Poem[]>();

  useEffect(() => {
    const controller = new AbortController();
    const handleResize = throttle(500, (): void => {
      setPoems(
        POEM_CONTENTS.map((content) => ({
          id: Math.random(),
          top: Math.floor(Math.random() * window.innerHeight),
          left: Math.floor(Math.random() * window.innerWidth),
          content,
          opacity: Math.random(),
        })),
      );
    });

    handleResize();

    window.addEventListener("resize", handleResize, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {poems?.map((poem) => (
        <Box
          whiteSpace="nowrap"
          key={poem.id}
          fontSize="small"
          color="text.secondary"
          position="fixed"
          sx={{
            top: poem.top,
            left: poem.left,
            "::before": {
              filter: "blur(1px)",
              opacity: poem.opacity,
              content: `"${poem.content}"`,
            },
          }}
        />
      ))}
    </>
  );
}
