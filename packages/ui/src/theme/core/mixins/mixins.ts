import { bgBlur, bgGradient } from "./background";
import { borderGradient } from "./border";
import { menuItemStyles, paperStyles } from "./global-styles-components";
import { maxLine, textGradient } from "./text";

// ----------------------------------------------------------------------

export type * from "./text";
export type * from "./border";
export type * from "./background";
export type * from "./global-styles-components";

export type BgBlurMixin = typeof bgBlur;
export type MaxLineMixin = typeof maxLine;
export type BgGradientMixin = typeof bgGradient;
export type PaperStylesMixin = typeof paperStyles;
export type TextGradientMixin = typeof textGradient;
export type MenuItemStylesMixin = typeof menuItemStyles;
export type BorderGradientProps = typeof borderGradient;

/**
 * TypeScript (type definition and extension)
 * @to {@link file://./../../extend-theme-types.d.ts}
 */

export const mixins = {
  hideScrollX: {
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    overflowX: "auto",
    "&::-webkit-scrollbar": { display: "none" },
  },
  hideScrollY: {
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    overflowY: "auto",
    "&::-webkit-scrollbar": { display: "none" },
  },
  borderGradient,
  bgGradient,
  bgBlur,
  textGradient,
  paperStyles,
  menuItemStyles,
  maxLine,
};
