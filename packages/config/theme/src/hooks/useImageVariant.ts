"use client";
import type { Mode } from "@/types";
import { useColorScheme } from "@mui/material";
import { useMemo } from "react";
import { useSettings } from "../providers";

export const useImageVariant = (
  mode: Mode,
  imgLight: string,
  imgDark: string,
  imgLightBordered?: string,
  imgDarkBordered?: string,
): string => {
  const { settings } = useSettings();
  const { mode: muiMode, systemMode: muiSystemMode } = useColorScheme();

  return useMemo(() => {
    const isServer = typeof window === "undefined";

    const currentMode = (() => {
      if (isServer) return mode;

      return muiMode === "system" ? muiSystemMode : muiMode;
    })();

    const isBordered = settings?.skin === "bordered";
    const isDarkMode = currentMode === "dark";

    if (isBordered && imgLightBordered && imgDarkBordered) {
      return isDarkMode ? imgDarkBordered : imgLightBordered;
    }

    return isDarkMode ? imgDark : imgLight;
  }, [mode, muiMode, muiSystemMode]);
};
