import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";
import type { Props as SimplebarProps } from "simplebar-react";
// ----------------------------------------------------------------------

export type ScrollbarProps = SimplebarProps & {
  sx?: SxProps<Theme>;
  children?: ReactNode;
  fillContent?: boolean;
  slotProps?: {
    wrapperSx?: SxProps<Theme>;
    contentSx?: SxProps<Theme>;
    contentWrapperSx?: SxProps<Theme>;
  };
};
