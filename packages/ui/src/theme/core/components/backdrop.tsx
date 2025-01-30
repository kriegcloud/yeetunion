import type { Components, Theme } from "@mui/material/styles";

import { varAlpha } from "@ye/utils/colors";

// ----------------------------------------------------------------------

const MuiBackdrop: Components<Theme>["MuiBackdrop"] = {
  /** **************************************
   * STYLE
   *************************************** */
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: varAlpha(theme.vars.palette.grey["800Channel"], 0.48),
    }),
    invisible: { background: "transparent" },
  },
};

// ----------------------------------------------------------------------

export const backdrop = { MuiBackdrop };
