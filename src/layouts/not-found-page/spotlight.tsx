"use client";

import { getMouseDistanceFromElement } from "@/utils/element";
import { darken } from "@mui/material";
import Box from "@mui/material/Box";
import {
  type PropsWithChildren,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
} from "react";

const createGradient = (x?: number, y?: number): string =>
  `radial-gradient(50px 50px at ${x === undefined ? "center" : `${x}px`} ${y === undefined ? "center" : `${y}px`}, transparent, transparent 100px, rgba(0, 0, 0, 0.5) 150px, #000 300px)`;

export default function Spotlight({ children }: PropsWithChildren): ReactNode {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const spotlightMove = useCallback((event: MouseEvent): void => {
    const spotlight = spotlightRef.current;

    if (!spotlight) {
      return;
    }

    for (const neon of document.getElementsByClassName("neon")) {
      if (!(neon instanceof HTMLElement)) {
        continue;
      }

      const distance = Math.min(getMouseDistanceFromElement(event, neon), 300);
      const computedStyle = window.getComputedStyle(neon, null);
      const fontSize = Number.parseFloat(
        computedStyle.getPropertyValue("font-size"),
      );
      const shadowColor = darken(computedStyle.getPropertyValue("color"), 0);
      const ratio = distance / 100;

      neon.style.textShadow = `0 0 ${(fontSize / 5) * ratio}px ${shadowColor}`;
    }

    spotlight.style.background = createGradient(event.clientX, event.clientY);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    document.addEventListener("mousemove", spotlightMove, {
      signal: controller.signal,
    });
    document.addEventListener("mousedown", spotlightMove, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, [spotlightMove]);

  return (
    <Box
      sx={{
        ".neon": {
          position: "relative",
          zIndex: 1,
        },
      }}
    >
      {children}
      <Box
        ref={spotlightRef}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          background: createGradient(),
        }}
      />
    </Box>
  );
}
