"use client";

import { useCallback, useState } from "react";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { Iconify } from "../../../components";

// ----------------------------------------------------------------------

export function FullScreenButton() {
  const [fullscreen, setFullscreen] = useState(false);

  const onToggleFullScreen = useCallback(() => {
    if (!document.fullscreenElement) {
      void document.documentElement.requestFullscreen();
      setFullscreen(true);
    } else if (document.exitFullscreen) {
      void document.exitFullscreen();
      setFullscreen(false);
    }
  }, []);

  return (
    <Tooltip title={fullscreen ? "Exit" : "Full Screen"}>
      <IconButton
        onClick={onToggleFullScreen}
        color={fullscreen ? "primary" : "default"}
      >
        <Iconify
          icon={
            fullscreen
              ? "solar:quit-full-screen-square-outline"
              : "solar:full-screen-square-outline"
          }
        />
      </IconButton>
    </Tooltip>
  );
}
