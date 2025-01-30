import type { SxProps, Theme } from "@mui/material/styles";
import type { ComponentProps, ReactNode } from "react";
// ----------------------------------------------------------------------

export type LabelColor =
  | "default"
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

export type LabelVariant = "filled" | "outlined" | "soft" | "inverted";

export interface LabelProps extends ComponentProps<"span"> {
  sx?: SxProps<Theme>;
  disabled?: boolean;
  color?: LabelColor;
  variant?: LabelVariant;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
}
