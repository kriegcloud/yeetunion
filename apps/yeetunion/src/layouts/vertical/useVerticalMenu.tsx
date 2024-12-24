"use client";
import { useContext } from "react";

import type { VerticalMenuContextProps } from "./menu";

import { VerticalMenuContext } from "./menu";

const useVerticalMenu = (): VerticalMenuContextProps => {
  const context = useContext(VerticalMenuContext);

  if (context === undefined) {
    throw new Error(
      "useVerticalMenu must be used within a VerticalMenuProvider",
    );
  }

  return context;
};

export default useVerticalMenu;
