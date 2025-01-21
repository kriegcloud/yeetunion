"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useScrollOffsetTop = useScrollOffsetTop;
var _react = require("react");
function useScrollOffsetTop(defaultValue = 0) {
  const elementRef = (0, _react.useRef)(null);
  const [offsetTop, setOffsetTop] = (0, _react.useState)(false);
  const handleScroll = (0, _react.useCallback)(() => {
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
  (0, _react.useEffect)(() => {
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