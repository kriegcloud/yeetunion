import type {} from "@mui/lab/themeAugmentation";
import type {} from "@mui/material/themeCssVarsAugmentation";
import type {} from "@mui/x-data-grid/themeAugmentation";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import type {} from "@mui/x-tree-view/themeAugmentation";

import type { AvatarGroupExtendVariant } from "./theme/core/components/avatar";
import type { BadgeExtendVariant } from "./theme/core/components/badge";
import type { ButtonExtendVariant } from "./theme/core/components/button";
import type { FabExtendVariant } from "./theme/core/components/button-fab";
import type { ButtonGroupExtendVariant } from "./theme/core/components/button-group";
import type { ChipExtendVariant } from "./theme/core/components/chip";
import type {
  PaginationExtendColor,
  PaginationExtendVariant,
} from "./theme/core/components/pagination";
import type { SliderExtendColor } from "./theme/core/components/slider";
import type { CustomShadows } from "./theme/core/custom-shadows";
import type {
  BgBlurMixin,
  BgGradientMixin,
  BorderGradientProps,
  MaxLineMixin,
  MenuItemStylesMixin,
  PaperStylesMixin,
  TextGradientMixin,
} from "./theme/core/mixins";
import type {
  CommonColorsExtend,
  GreyExtend,
  PaletteColorExtend,
  TypeBackgroundExtend,
  TypeTextExtend,
} from "./theme/core/palette";
import type { FontStyleExtend } from "./theme/core/typography";

// ----------------------------------------------------------------------

/** **************************************
 * EXTEND CORE
 * Palette, typography, shadows...
 *************************************** */

/**
 * Palette
 * https://mui.com/customization/palette/
 * @from {@link file://@/theme/core/palette.ts}
 */
declare module "@mui/material/styles/createPalette" {
  // grey
  interface Color extends GreyExtend {}
  // text
  interface TypeText extends TypeTextExtend {}
  // black & white
  interface CommonColors extends CommonColorsExtend {}
  // background
  interface TypeBackground extends TypeBackgroundExtend {}
  // primary, secondary, info, success, warning, error
  interface PaletteColor extends PaletteColorExtend {}
  interface SimplePaletteColorOptions extends PaletteColorExtend {}
}

/**
 * Typography
 * https://mui.com/customization/typography/
 * @from {@link file://@/theme/core/typography.ts}
 */
declare module "@mui/material/styles/createTypography" {
  interface FontStyle extends FontStyleExtend {}
}

declare module "@mui/material/styles" {
  /**
   * Custom shadows
   * @from {@link file://@/theme/core/custom-shadows.ts}
   */
  interface Theme {
    customShadows: CustomShadows;
  }
  interface ThemeOptions {
    customShadows?: CustomShadows;
  }
  interface ThemeVars {
    customShadows: CustomShadows;
    typography: Theme["typography"];
    transitions: Theme["transitions"];
  }
}

/** **************************************
 * EXTEND COMPONENTS
 *************************************** */

/**
 * AvatarGroup
 * https://mui.com/components/avatars/
 * @from {@link file://@/theme/core/components/avatar.tsx}
 */
declare module "@mui/material/AvatarGroup" {
  interface AvatarGroupPropsVariantOverrides extends AvatarGroupExtendVariant {}
}

/**
 * Badge
 * https://mui.com/components/badges/
 * @from {@link file://@/theme/core/components/badge.tsx}
 */
declare module "@mui/material/Badge" {
  interface BadgePropsVariantOverrides extends BadgeExtendVariant {}
}

/**
 * Button
 * https://mui.com/components/buttons/
 * @from {@link file://@/theme/core/components/button.tsx}
 */
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides extends ButtonExtendVariant {}
}

/**
 * MuiButtonGroup
 * https://mui.com/components/button-group/
 * @from {@link file://@/theme/core/components/button-group.tsx}
 */
declare module "@mui/material/ButtonGroup" {
  interface ButtonGroupPropsVariantOverrides extends ButtonGroupExtendVariant {}
}

/**
 * MuiFab
 * https://mui.com/components/floating-action-button/
 * @from {@link file://@/theme/core/components/button-fab.tsx}
 */
declare module "@mui/material/Fab" {
  interface FabPropsVariantOverrides extends FabExtendVariant {}
}

/**
 * MuiChip
 * https://mui.com/components/chips/
 * @from {@link file://@/theme/core/components/chip.tsx}
 */
declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides extends ChipExtendVariant {}
}

/**
 * MuiPagination
 * https://mui.com/components/pagination/
 * @from {@link file://@/theme/core/components/pagination.tsx}
 */
declare module "@mui/material/Pagination" {
  interface PaginationPropsVariantOverrides extends PaginationExtendVariant {}
  interface PaginationPropsColorOverrides extends PaginationExtendColor {}
}

/**
 * MuiSlider
 * https://mui.com/components/slider/
 * @from {@link file://@/theme/core/components/slider.tsx}
 */
declare module "@mui/material/Slider" {
  interface SliderPropsColorOverrides extends SliderExtendColor {}
}

/** **************************************
 * EXTEND MIXINS
 *************************************** */
/**
 * @from {@link file://@/theme/core/mixins.ts}
 */
declare module "@mui/material/styles/createMixins" {
  interface Mixins {
    hideScrollX: CSSObject;
    hideScrollY: CSSObject;
    borderGradient: BorderGradientProps;
    bgGradient: BgGradientMixin;
    bgBlur: BgBlurMixin;
    textGradient: TextGradientMixin;
    maxLine: MaxLineMixin;
    menuItemStyles: MenuItemStylesMixin;
    paperStyles: PaperStylesMixin;
  }
  interface MixinsOptions {
    hideScrollX?: CSSObject;
    hideScrollY?: CSSObject;
    borderGradient?: BorderGradientProps;
    bgGradient?: BgGradientMixin;
    bgBlur?: BgBlurMixin;
    textGradient?: TextGradientMixin;
    maxLine?: MaxLineMixin;
    menuItemStyles?: MenuItemStylesMixin;
    paperStyles?: PaperStylesMixin;
  }
}
