"use client";

import classnames from "classnames";

import type { ReactNode } from "react";

import { useSettings } from "@ye/theme/ThemeSettingsProvider";

import { verticalLayoutClasses } from "@/layouts/layoutClasses";

import { StyledMain } from "@/layouts/StyledMain";
type Props = {
  children: ReactNode;
};
export const LayoutContent = ({ children }: Props) => {
  const { settings } = useSettings();

  const contentCompact = settings.contentWidth === "compact";
  const contentWide = settings.contentWidth === "wide";

  return (
    <StyledMain
      isContentCompact={contentCompact}
      className={classnames(verticalLayoutClasses.content, "flex-auto", {
        [`${verticalLayoutClasses.contentCompact} is-full`]: contentCompact,
        [verticalLayoutClasses.contentWide]: contentWide,
      })}
    >
      {children}
    </StyledMain>
  );
};