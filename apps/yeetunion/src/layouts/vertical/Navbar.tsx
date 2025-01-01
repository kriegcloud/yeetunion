"use client";

import { useTheme } from "@mui/material";
import { useScrollTrigger } from "@mui/material";

import type { CSSObject } from "@emotion/styled";

import classnames from "classnames";

import type { ReactNode } from "react";

import { themeConfig } from "@ye/theme/themeConfig";

import { useSettings } from "@ye/theme/ThemeSettingsProvider";

import { verticalLayoutClasses } from "@/layouts/layoutClasses";

import { StyledHeader } from "./styles";

type Props = {
  children: ReactNode;
  overrideStyles?: CSSObject;
};

export const StyledNavbar = (props: Props) => {
  const { children, overrideStyles } = props;

  const { settings } = useSettings();
  const theme = useTheme();

  const trigger = useScrollTrigger({
    threshold: 0,
    disableHysteresis: true,
  });

  const { navbarContentWidth } = settings;

  const headerFixed = themeConfig.navbar.type === "fixed";
  const headerStatic = themeConfig.navbar.type === "static";
  const headerFloating = themeConfig.navbar.floating;
  const headerDetached = themeConfig.navbar.detached;
  const headerAttached = !themeConfig.navbar.detached;
  const headerBlur = themeConfig.navbar.blur;
  const headerContentCompact = navbarContentWidth === "compact";
  const headerContentWide = navbarContentWidth === "wide";

  return (
    <StyledHeader
      theme={theme}
      overrideStyles={overrideStyles}
      className={classnames(verticalLayoutClasses.header, {
        [verticalLayoutClasses.headerFixed]: headerFixed,
        [verticalLayoutClasses.headerStatic]: headerStatic,
        [verticalLayoutClasses.headerFloating]: headerFloating,
        [verticalLayoutClasses.headerDetached]:
          !headerFloating && headerDetached,
        [verticalLayoutClasses.headerAttached]:
          !headerFloating && headerAttached,
        [verticalLayoutClasses.headerBlur]: headerBlur,
        [verticalLayoutClasses.headerContentCompact]: headerContentCompact,
        [verticalLayoutClasses.headerContentWide]: headerContentWide,
        scrolled: trigger,
      })}
    >
      <div className={classnames(verticalLayoutClasses.navbar, "flex bs-full")}>
        {children}
      </div>
    </StyledHeader>
  );
};

const Navbar = () => {
  return (
    <StyledNavbar>
      <div
        className={classnames(
          verticalLayoutClasses.navbarContent,
          "flex items-center justify-between gap-4 is-full",
        )}
      >
        <div className="flex items-center gap-4">
          {/*<NavToggle />*/}
          {/*<ModeDropdown />*/}
        </div>
        <div className="flex items-center">{/*<UserDropdown />*/}</div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
