"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePopoverHover = usePopoverHover;
var _react = require("react");
function usePopoverHover(inputRef) {
  const initialRef = (0, _react.useRef)(null);
  const elementRef = inputRef || initialRef;
  const [open, setOpen] = (0, _react.useState)(false);
  const onOpen = (0, _react.useCallback)(() => {
    setOpen(true);
  }, []);
  const onClose = (0, _react.useCallback)(() => {
    setOpen(false);
  }, []);
  return {
    elementRef,
    anchorEl: elementRef.current,
    open,
    onOpen,
    onClose,
    setOpen
  };
}
//# sourceMappingURL=usePopoverHover.js.map