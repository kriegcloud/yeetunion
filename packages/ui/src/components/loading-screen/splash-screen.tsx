"use client";

import type { SxProps, Theme } from "@mui/material/styles";

import { Fragment } from "react";

import Portal from "@mui/material/Portal";
import { styled } from "@mui/material/styles";

import type { ComponentProps } from "react";
import { AnimateLogoZoom } from "../animate";
// ----------------------------------------------------------------------

export type SplashScreenProps = ComponentProps<"div"> & {
  portal?: boolean;
  sx?: SxProps<Theme>;
  slotProps?: {
    wrapper?: ComponentProps<typeof LoadingWrapper>;
  };
};

export function SplashScreen({
  portal = true,
  slotProps,
  sx,
  ...other
}: SplashScreenProps) {
  const PortalWrapper = portal ? Portal : Fragment;

  return (
    <PortalWrapper>
      <LoadingWrapper {...slotProps?.wrapper}>
        <LoadingContent sx={sx} {...other}>
          <AnimateLogoZoom />
        </LoadingContent>
      </LoadingWrapper>
    </PortalWrapper>
  );
}

// ----------------------------------------------------------------------

const LoadingWrapper = styled("div")({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
});

const LoadingContent = styled("div")(({ theme }) => ({
  right: 0,
  bottom: 0,
  zIndex: 9998,
  flexGrow: 1,
  width: "100%",
  height: "100%",
  display: "flex",
  position: "fixed",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.vars.palette.background.default,
}));
