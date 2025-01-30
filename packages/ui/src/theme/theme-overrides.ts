"use client";

import { createPaletteChannel } from "@ye/utils/colors";

import type { PaletteColorChannel, PaletteColorOptions } from "@mui/material";
import type { ThemeOptions } from "./types";

// ----------------------------------------------------------------------

export const themeOverrides: ThemeOptions = {
  colorSchemes: {
    light: {
      palette: {
        primary: createPaletteChannel({
          lighter: "#E4DCFD",
          light: "#A996F8",
          main: "#6950E8",
          dark: "#3828A7",
          darker: "#180F6F",
          contrastText: "#FFFFFF",
        }) as (PaletteColorOptions & Partial<PaletteColorChannel>) | undefined,
      },
    },
    dark: {
      palette: {
        primary: createPaletteChannel({
          lighter: "#E4DCFD",
          light: "#A996F8",
          main: "#6950E8",
          dark: "#3828A7",
          darker: "#180F6F",
          contrastText: "#FFFFFF",
        }) as (PaletteColorOptions & Partial<PaletteColorChannel>) | undefined,
      },
    },
  },
};
