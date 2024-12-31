"use client";
import type { ComponentsOverrides, Theme } from "@mui/material/styles";

import type { Settings, Skin, SystemMode } from "./types";

import colorSchemes from "./configs/colorSchemes";
import customShadows from "./custom/customShadows";
import shadows from "./custom/shadows";
import spacing from "./custom/spacing";
import typography from "./custom/typography";
import overrides from "./overrides";

import type {} from "@mui/lab/themeAugmentation"; //! Do not remove this import otherwise you will get type errors while making a production build
import type {} from "@mui/material/themeCssVarsAugmentation"; //! Do not remove this import otherwise you will get type errors while making a production build

import type {
  CustomInputHorizontalProps,
  CustomInputImgProps,
  CustomInputVerticalProps,
} from "./custom/custom-inputs";

declare module "@mui/material/styles" {
  // Theme
  interface Theme {
    customColors: {
      dark: string;
      main: string;
      light: string;
      bodyBg: string;
      darkBg: string;
      lightBg: string;
      trackBg: string;
      avatarBg: string;
      tableHeaderBg: string;
    };

    shape: {
      borderRadius: number;
      customBorderRadius: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
      };
    };
    customShadows: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    mainColorChannels: {
      light: string;
      dark: string;
      lightShadow: string;
      darkShadow: string;
    };
  }
  interface ThemeOptions {
    shape?: {
      borderRadius?: number;
      customBorderRadius?: {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
      };
    };
    customShadows?: {
      xs?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
    };
    mainColorChannels?: {
      light?: string;
      dark?: string;
      lightShadow?: string;
      darkShadow?: string;
    };
  }

  // Palette Color
  interface PaletteColor {
    lighterOpacity?: string;
    lightOpacity?: string;
    mainOpacity?: string;
    darkOpacity?: string;
    darkerOpacity?: string;
  }
  interface SimplePaletteColorOptions {
    lighterOpacity?: string;
    lightOpacity?: string;
    mainOpacity?: string;
    darkOpacity?: string;
    darkerOpacity?: string;
  }

  // Palette
  interface Palette {
    alternate: {
      main: string;
      dark: string;
    };
    customColors: {
      dark: string;
      main: string;
      light: string;
      bodyBg: string;
      darkBg: string;
      lightBg: string;
      trackBg: string;
      avatarBg: string;
      tableHeaderBg: string;
    };
  }
  interface PaletteOptions {
    alternate: {
      main: string;
      dark: string;
    };
    customColors?: {
      dark?: string;
      main?: string;
      light?: string;
      bodyBg?: string;
      darkBg?: string;
      lightBg?: string;
      trackBg?: string;
      avatarBg?: string;
      tableHeaderBg?: string;
      primaryGradient?: string;
    };
  }

  // Components
  interface ComponentNameToClassKey {
    MuiCustomInputHorizontal: "root" | "title" | "meta" | "content" | "input";
    MuiCustomInputVertical: "root" | "title" | "content" | "input";
    MuiCustomImage: "root" | "image" | "input";
  }

  interface ComponentsPropsList {
    MuiCustomInputHorizontal: CustomInputHorizontalProps;
    MuiCustomInputVertical: CustomInputVerticalProps;
    MuiCustomImage: CustomInputImgProps;
  }

  interface Components {
    MuiCustomInputHorizontal?: {
      defaultProps?: ComponentsPropsList["MuiCustomInputHorizontal"];
      styleOverrides?: ComponentsOverrides<Theme>["MuiCustomInputHorizontal"];
    };
    MuiCustomInputVertical?: {
      defaultProps?: ComponentsPropsList["MuiCustomInputVertical"];
      styleOverrides?: ComponentsOverrides<Theme>["MuiCustomInputVertical"];
    };
    MuiCustomImage?: {
      defaultProps?: ComponentsPropsList["MuiCustomImage"];
      styleOverrides?: ComponentsOverrides<Theme>["MuiCustomImage"];
    };
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    tonal: true;
  }
}

declare module "@mui/material/Pagination" {
  interface PaginationPropsVariantOverrides {
    tonal: true;
  }
}

declare module "@mui/lab/TimelineDot" {
  interface TimelineDotPropsVariantOverrides {
    tonal: true;
  }
}

export const coreTheme = (
  settings: Settings,
  mode: SystemMode,
  direction: Theme["direction"],
): Theme => {
  return {
    direction,
    components: overrides(settings.skin as Skin),
    colorSchemes: colorSchemes(settings.skin as Skin),
    ...spacing,
    shape: {
      borderRadius: 6,
      customBorderRadius: {
        xs: 2,
        sm: 4,
        md: 6,
        lg: 8,
        xl: 10,
      },
    },
    shadows: shadows(mode),
    typography: typography("Inter"),
    customShadows: customShadows(mode),
    mainColorChannels: {
      light: "46 38 61",
      dark: "231 227 252",
      lightShadow: "46 38 61",
      darkShadow: "19 17 32",
    },
  } as Theme;
};

export * from "./custom";
export * from "./types";
export * from "./configs";
