"use client";

import classnames from "classnames";

import type { SystemMode } from "@ye/theme";
import type { ReactNode } from "react";

import { useSettings } from "@ye/theme/ThemeSettingsProvider";
import { useLayoutInit } from "@ye/theme/useLayoutInit";
import { blankLayoutClasses } from "@/layouts/layoutClasses";

type Props = {
  children: ReactNode;
  systemMode: SystemMode;
};

export const BlankLayout = (props: Props) => {
  const { children, systemMode } = props;

  const { settings } = useSettings();

  useLayoutInit(systemMode);

  return (
    <div
      className={classnames(blankLayoutClasses.root, "is-full bs-full")}
      data-skin={settings.skin}
    >
      {children}
    </div>
  );
};
