/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NonEmptyStr: typeof S.NonEmptyTrimmedString;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NonEmptyStr = typeof NonEmptyStr.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NonEmptyStrOrNull: S.NullOr<
  typeof S.NonEmptyTrimmedString
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NonEmptyStrOrNull = typeof NonEmptyStrOrNull.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NonEmptyStrOrUndefined: S.UndefinedOr<
  typeof S.NonEmptyTrimmedString
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NonEmptyStrOrUndefined = typeof NonEmptyStrOrUndefined.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NonEmptyStrOrNullish: S.NullishOr<
  typeof S.NonEmptyTrimmedString
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NonEmptyStrOrNullish = typeof NonEmptyStrOrNullish.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NonEmptyStrOptional: S.optional<
  typeof S.NonEmptyTrimmedString
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NonEmptyStrOptional = S.Schema.Type<typeof NonEmptyStrOptional>;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NonEmptyStrWithDefault: (
  value: string,
) => S.PropertySignature<":", string, never, ":", string, true, never>;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NonEmptyTrimStr: typeof S.NonEmptyTrimmedString;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NonEmptyTrimStr = typeof NonEmptyTrimStr.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NonEmptyTrimStrOrNull: S.NullOr<
  typeof S.NonEmptyTrimmedString
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NonEmptyTrimStrOrNull = typeof NonEmptyTrimStrOrNull.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NonEmptyTrimStrOrUndefined: S.UndefinedOr<
  typeof S.NonEmptyTrimmedString
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NonEmptyTrimStrOrUndefined = typeof NonEmptyTrimStrOrUndefined.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NonEmptyTrimStrOrNullish: S.NullishOr<
  typeof S.NonEmptyTrimmedString
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NonEmptyTrimStrOrNullish = typeof NonEmptyTrimStrOrNullish.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NonEmptyTrimStrOptional: S.optional<
  typeof S.NonEmptyTrimmedString
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NonEmptyTrimStrOptional = S.Schema.Type<
  typeof NonEmptyTrimStrOptional
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NonEmptyTrimStrWithDefault: (
  value: string,
) => S.PropertySignature<":", string, never, ":", string, true, never>;
/**
 * @category primitives
 * @since 0.1.0
 */
declare const _default: {
  NonEmptyStr: typeof S.NonEmptyTrimmedString;
  NonEmptyStrOrNull: S.NullOr<typeof S.NonEmptyTrimmedString>;
  NonEmptyStrOrUndefined: S.UndefinedOr<typeof S.NonEmptyTrimmedString>;
  NonEmptyStrOrNullish: S.NullishOr<typeof S.NonEmptyTrimmedString>;
  NonEmptyStrOptional: S.optional<typeof S.NonEmptyTrimmedString>;
  NonEmptyStrWithDefault: (
    value: string,
  ) => S.PropertySignature<":", string, never, ":", string, true, never>;
  NonEmptyTrimStr: typeof S.NonEmptyTrimmedString;
  NonEmptyTrimStrOrNull: S.NullOr<typeof S.NonEmptyTrimmedString>;
  NonEmptyTrimStrOrUndefined: S.UndefinedOr<typeof S.NonEmptyTrimmedString>;
  NonEmptyTrimStrOrNullish: S.NullishOr<typeof S.NonEmptyTrimmedString>;
  NonEmptyTrimStrOptional: S.optional<typeof S.NonEmptyTrimmedString>;
  NonEmptyTrimStrWithDefault: (
    value: string,
  ) => S.PropertySignature<":", string, never, ":", string, true, never>;
};
export default _default;
//# sourceMappingURL=NonEmptyStr.d.ts.map
