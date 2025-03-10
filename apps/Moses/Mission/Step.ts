import * as S from "effect/Schema";
import { View } from "./View";
export namespace Step {
  export const VARIANTS = {
    VIEW: "VIEW",
    EVAL: "EVAL",
    LOADING: "LOADING",
    ERROR: "ERROR",
  } as const;

  export const Schema = S.Struct({
    key: S.NonEmptyTrimmedString,
    tags: S.optional(S.Array(S.NonEmptyTrimmedString.pipe(S.uppercased()))),
    view: View.Schema,
  });

  export type Type = typeof Schema.Type;

  export const make = Schema.make;
}
