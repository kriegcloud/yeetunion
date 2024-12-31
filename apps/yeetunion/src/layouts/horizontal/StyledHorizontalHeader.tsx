import { horizontalLayoutClasses } from "@/layouts/layoutClasses";
import type { CSSObject } from "@emotion/styled";
import { useTheme } from "@mui/material";
import { useSettings } from "@ye/theme/ThemeSettingsProvider";
import { themeConfig } from "@ye/theme/themeConfig";
import classnames from "classnames";
import type { ReactNode } from "react";
import { StyledHeader } from "./styles";

type Props = {
  children: ReactNode;
  overrideStyles?: CSSObject;
};

export const StyledHorizontalHeader = (props: Props) => {
  const { children, overrideStyles } = props;

  const { settings } = useSettings();
  const theme = useTheme();

  const { navbarContentWidth } = settings;

  const headerFixed = themeConfig.navbar.type === "fixed";
  const headerStatic = themeConfig.navbar.type === "static";
  const headerBlur = themeConfig.navbar.blur;
  const headerContentCompact = navbarContentWidth === "compact";
  const headerContentWide = navbarContentWidth === "wide";

  return (
    <StyledHeader
      theme={theme}
      overrideStyles={overrideStyles}
      className={classnames(horizontalLayoutClasses.header, {
        [horizontalLayoutClasses.headerFixed]: headerFixed,
        [horizontalLayoutClasses.headerStatic]: headerStatic,
        [horizontalLayoutClasses.headerBlur]: headerBlur,
        [horizontalLayoutClasses.headerContentCompact]: headerContentCompact,
        [horizontalLayoutClasses.headerContentWide]: headerContentWide,
      })}
    >
      {children}
    </StyledHeader>
  );
};
