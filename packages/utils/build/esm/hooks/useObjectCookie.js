"use client";

import { useMemo } from "react";
import { useCookie } from "react-use";
export const useObjectCookie = (key, fallback) => {
  const [valStr, updateCookie] = useCookie(key);
  const value = useMemo(() => valStr ? JSON.parse(valStr) : fallback, [valStr]);
  const updateValue = newVal => {
    updateCookie(JSON.stringify(newVal));
  };
  return [value, updateValue];
};
//# sourceMappingURL=useObjectCookie.js.map