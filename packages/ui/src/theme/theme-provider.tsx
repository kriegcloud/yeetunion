"use client";

import type { Theme } from "@mui/material/styles";
import type { ThemeProviderProps as MuiThemeProviderProps } from "@mui/material/styles/ThemeProvider";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as ThemeVarsProvider } from "@mui/material/styles";

import { useSettingsContext } from "./settings";

import { createTheme } from "./create-theme";
import { Rtl } from "./with-settings";

import type {} from ".";
import type { ThemeOptions } from "./types";

// ----------------------------------------------------------------------

export type ThemeProviderProps = Omit<MuiThemeProviderProps, "theme"> & {
  theme?: Theme;
  themeOverrides?: ThemeOptions;
  // biome-ignore lint/suspicious/noExplicitAny: TODO type me
  currentLang: any;
};

export function ThemeProvider({
  themeOverrides,
  children,
  currentLang = "en",
  ...other
}: ThemeProviderProps) {
  const settings = useSettingsContext();

  const theme = createTheme({
    settingsState: settings.state,
    localeComponents: currentLang?.systemValue,
    themeOverrides,
  });

  return (
    <ThemeVarsProvider disableTransitionOnChange theme={theme} {...other}>
      <CssBaseline />
      {/* biome-ignore lint/style/noNonNullAssertion: <explanation> */}
      <Rtl direction={settings.state.direction!}>{children}</Rtl>
    </ThemeVarsProvider>
  );
}
