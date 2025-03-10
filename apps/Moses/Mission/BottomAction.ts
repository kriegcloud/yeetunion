import * as S from "effect/Schema";
import { JsonSchemaType } from "../Schema/AST/json-schema-type";
import { Icon } from "./Icon";
export namespace BottomAction {
  export const Schema = S.Struct({
    icon: Icon.Schema,
    label: S.NonEmptyString,
    color: S.String,
    eventType: S.optional(S.NonEmptyString.pipe(S.uppercased())),
    eventPayload: S.optional(JsonSchemaType),
  });
  export type Type = typeof Schema.Type;
}
