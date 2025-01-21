import type { Dispatch, RefObject, SetStateAction } from "react";
/**
 * Custom hook to manage the state of a popover that opens on hover.
 *
 * @param {RefObject<T>} [inputRef] - An optional ref object to use for the popover element.
 *
 * @returns {UsePopoverHoverReturn<T>} - An object containing:
 * - `open`: A boolean indicating whether the popover is open.
 * - `onOpen`: A function to open the popover.
 * - `anchorEl`: The current element that the popover is anchored to.
 * - `onClose`: A function to close the popover.
 * - `elementRef`: A ref object for the popover element.
 * - `setOpen`: A function to manually set the open state of the popover.
 *
 * @example
 * const { open, onOpen, onClose, elementRef } = usePopoverHover<HTMLButtonElement>();
 *
 * return (
 *   <>
 *      <button ref={elementRef} onMouseEnter={onOpen} onMouseLeave={onClose}>
 *        Hover me
 *      </button>
 *
 *      <Popover open={open} anchorEl={anchorEl}>
 *        Popover content
 *      </Popover>
 *   </>
 * );
 */
type UsePopoverHoverReturn<T> = {
    open: boolean;
    onOpen: () => void;
    anchorEl: T | null;
    onClose: () => void;
    elementRef: RefObject<T>;
    setOpen: Dispatch<SetStateAction<boolean>>;
};
export declare function usePopoverHover<T extends HTMLElement>(inputRef?: RefObject<T>): UsePopoverHoverReturn<T>;
export {};
//# sourceMappingURL=usePopoverHover.d.ts.map