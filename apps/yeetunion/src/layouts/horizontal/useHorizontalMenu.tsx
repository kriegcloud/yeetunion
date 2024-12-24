"use client";
import { useContext } from "react";

import type { HorizontalMenuContextProps } from "./menu";

import { HorizontalMenuContext } from "./menu";

const useHorizontalMenu = (): HorizontalMenuContextProps => {
  const context = useContext(HorizontalMenuContext);

  if (context === undefined) {
    throw new Error(
      "Horizontal Menu context must be used within a Horizontal Menu Provider",
    );
  }

  return context;
};

export default useHorizontalMenu;
