"use client";

import { createCtx } from "@ye/utils/createCtx";
import { useCallback, useMemo, useState } from "react";

import type { ReactNode } from "react";

export type VerticalNavState = {
  width?: number;
  collapsedWidth?: number;
  isCollapsed?: boolean;
  isHovered?: boolean;
  isToggled?: boolean;
  isScrollWithContent?: boolean;
  isBreakpointReached?: boolean;
  isPopoutWhenCollapsed?: boolean;
  collapsing?: boolean; // for internal use only
  expanding?: boolean; // for internal use only
  transitionDuration?: number;
};

export type VerticalNavContextProps = VerticalNavState & {
  updateVerticalNavState: (values: VerticalNavState) => void;
  collapseVerticalNav: (value?: VerticalNavState["isCollapsed"]) => void;
  hoverVerticalNav: (value?: VerticalNavState["isHovered"]) => void;
  toggleVerticalNav: (value?: VerticalNavState["isToggled"]) => void;
};

const [useVerticalNav, Provider] = createCtx<VerticalNavContextProps>();

type VerticalNavProviderProps = {
  children: ReactNode;
};

export const VerticalNavProvider = ({ children }: VerticalNavProviderProps) => {
  const [verticalNavState, setVerticalNavState] = useState<VerticalNavState>();

  const updateVerticalNavState = useCallback(
    (values: Partial<VerticalNavState>) => {
      setVerticalNavState((prevState) => ({
        ...prevState,
        ...values,
        collapsing: values.isCollapsed === true,
        expanding: values.isCollapsed === false,
      }));
    },
    [],
  );

  const collapseVerticalNav = useCallback((value?: boolean) => {
    setVerticalNavState((prevState) => ({
      ...prevState,
      isHovered: value !== undefined && false,
      isCollapsed:
        value !== undefined ? Boolean(value) : Boolean(!prevState?.isCollapsed),
      collapsing: value === true,
      expanding: value !== true,
    }));
  }, []);

  const hoverVerticalNav = useCallback((value?: boolean) => {
    setVerticalNavState((prevState) => ({
      ...prevState,
      isHovered:
        value !== undefined ? Boolean(value) : Boolean(!prevState?.isHovered),
    }));
  }, []);

  const toggleVerticalNav = useCallback((value?: boolean) => {
    setVerticalNavState((prevState) => ({
      ...prevState,
      isToggled:
        value !== undefined ? Boolean(value) : Boolean(!prevState?.isToggled),
    }));
  }, []);

  const verticalNavProviderValue = useMemo(
    () => ({
      ...verticalNavState,
      updateVerticalNavState,
      collapseVerticalNav,
      hoverVerticalNav,
      toggleVerticalNav,
    }),
    [
      verticalNavState,
      updateVerticalNavState,
      collapseVerticalNav,
      hoverVerticalNav,
      toggleVerticalNav,
    ],
  );

  return <Provider value={verticalNavProviderValue}>{children}</Provider>;
};

export { useVerticalNav };
