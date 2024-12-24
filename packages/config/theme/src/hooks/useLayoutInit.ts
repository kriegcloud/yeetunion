"use client";

import { useEffect } from "react";

import { useCookie, useMedia } from "react-use";

import { useColorScheme } from "@mui/material";

import { useSettings } from "../providers/ThemeSettingsProvider";

export const useLayoutInit = (colorSchemeFallback: "light" | "dark") => {
  const { settings } = useSettings();
  const { setMode } = useColorScheme();
  const [_, updateCookieColorPref] = useCookie("colorPref");
  const isDark = useMedia(
    "(prefers-color-scheme: dark)",
    colorSchemeFallback === "dark",
  );

  useEffect(() => {
    const appMode = isDark ? "dark" : "light";

    updateCookieColorPref(appMode);

    if (settings.mode === "system") {
      // We need to change the mode in settings context to apply the mode change to MUI components
      setMode(appMode);
    }
  }, [isDark]);

  // This hook does not return anything as it is only used to initialize color preference cookie and settings context on first load
};
