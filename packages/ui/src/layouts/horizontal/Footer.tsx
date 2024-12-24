"use client";
import {themeConfig} from "@ye/theme/themeConfig";
import { useSettings } from "@ye/theme/ThemeSettingsProvider";
import type { ReactNode } from "react";
import type { CSSObject } from "@emotion/styled";
import {StyledFooter} from "./styles";
import { horizontalLayoutClasses } from "@/layouts/layoutClasses";
import { useTheme } from "@mui/material";
import classnames from "classnames";

type Props = {
  children: ReactNode;
  overrideStyles?: CSSObject;
};

export const Footer = (props: Props) => {
  const { children, overrideStyles } = props;

  const { settings } = useSettings();
  const theme = useTheme();

  const { footerContentWidth } = settings;

  const footerStatic = themeConfig.footer.type === "static";
  const footerFixed = themeConfig.footer.type === "fixed";
  const footerContentCompact = footerContentWidth === "compact";
  const footerContentWide = footerContentWidth === "wide";

  return (
    <StyledFooter
      theme={theme}
      overrideStyles={overrideStyles}
      className={classnames(horizontalLayoutClasses.footer, {
        [horizontalLayoutClasses.footerStatic]: footerStatic,
        [horizontalLayoutClasses.footerFixed]: footerFixed,
        [horizontalLayoutClasses.footerContentCompact]: footerContentCompact,
        [horizontalLayoutClasses.footerContentWide]: footerContentWide,
      })}
    >
      <div className={horizontalLayoutClasses.footerContentWrapper}>
        {children}
      </div>
    </StyledFooter>
  );
};
