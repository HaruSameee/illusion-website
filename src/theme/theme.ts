"use client";

import { primaryFont } from "@/theme/fonts";
import { blue } from "@mui/material/colors";
import { createTheme, darken } from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation";

export interface BrickPalette {
  default: string;
  accent: string;
  gap: string;
}

declare module "@mui/material/styles" {
  interface PaletteOptions {
    brick: BrickPalette;
    darkBrick: BrickPalette;
  }

  interface Palette {
    brick: BrickPalette;
    darkBrick: BrickPalette;
  }
}

const backgroundDefaultColor = "#000d1a";
const brickDefaultColor = darken(blue.A700, 0.85);
const darkBrickDefaultColor = darken(brickDefaultColor, 0.1);

export const theme = createTheme({
  cssVariables: true,
  defaultColorScheme: "dark",
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
  typography: {
    ...primaryFont.style,
    htmlFontSize: 15,
  },
  colorSchemes: {
    dark: {
      palette: {
        brick: {
          default: brickDefaultColor,
          accent: darken(brickDefaultColor, 0.25),
          gap: darken(brickDefaultColor, 0.8),
        },
        darkBrick: {
          default: darkBrickDefaultColor,
          accent: darken(darkBrickDefaultColor, 0.25),
          gap: darken(darkBrickDefaultColor, 0.8),
        },
        background: {
          default: backgroundDefaultColor,
        },
      },
    },
    light: false,
  },
});
