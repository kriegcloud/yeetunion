import * as AST from "@effect/schema/AST";
/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
import * as A from "effect/Array";
import { pipe } from "effect/Function";
import type { ReadonlyRecord } from "effect/Record";
import type * as Types from "effect/Types";

/**
 * @category primitives
 * @since 0.1.0
 */
export const EnumWithDefault = <TEnum extends S.EnumsDefinition>(
  enums: TEnum,
) =>
  pipe((defaultValue: () => Types.NoInfer<TEnum[keyof TEnum]>) =>
    S.Enums(enums).pipe(
      S.propertySignature,
      S.withConstructorDefault(defaultValue),
    ),
  );

/**
 * @since 0.1.0
 * @category primitives
 */
export const ReadonlySetFromArray = <A, I, R>(
  itemSchema: S.Schema<A, I, R>,
): S.Schema<ReadonlySet<A>, ReadonlyArray<I>, R> =>
  S.transform(
    // Source schema: array of items
    S.Array(itemSchema),
    // Target schema: readonly set of items
    // **IMPORTANT** We use `Schema.typeSchema` here to obtain the schema
    // of the items to avoid decoding the elements twice
    S.ReadonlySetFromSelf(S.typeSchema(itemSchema)),
    {
      strict: true,
      decode: (items) => new Set(items),
      encode: (set) => Array.from(set.values()),
    },
  );
/**
 * @since 0.1.0
 * @category primitives
 */
export const StructFromReadonlyArray = <
  T extends A.NonEmptyReadonlyArray<AST.LiteralValue>,
  TSchema extends S.Schema<string>,
>(
  arr: T,
  valueSchema: TSchema,
) =>
  S.Struct(Object.fromEntries(arr.map((key: T[number]) => [key, valueSchema])));
/**
 * @since 0.1.0
 * @category primitives
 */
export const UnionOfLiteralsFromRecordValues = <
  TRecord extends ReadonlyRecord<string, string>,
>(
  record: TRecord,
) => S.Union(...Object.values(record).map((value) => S.Literal(value)));
/**
 * @since 0.1.0
 * @category primitives
 */
export const EnumFromReadonlyArray = <
  const T extends A.NonEmptyReadonlyArray<AST.LiteralValue>,
>(
  arr: T,
) => S.Enums(Object.fromEntries(arr.map((key: T[number]) => [key, key])));

/**
 * @since 0.1.0
 * @category primitives
 */
export const ReadonlyArrayToUnionOfLiterals = <
  const T extends A.NonEmptyReadonlyArray<AST.LiteralValue>,
>(
  arr: T,
) => S.Union(...arr.map((value: T[number]) => S.Literal(value)));

/**
 * @since 0.1.0
 * @category primitives
 */
export const UpperCasedLiteral = <const T extends string>(str: T) =>
  S.Literal(str.toUpperCase() as Uppercase<T>);
