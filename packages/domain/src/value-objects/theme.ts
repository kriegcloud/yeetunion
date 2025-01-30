import ye from "@ye/domain/primitives";
import { Schema as S } from "effect";
import * as A from "effect/Array";
import { pipe } from "effect/Function";

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
  CSS_VAR_PREFIX = "css-var-prefix",
  SHOULD_SKIP_GENERATING_VAR = "shouldSkipGeneratingVar",
}

export const ThemeCssVar = S.Enums(ThemeCssVarEnum);
export type ThemeCssVar = typeof ThemeCssVar.Type;

export enum FontFamilyKindEnum {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export const FontFamilyKind = S.Enums(FontFamilyKindEnum);
export type FontFamilyKind = typeof FontFamilyKind.Type;

export enum PaletteEnum {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}

export const Palette = S.Enums(PaletteEnum);
export type Palette = typeof Palette.Type;

export const Channel = pipe(
  A.make([50, 100, 200, 300, 400, 500, 600, 800, 900] as const).flatMap((arr) =>
    arr.map((num) => S.TemplateLiteral(`${num}Channel`)),
  ),
  (literals) => S.Union(...literals),
);
export type Channel = typeof Channel.Type;

export enum CommonColorEnum {
  BLACK = "black",
  WHITE = "white",
}

export const CommonColor = S.Enums(CommonColorEnum);
export type CommonColor = typeof CommonColor.Type;

export enum PaletteColorEnum {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}

export const PaletteColor = S.Enums(PaletteColorEnum);
export type PaletteColor = typeof PaletteColor.Type;

export enum PalettePropertyEnum {
  LIGHT = "light",
  DARK = "dark",
  MAIN = "main",
  CONTRAST_TEXT = "contrastText",
  COMMON = "common",
}

export const PaletteProperty = S.Enums(PaletteEnum);
export type PaletteProperty = typeof PaletteProperty.Type;

export const PaletteChannel = S.Record({
  key: PaletteColor,
  value: S.Record({
    key: PaletteProperty,
    value: S.Record({
      key: Channel,
      value: ye.Hex,
    }),
  }),
});

export type PaletteChannel = typeof PaletteChannel.Type;

export enum DirectionEnum {
  LTR = "ltr",
  RTL = "rtl",
}

export const Direction = S.Enums(DirectionEnum);
export type Direction = typeof Direction.Type;

export const FontFamily = S.Record({
  key: S.Union(S.Literal("primary"), S.Literal("secondary")),
  value: ye.NonEmptyStr,
});

export const ThemeConfig = S.Struct({
  direction: Direction,
  settingsCookie: ye.NonEmptyStr,
  defaultMode: AppMode,
  cssVariables: ThemeCssVar,
  fontFamily: FontFamily,
  palette: PaletteChannel,
});
export type ThemeConfig = typeof ThemeConfig.Type;
