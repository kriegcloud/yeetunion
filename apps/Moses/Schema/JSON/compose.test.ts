import * as S from "effect/Schema";
import { describe, test } from "vitest";

import { FieldPath } from "../AST";
import { FormatAnnotationId, FormatEnum } from "../formats";
import { TypedObject } from "../object";
import { composeSchema } from "./compose";
import { MOSES_REFINEMENT_KEY, toJsonSchema } from "./json-schema";

describe("schema composition", () => {
  test("schema composition", ({ expect }) => {
    class BaseType extends TypedObject({
      typename: "example.com/Person",
      version: "0.1.0",
    })({
      name: S.String,
      email: S.String,
    }) {}

    const OverlaySchema = S.Struct({
      email: S.String.pipe(FieldPath("$.email")).annotations({
        [FormatAnnotationId]: FormatEnum.Email,
      }),
    });

    const baseSchema = toJsonSchema(BaseType);
    const overlaySchema = toJsonSchema(OverlaySchema);
    const composedSchema = composeSchema(baseSchema, overlaySchema);
    expect(composedSchema.properties).to.deep.eq({
      email: {
        type: "string",
        format: FormatEnum.Email,
        [MOSES_REFINEMENT_KEY]: {
          annotations: {
            path: "$.email",
          },
        },
      },
    });
  });
});
