import * as S from "@effect/schema/Schema";

export const AppConfig = S.Struct({
  name: S.NonEmptyTrimmedString,
});
export type AppConfig = typeof AppConfig.Type;
