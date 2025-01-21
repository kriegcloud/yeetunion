"use client";

import { useCallback, useState } from "react";
export function usePopover() {
  const [anchorEl, setAnchorEl] = useState(null);
  const onOpen = useCallback(event => {
    setAnchorEl(event.currentTarget);
  }, []);
  const onClose = useCallback(() => {
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