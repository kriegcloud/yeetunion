"use client";

import type { HTMLAttributes, ReactElement } from "react";

import {useVerticalNav} from "../Provider";

import { Close } from "@ye/ui/svg/Close";
import { RadioCircle } from "@ye/ui/svg/RadioCircle";
import { RadioCircleMarked } from "@ye/ui/svg/RadioCircleMarked";
type NavCollapseIconsProps = HTMLAttributes<HTMLSpanElement> & {
  closeIcon?: ReactElement;
  lockedIcon?: ReactElement;
  unlockedIcon?: ReactElement;
  onClick?: () => void;
  onClose?: () => void;
};

const NavCollapseIcons = (props: NavCollapseIconsProps) => {
  const { closeIcon, lockedIcon, unlockedIcon, onClick, onClose, ...rest } =
    props;

  const {
    isCollapsed,
    collapseVerticalNav,
    isBreakpointReached,
    toggleVerticalNav,
  } = useVerticalNav();

  // Handle Lock / Unlock Icon Buttons click
  const handleClick = (action: "lock" | "unlock") => {
    // Setup the verticalNav to be locked or unlocked
    const collapse = action !== "lock";

    // Tell the verticalNav to lock or unlock
    collapseVerticalNav(collapse);

    // Call onClick function if passed
    onClick?.();
  };

  // Handle Close button click
  const handleClose = () => {
    // Close verticalNav using toggle verticalNav function
    toggleVerticalNav(false);

    // Call onClose function if passed
    onClose?.();
  };

  return (
    <>
      {isBreakpointReached ? (
        <span
          role="button"
          tabIndex={0}
          style={{ display: "flex", cursor: "pointer" }}
          onClick={handleClose}
          {...rest}
        >
          {closeIcon ?? <Close />}
        </span>
      ) : isCollapsed ? (
        <span
          role="button"
          tabIndex={0}
          style={{ display: "flex", cursor: "pointer" }}
          onClick={() => handleClick("lock")}
          {...rest}
        >
          {unlockedIcon ?? <RadioCircle />}
        </span>
      ) : (
        <span
          role="button"
          tabIndex={0}
          style={{ display: "flex", cursor: "pointer" }}
          onClick={() => handleClick("unlock")}
          {...rest}
        >
          {lockedIcon ?? <RadioCircleMarked />}
        </span>
      )}
    </>
  );
};

export default NavCollapseIcons;
