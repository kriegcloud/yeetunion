"use client";

import { useRef, useState } from "react";

import {
  ClickAwayListener,
  Fade,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Tooltip,
} from "@mui/material";

import type { Mode } from "@ye/theme";

import { useSettings } from "@ye/theme/ThemeSettingsProvider";

const ModeDropdown = () => {
  const [open, setOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const anchorRef = useRef<HTMLButtonElement>(null);

  const { settings, updateSettings } = useSettings();

  const handleClose = () => {
    setOpen(false);
    setTooltipOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleModeSwitch = (mode: Mode) => {
    handleClose();

    if (settings.mode !== mode) {
      updateSettings({ mode: mode });
    }
  };

  const getModeIcon = () => {
    if (settings.mode === "system") {
      return "ri-computer-line";
    }
    if (settings.mode === "dark") {
      return "ri-moon-clear-line";
    }
    return "ri-sun-line";
  };

  return (
    <>
      <Tooltip
        title={`${settings.mode} Mode`}
        onOpen={() => setTooltipOpen(true)}
        onClose={() => setTooltipOpen(false)}
        open={open ? false : tooltipOpen}
        PopperProps={{ className: "capitalize" }}
      >
        <IconButton
          ref={anchorRef}
          onClick={handleToggle}
          className="!text-textPrimary"
        >
          <i className={getModeIcon()} />
        </IconButton>
      </Tooltip>
      <Popper
        open={open}
        transition
        disablePortal
        placement="bottom-start"
        anchorEl={anchorRef.current}
        className="min-is-[160px] !mbs-4 z-[1]"
      >
        {({ TransitionProps, placement }) => (
          <Fade
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "right top",
            }}
          >
            <Paper
              className={
                settings.skin === "bordered"
                  ? "border shadow-none"
                  : "shadow-lg"
              }
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList onKeyDown={handleClose}>
                  <MenuItem
                    className="gap-3"
                    onClick={() => handleModeSwitch("light")}
                    selected={settings.mode === "light"}
                  >
                    <i className="ri-sun-line" />
                    Light
                  </MenuItem>
                  <MenuItem
                    className="gap-3"
                    onClick={() => handleModeSwitch("dark")}
                    selected={settings.mode === "dark"}
                  >
                    <i className="ri-moon-clear-line" />
                    Dark
                  </MenuItem>
                  <MenuItem
                    className="gap-3"
                    onClick={() => handleModeSwitch("system")}
                    selected={settings.mode === "system"}
                  >
                    <i className="ri-computer-line" />
                    System
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default ModeDropdown;
