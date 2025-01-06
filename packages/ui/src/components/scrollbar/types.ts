import type { Theme, SxProps } from '@mui/material/styles';
import type { Props as SimplebarProps } from 'simplebar-react';
import type { ReactNode } from 'react';
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
