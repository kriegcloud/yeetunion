"use client";
import { createCtx } from "@ye/utils/createCtx";
import { useMemo, useState } from "react";

import type { ReactNode } from "react";

export type HorizontalNavContextProps = {
  isBreakpointReached?: boolean;
  updateIsBreakpointReached: (isBreakpointReached: boolean) => void;
};

const [useHorizontalNav, Provider] = createCtx<HorizontalNavContextProps>();

type HorizontalNavProviderProps = {
  children: ReactNode;
};

export const HorizontalNavProvider = ({
  children,
}: HorizontalNavProviderProps) => {
  const [isBreakpointReached, setIsBreakpointReached] = useState(false);

  // update isBreakpointReached value
  const updateIsBreakpointReached = (isBreakpointReached: boolean) => {
    setIsBreakpointReached(isBreakpointReached);
  };

  const HorizontalNavProviderValue = useMemo(
    () => ({
      isBreakpointReached,
      updateIsBreakpointReached,
    }),
    [isBreakpointReached],
  );

  return (
    <Provider value={HorizontalNavProviderValue}>
      {children}
    </Provider>
  );
};

export { useHorizontalNav };