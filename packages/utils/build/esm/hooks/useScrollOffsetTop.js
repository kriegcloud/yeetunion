"use client";

import { useCallback, useEffect, useRef, useState } from "react";
export function useScrollOffsetTop(defaultValue = 0) {
  const elementRef = useRef(null);
  const [offsetTop, setOffsetTop] = useState(false);
  const handleScroll = useCallback(() => {
    const windowScrollY = window.scrollY;
    if (elementRef.current) {
      const elementOffsetTop = elementRef.current.offsetTop;
      // Track element offset top
      setOffsetTop(windowScrollY > elementOffsetTop - defaultValue);
    } else {
      // Track window offset top
      setOffsetTop(windowScrollY > defaultValue);
    }
  }, [defaultValue]);
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return {
    elementRef,
    offsetTop
  };
}
//# sourceMappingURL=useScrollOffsetTop.js.map