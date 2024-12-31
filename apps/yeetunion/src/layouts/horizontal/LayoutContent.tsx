"use client";
import { StyledMain } from "@/layouts/StyledMain";
import { horizontalLayoutClasses } from "@/layouts/layoutClasses";
import { useSettings } from "@ye/theme/ThemeSettingsProvider";
import { themeConfig } from "@ye/theme/themeConfig";
import classnames from "classnames";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const LayoutContent = ({ children }: Props) => {
  const { settings } = useSettings();

  const contentCompact = settings.contentWidth === "compact";
  const contentWide = settings.contentWidth === "wide";

  return (
    <StyledMain
      isContentCompact={contentCompact}
      className={classnames(horizontalLayoutClasses.content, "flex-auto", {
        [`${horizontalLayoutClasses.contentCompact} is-full`]: contentCompact,
        [horizontalLayoutClasses.contentWide]: contentWide,
      })}
      style={{ padding: themeConfig.layoutPadding }}
    >
      {children}
    </StyledMain>
  );
};

export default LayoutContent;
