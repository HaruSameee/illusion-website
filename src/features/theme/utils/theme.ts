"use client";

import { primaryFont } from "@/features/theme/utils/fonts";
import { blue } from "@mui/material/colors";
import { createTheme, darken } from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation";

export type BrickPalette = {
  default: string;
  accent: string;
  gap: string;
};

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

const backgroundDefaultColor = darken(blue[900], 0.8);
const backgroundPaperColor = darken(blue[900], 0.75);
const brickDefaultColor = darken(blue[900], 0.6);
const darkBrickDefaultColor = darken(brickDefaultColor, 0.6);

export const theme = createTheme({
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
    fontSize: 16,
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
          paper: backgroundPaperColor,
        },
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: "class",
  },
});
