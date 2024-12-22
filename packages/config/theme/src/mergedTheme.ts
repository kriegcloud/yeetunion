import type { Theme } from "@mui/material/styles";

import { deepmerge } from "@mui/utils";

import type { Settings, SystemMode } from "./types";

// Core Theme Imports
import { coreTheme } from "./";

const mergedTheme = (
  settings: Settings,
  mode: SystemMode,
  direction: Theme["direction"],
) => {
  const userTheme = {
    // Write your overrides here.
  } as Theme;

  return deepmerge(coreTheme(settings, mode, direction), userTheme);
};

export default mergedTheme;
