import * as S from "@effect/schema/Schema";
import * as P from "@ye/primitives";
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
  name: P.yeNonEmptyTrimStr,
  cookies: S.Struct({
    settingsKey: P.yeNonEmptyTrimStr,
    modeKey: P.yeNonEmptyTrimStr,
  }),
  description: P.yeNonEmptyTrimStr,
});
export type AppConfig = typeof AppConfig.Type;
