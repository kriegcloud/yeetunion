"use client";

import { useMemo } from "react";

import type {} from "@mui/lab/themeAugmentation"; //! Do not remove this import otherwise you will get type errors while making a production build
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  darken,
  extendTheme,
  lighten,
} from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation"; //! Do not remove this import otherwise you will get type errors while making a production build

import { deepmerge } from "@mui/utils";

import { useMedia } from "react-use";
import stylisRTLPlugin from "stylis-plugin-rtl";

import type { ChildrenType, Direction, SystemMode } from "../types";

// import ModeChanger from "./ModeChanger";

import { themeConfig } from "../configs/themeConfig";

import { useSettings } from "./ThemeSettingsProvider";

import { coreTheme as defaultCoreTheme } from "../index";

type Props = ChildrenType & {
  direction: Direction;
  systemMode: SystemMode;
};

export const ThemeProvider = (props: Props) => {
  const { children, direction, systemMode } = props;

  const isServer = typeof window === "undefined";
  let currentMode: SystemMode;

  const { settings } = useSettings();
  const isDark = useMedia(
    "(prefers-color-scheme: dark)",
    systemMode === "dark",
  );

  if (isServer) {
    currentMode = systemMode;
  } else {
    if (settings.mode === "system") {
      currentMode = isDark ? "dark" : "light";
    } else {
      currentMode = settings.mode as SystemMode;
    }
  }

  // Merge the primary color scheme override with the core theme
  const theme = useMemo(() => {
    const newColorScheme = {
      colorSchemes: {
        light: {
          palette: {
            primary: {
              main: settings.primaryColor,
              light: lighten(settings.primaryColor as string, 0.2),
              dark: darken(settings.primaryColor as string, 0.1),
            },
          },
        },
        dark: {
          palette: {
            primary: {
              main: settings.primaryColor,
              light: lighten(settings.primaryColor as string, 0.2),
              dark: darken(settings.primaryColor as string, 0.1),
            },
          },
        },
      },
    };

    const coreTheme = deepmerge(
      defaultCoreTheme(settings, currentMode, direction),
      newColorScheme,
    );

    return extendTheme(coreTheme);
  }, [settings.primaryColor, settings.skin, currentMode]);

  return (
    <AppRouterCacheProvider
      options={{
        prepend: true,
        ...(direction === "rtl" && {
          key: "rtl",
          stylisPlugins: [stylisRTLPlugin],
        }),
      }}
    >
      <CssVarsProvider
        theme={theme}
        defaultMode={systemMode}
        modeStorageKey={`${themeConfig.templateName.toLowerCase().split(" ").join("-")}-mui-template-mode`}
      >
        <>
          <CssBaseline />
          {children}
        </>
      </CssVarsProvider>
    </AppRouterCacheProvider>
  );
};
