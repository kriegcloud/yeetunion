import type { SxProps, Theme } from "@mui/material/styles";
import type { ComponentProps } from "react";
import type { Props as ApexProps } from "react-apexcharts";
// ----------------------------------------------------------------------

export type ChartOptions = ApexProps["options"];

export type ChartProps = ComponentProps<"div"> &
  Pick<ApexProps, "type" | "series" | "options"> & {
    sx?: SxProps<Theme>;
    slotProps?: {
      loading?: SxProps<Theme>;
    };
  };
