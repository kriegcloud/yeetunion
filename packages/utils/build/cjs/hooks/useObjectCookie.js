"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useObjectCookie = void 0;
var _react = require("react");
var _reactUse = require("react-use");
const useObjectCookie = (key, fallback) => {
  const [valStr, updateCookie] = (0, _reactUse.useCookie)(key);
  const value = (0, _react.useMemo)(() => valStr ? JSON.parse(valStr) : fallback, [valStr]);
  const updateValue = newVal => {
    updateCookie(JSON.stringify(newVal));
  };
  return [value, updateValue];
};
exports.useObjectCookie = useObjectCookie;
//# sourceMappingURL=useObjectCookie.js.map