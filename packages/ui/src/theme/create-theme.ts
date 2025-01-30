"use client";

import type { Components, Theme } from "@mui/material/styles";
import { createTheme as createMuiTheme } from "@mui/material/styles";
import type { SettingsState } from "./settings";

import { components } from "./core/components";
import { customShadows } from "./core/custom-shadows";
import { mixins } from "./core/mixins";
import { palette } from "./core/palette";
import { shadows } from "./core/shadows";
import { typography } from "./core/typography";
import { themeConfig } from "./theme-config";
import {
  updateComponentsWithSettings,
  updateCoreWithSettings,
} from "./with-settings";

import type { ThemeOptions } from "./types";

// ----------------------------------------------------------------------

export const baseTheme: ThemeOptions = {
  colorSchemes: {
    light: {
      palette: palette.light,
      shadows: shadows.light,
      customShadows: customShadows.light,
    },
    dark: {
      palette: palette.dark,
      shadows: shadows.dark,
      customShadows: customShadows.dark,
    },
  } as ThemeOptions["colorSchemes"],
  mixins,
  components,
  typography,
  shape: { borderRadius: 8 },
  direction: themeConfig.direction,
  cssVariables: themeConfig.cssVariables,
  defaultColorScheme: themeConfig.defaultMode,
};

// ----------------------------------------------------------------------

type CreateThemeProps = {
  settingsState?: SettingsState;
  themeOverrides?: ThemeOptions;
  localeComponents?: { components?: Components<Theme> };
};

export function createTheme({
  settingsState,
  themeOverrides = {},
  localeComponents = {},
}: CreateThemeProps = {}): Theme {
  // Update core theme settings
  const updatedCore = settingsState
    ? updateCoreWithSettings(baseTheme, settingsState)
    : baseTheme;

  // Update component settings
  const updatedComponents = settingsState
    ? updateComponentsWithSettings(components, settingsState)
    : {};

  // Create and return the final theme
  return createMuiTheme(
    updatedCore,
    updatedComponents,
    localeComponents,
    themeOverrides,
  );
}
