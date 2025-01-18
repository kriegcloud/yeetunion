import * as S from "@effect/schema/Schema";
import { pipe } from "effect/Function";
import type * as Types from "effect/Types";

/**
 * @category primitives
 * @since 0.1.0
 */
export const createEnumWithDefault = <TEnum extends S.EnumsDefinition>(
  enums: TEnum,
) =>
  pipe((defaultValue: () => Types.NoInfer<TEnum[keyof TEnum]>) =>
    S.Enums(enums).pipe(
      S.propertySignature,
      S.withConstructorDefault(defaultValue),
    ),
  );

// This function builds a schema that converts between a readonly array
// and a readonly set of items
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

export const readonlyArrayToStruct = <T extends ReadonlyArray<string>>(
  arr: T,
  valueSchema: S.Schema.Any,
) => S.Struct(Object.fromEntries(arr.map((key) => [key, valueSchema])));

export const recordValuesToUnionOfLiterals = <
  const T extends Record<string, string>,
>(
  record: T,
) => S.Union(...Object.values(record).map((value) => S.Literal(value)));

export const readonlyArrayToEnum = <const T extends ReadonlyArray<string>>(
  arr: T,
) => S.Enums(Object.fromEntries(arr.map((key) => [key, key])));
