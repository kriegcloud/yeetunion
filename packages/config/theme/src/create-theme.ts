'use client';

import type {SettingsState} from './settings';
import type {Components, Theme} from '@mui/material/styles';
import {createTheme as createMuiTheme} from '@mui/material/styles';

import {mixins} from './core/mixins';
import {shadows} from './core/shadows';
import {palette} from './core/palette';
import {themeConfig} from './theme-config';
import {components} from './core/components';
import {typography} from './core/typography';
import {customShadows} from './core/custom-shadows';
import {updateComponentsWithSettings, updateCoreWithSettings} from './with-settings';

import type {ThemeOptions} from './types';

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
  },
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
  const updatedCore = settingsState ? updateCoreWithSettings(baseTheme, settingsState) : baseTheme;

  // Update component settings
  const updatedComponents = settingsState
    ? updateComponentsWithSettings(components, settingsState)
    : {};

  // Create and return the final theme
  return createMuiTheme(updatedCore, updatedComponents, localeComponents, themeOverrides);
}
