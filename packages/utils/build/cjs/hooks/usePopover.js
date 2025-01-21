"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePopover = usePopover;
var _react = require("react");
function usePopover() {
  const [anchorEl, setAnchorEl] = (0, _react.useState)(null);
  const onOpen = (0, _react.useCallback)(event => {
    setAnchorEl(event.currentTarget);
  }, []);
  const onClose = (0, _react.useCallback)(() => {
    setAnchorEl(null);
  }, []);
  return {
    open: !!anchorEl,
    anchorEl,
    onOpen,
    onClose,
    setAnchorEl
  };
}
//# sourceMappingURL=usePopover.js.map