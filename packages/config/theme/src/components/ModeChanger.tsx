import { useEffect } from "react";

import { useColorScheme } from "@mui/material/styles";

import { useMedia } from "react-use";

import type { SystemMode } from "@/types";

import { useSettings } from "@/providers";

export const ModeChanger = ({ systemMode }: { systemMode: SystemMode }) => {
  const { setMode } = useColorScheme();
  const { settings } = useSettings();
  const isDark = useMedia(
    "(prefers-color-scheme: dark)",
    systemMode === "dark",
  );

  useEffect(() => {
    if (settings.mode) {
      if (settings.mode === "system") {
        setMode(isDark ? "dark" : "light");
      } else {
        setMode(settings.mode);
      }
    }
  }, [settings.mode]);

  return null;
};
