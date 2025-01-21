"use client";

import { useCallback, useRef, useState } from "react";
export function usePopoverHover(inputRef) {
  const initialRef = useRef(null);
  const elementRef = inputRef || initialRef;
  const [open, setOpen] = useState(false);
  const onOpen = useCallback(() => {
    setOpen(true);
  }, []);
  const onClose = useCallback(() => {
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