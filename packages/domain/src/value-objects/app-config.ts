import ye from "#primitives";
import { Schema as S } from "effect";

export const AppConfig = S.Struct({
  name: ye.NonEmptyTrimStr,
});
export type AppConfig = typeof AppConfig.Type;