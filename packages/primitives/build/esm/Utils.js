import * as AST from "@effect/schema/AST";
/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
import * as A from "effect/Array";
import { pipe } from "effect/Function";
/**
 * @category primitives
 * @since 0.1.0
 */
export const EnumWithDefault = enums => pipe(defaultValue => S.Enums(enums).pipe(S.propertySignature, S.withConstructorDefault(defaultValue)));
/**
 * @since 0.1.0
 * @category primitives
 */
export const ReadonlySetFromArray = itemSchema => S.transform(
// Source schema: array of items
S.Array(itemSchema),
// Target schema: readonly set of items
// **IMPORTANT** We use `Schema.typeSchema` here to obtain the schema
// of the items to avoid decoding the elements twice
S.ReadonlySetFromSelf(S.typeSchema(itemSchema)), {
  strict: true,
  decode: items => new Set(items),
  encode: set => Array.from(set.values())
});
/**
 * @since 0.1.0
 * @category primitives
 */
export const StructFromReadonlyArray = (arr, valueSchema) => S.Struct(Object.fromEntries(arr.map(key => [key, valueSchema])));
/**
 * @since 0.1.0
 * @category primitives
 */
export const UnionOfLiteralsFromRecordValues = record => S.Union(...Object.values(record).map(value => S.Literal(value)));
/**
 * @since 0.1.0
 * @category primitives
 */
export const EnumFromReadonlyArray = arr => S.Enums(Object.fromEntries(arr.map(key => [key, key])));
/**
 * @since 0.1.0
 * @category primitives
 */
export const ReadonlyArrayToUnionOfLiterals = arr => S.Union(...arr.map(value => S.Literal(value)));
/**
 * @since 0.1.0
 * @category primitives
 */
export const UpperCasedLiteral = str => S.Literal(str.toUpperCase());
//# sourceMappingURL=Utils.js.map