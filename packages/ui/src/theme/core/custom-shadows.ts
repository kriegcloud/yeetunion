import { varAlpha } from "@ye/utils/colors";

import {
  common,
  error,
  grey,
  info,
  primary,
  secondary,
  success,
  warning,
} from "./palette";

import type { ThemeColorScheme } from "../types";

// ----------------------------------------------------------------------

/**
 * TypeScript (type definition and extension)
 * @to {@link file://./../extend-theme-types.d.ts}
 */

export interface CustomShadows {
  z1?: string;
  z4?: string;
  z8?: string;
  z12?: string;
  z16?: string;
  z20?: string;
  z24?: string;
  primary?: string;
  secondary?: string;
  info?: string;
  success?: string;
  warning?: string;
  error?: string;
  card?: string;
  dialog?: string;
  dropdown?: string;
}

// ----------------------------------------------------------------------

export function createShadowColor(colorChannel: string): string {
  return `0 8px 16px 0 ${varAlpha(colorChannel, 0.24)}`;
}

function createCustomShadows(colorChannel: string): CustomShadows {
  return {
    z1: `0 1px 2px 0 ${varAlpha(colorChannel, 0.16)}`,
    z4: `0 4px 8px 0 ${varAlpha(colorChannel, 0.16)}`,
    z8: `0 8px 16px 0 ${varAlpha(colorChannel, 0.16)}`,
    z12: `0 12px 24px -4px ${varAlpha(colorChannel, 0.16)}`,
    z16: `0 16px 32px -4px ${varAlpha(colorChannel, 0.16)}`,
    z20: `0 20px 40px -4px ${varAlpha(colorChannel, 0.16)}`,
    z24: `0 24px 48px 0 ${varAlpha(colorChannel, 0.16)}`,
    /********/
    dialog: `-40px 40px 80px -8px ${varAlpha(common["blackChannel"] as string, 0.24)}`,
    card: `0 0 2px 0 ${varAlpha(colorChannel, 0.2)}, 0 12px 24px -4px ${varAlpha(colorChannel, 0.12)}`,
    dropdown: `0 0 2px 0 ${varAlpha(colorChannel, 0.24)}, -20px 20px 40px -4px ${varAlpha(colorChannel, 0.24)}`,
    /********/
    primary: createShadowColor(primary["mainChannel"] as string),
    secondary: createShadowColor(secondary["mainChannel"] as string),
    info: createShadowColor(info["mainChannel"] as string),
    success: createShadowColor(success["mainChannel"] as string),
    warning: createShadowColor(warning["mainChannel"] as string),
    error: createShadowColor(error["mainChannel"] as string),
  };
}

export const customShadows: Record<ThemeColorScheme, CustomShadows> = {
  light: createCustomShadows(grey["500Channel"] as string),
  dark: createCustomShadows(common["blackChannel"] as string),
};
