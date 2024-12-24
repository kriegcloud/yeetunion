"use client";

import type { ReactElement } from "react";

import type { SystemMode } from "@ye/theme";

import { useSettings } from "@ye/theme/ThemeSettingsProvider";
import { useLayoutInit } from "@ye/theme/useLayoutInit";
type LayoutWrapperProps = {
  systemMode: SystemMode;
  verticalLayout: ReactElement;
  horizontalLayout: ReactElement;
};

export const LayoutWrapper = (props: LayoutWrapperProps) => {
  const { systemMode, verticalLayout, horizontalLayout } = props;

  const { settings } = useSettings();

  useLayoutInit(systemMode);

  // Return the layout based on the layout context
  return (
    <div className="flex flex-col flex-auto" data-skin={settings.skin}>
      {settings.layout === "horizontal" ? horizontalLayout : verticalLayout}
    </div>
  );
};
