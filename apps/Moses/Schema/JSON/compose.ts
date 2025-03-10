import * as MTypes from "../../Types";
import * as MUtil from "../../Util";
import { invariant } from "../../invariant";
import type { JsonSchemaType } from "../AST";

/**
 * Creates a composite schema from the source and projection schemas.
 */
// TODO(BEEPHOLE!): Use effect schema projections.
// TODO(BEEPHOLE!): Can avoid having to call this every time we modify any property on the view?
export const composeSchema = (
  source: JsonSchemaType,
  target: JsonSchemaType,
): JsonSchemaType => {
  // TODO(ben): Better way to clone moses proxies.
  const result: JsonSchemaType = JSON.parse(JSON.stringify(target));
  invariant(
    "type" in result && result.type === "object",
    "source schema must be an object",
  );
  invariant(
    "type" in source && source.type === "object",
    "target schema must be an object",
  );

  for (const prop in result.properties) {
    const propSchema = MUtil.definedOrThrow(source.properties)[prop]; // TODO(ben): Find by json-path instead.
    const annotations = (propSchema as MTypes.AnyType)?.moses?.annotations;
    if (annotations) {
      (result.properties[prop] as MTypes.AnyType).moses ??= {};
      (result.properties[prop] as MTypes.AnyType).moses.annotations ??= {};
      for (const key in annotations) {
        (result.properties[prop] as MTypes.AnyType).moses.annotations[key] ??=
          {};
        Object.assign(
          (result.properties[prop] as MTypes.AnyType).moses.annotations[key],
          annotations[key],
          {
            ...(result.properties[prop] as MTypes.AnyType).moses.annotations[
              key
            ],
          },
        );
      }
    }
  }

  return result;
};
