"use client";

import { useTheme } from "@mui/material";

import type { CSSObject } from "@emotion/styled";

import classnames from "classnames";

import type { ReactNode } from "react";

import {themeConfig} from "@ye/theme/themeConfig";

import { useSettings } from "@ye/theme/ThemeSettingsProvider";

import { verticalLayoutClasses } from "@/layouts/layoutClasses";

import {StyledFooter} from "./styles";

type Props = {
  children: ReactNode;
  overrideStyles?: CSSObject;
};

export const Footer = (props: Props) => {
  const { children, overrideStyles } = props;

  const { settings } = useSettings();
  const theme = useTheme();

  const { footerContentWidth } = settings;

  const footerDetached = themeConfig.footer.detached;
  const footerAttached = !themeConfig.footer.detached;
  const footerStatic = themeConfig.footer.type === "static";
  const footerFixed = themeConfig.footer.type === "fixed";
  const footerContentCompact = footerContentWidth === "compact";
  const footerContentWide = footerContentWidth === "wide";

  return (
    <StyledFooter
      theme={theme}
      overrideStyles={overrideStyles}
      className={classnames(verticalLayoutClasses.footer, "is-full", {
        [verticalLayoutClasses.footerDetached]: footerDetached,
        [verticalLayoutClasses.footerAttached]: footerAttached,
        [verticalLayoutClasses.footerStatic]: footerStatic,
        [verticalLayoutClasses.footerFixed]: footerFixed,
        [verticalLayoutClasses.footerContentCompact]: footerContentCompact,
        [verticalLayoutClasses.footerContentWide]: footerContentWide,
      })}
    >
      <div className={verticalLayoutClasses.footerContentWrapper}>
        {children}
      </div>
    </StyledFooter>
  );
};
