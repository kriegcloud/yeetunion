import type { TooltipProps } from '@mui/material/Tooltip';
import type { Theme, SxProps } from '@mui/material/styles';
import type { ButtonBaseProps } from '@mui/material/ButtonBase';
import type { IconButtonProps } from '@mui/material/IconButton';
import type { ComponentProps } from "react";
// ----------------------------------------------------------------------

export interface ExtendFile extends File {
  path?: string;
  preview?: string;
  lastModifiedDate?: Date;
}

export type FileThumbnailProps = ComponentProps<'div'> & {
  tooltip?: boolean;
  file: File | string;
  imageView?: boolean;
  sx?: SxProps<Theme>;
  onDownload?: () => void;
  onRemove?: () => void;
  slotProps?: {
    tooltip?: TooltipProps;
    removeBtn?: IconButtonProps;
    downloadBtn?: ButtonBaseProps;
    img?: ComponentProps<'img'> & { sx?: SxProps<Theme> };
    icon?: ComponentProps<'img'> & { sx?: SxProps<Theme> };
  };
};
