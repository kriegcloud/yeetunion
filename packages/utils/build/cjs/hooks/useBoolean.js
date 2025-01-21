"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBoolean = useBoolean;
var _react = require("react");
function useBoolean(defaultValue = false) {
  const [value, setValue] = (0, _react.useState)(defaultValue);
  const onTrue = (0, _react.useCallback)(() => {
    setValue(true);
  }, []);
  const onFalse = (0, _react.useCallback)(() => {
    setValue(false);
  }, []);
  const onToggle = (0, _react.useCallback)(() => {
    setValue(prev => !prev);
  }, []);
  return {
    value,
    onTrue,
    onFalse,
    onToggle,
    setValue
  };
}
//# sourceMappingURL=useBoolean.js.map