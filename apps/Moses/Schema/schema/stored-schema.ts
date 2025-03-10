import * as S from "effect/Schema";

import { JsonSchemaType } from "../AST";
import { TypedObject } from "../object";

/**
 * Stored representation of a schema.
 */
// TODO(BEEPHOLE!): How to get the S.Schema object that this represents?
export class StoredSchema extends TypedObject({
  typename: "e2.solutions/type/Schema",
  version: "0.1.0",
})({
  typename: S.String,
  version: S.String,
  jsonSchema: JsonSchemaType,
}) {}
