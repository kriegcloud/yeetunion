import ye from "@ye/primitives";
import { Schema as S } from "effect";
export enum AppModeEnum {
  SYSTEM = "system",
  LIGHT = "light",
  DARK = "dark",
}

export const AppMode = S.Enums(AppModeEnum);
export type AppMode = typeof AppMode.Type;

export enum ThemeCssVarEnum {
  COLOR_SCHEME_SELECTOR = "colorSchemeSelector",
  DISABLE_CSS_COLOR_SCHEME = "disableCssColorScheme",
  CSS_VAR_PREFIX = "cssVarPrefix",
  SHOULD_SKIP_GENERATING_VAR = "shouldSkipGeneratingVar",
}
export const ThemeCssVar = S.Enums(ThemeCssVarEnum);
export type ThemeCssVar = typeof ThemeCssVar.Type;

export const AppConfig = S.Struct({
  name: ye.NonEmptyTrimStr,
  // cookies: S.Struct({
  //   settingsKey: ye.NonEmptyTrimStr,
  //   modeKey: ye.NonEmptyTrimStr,
  // }),
  // description: ye.NonEmptyTrimStr,
});
export type AppConfig = typeof AppConfig.Type;
