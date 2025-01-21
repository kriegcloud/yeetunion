/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const Int: typeof S.Int;
/**
 * @category primitives
 * @since 0.1.0
 */
export type Int = typeof Int.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const IntOrNull: S.NullOr<typeof S.Int>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type IntOrNull = typeof IntOrNull.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const IntOrUndefined: S.UndefinedOr<typeof S.Int>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type IntOrUndefined = typeof IntOrUndefined.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const IntOrNullish: S.NullishOr<typeof S.Int>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type IntOrNullish = typeof IntOrNullish.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const IntOptional: S.optional<typeof S.Int>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type IntOptional = S.Schema.Type<typeof IntOptional>;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const IntWithDefault: (
  value: number,
) => S.PropertySignature<":", number, never, ":", number, true, never>;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const PosInt: S.brand<
  S.filter<S.Schema<number, number, never>>,
  "@/primitives/PosInt"
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type PosInt = typeof PosInt.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const PosIntOrNull: S.NullOr<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosInt">
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type PosIntOrNull = typeof PosIntOrNull.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const PosIntOrUndefined: S.UndefinedOr<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosInt">
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type PosIntOrUndefined = typeof PosIntOrUndefined.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const PosIntOrNullish: S.NullishOr<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosInt">
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type PosIntOrNullish = typeof PosIntOrNullish.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const PosIntOptional: S.optional<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosInt">
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type PosIntOptional = S.Schema.Type<typeof PosIntOptional>;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const PosIntWithDefault: (
  value: number,
) => S.PropertySignature<
  ":",
  number & import("effect/Brand").Brand<"@/primitives/PosInt">,
  never,
  ":",
  number,
  true,
  never
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NegInt: S.brand<
  S.filter<S.Schema<number, number, never>>,
  "@/primitives/NegInt"
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NegInt = typeof NegInt.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NegIntOrNull: S.NullOr<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegInt">
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NegIntOrNull = typeof NegIntOrNull.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NegIntOrUndefined: S.UndefinedOr<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegInt">
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NegIntOrUndefined = typeof NegIntOrUndefined.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NegIntOrNullish: S.NullishOr<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegInt">
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NegIntOrNullish = typeof NegIntOrNullish.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NegIntOptional: S.optional<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegInt">
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NegIntOptional = S.Schema.Type<typeof NegIntOptional>;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NegIntWithDefault: (
  value: number,
) => S.PropertySignature<
  ":",
  number & import("effect/Brand").Brand<"@/primitives/NegInt">,
  never,
  ":",
  number,
  true,
  never
>;
/**
 * @category primitives
 * @since 0.1.0
 */
declare const _default: {
  Int: typeof S.Int;
  IntOrNull: S.NullOr<typeof S.Int>;
  IntOrUndefined: S.UndefinedOr<typeof S.Int>;
  IntOrNullish: S.NullishOr<typeof S.Int>;
  IntOptional: S.optional<typeof S.Int>;
  IntWithDefault: (
    value: number,
  ) => S.PropertySignature<":", number, never, ":", number, true, never>;
  PosInt: S.brand<
    S.filter<S.Schema<number, number, never>>,
    "@/primitives/PosInt"
  >;
  PosIntOrNull: S.NullOr<
    S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosInt">
  >;
  PosIntOrUndefined: S.UndefinedOr<
    S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosInt">
  >;
  PosIntOrNullish: S.NullishOr<
    S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosInt">
  >;
  PosIntOptional: S.optional<
    S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosInt">
  >;
  PosIntWithDefault: (
    value: number,
  ) => S.PropertySignature<
    ":",
    number & import("effect/Brand").Brand<"@/primitives/PosInt">,
    never,
    ":",
    number,
    true,
    never
  >;
  NegInt: S.brand<
    S.filter<S.Schema<number, number, never>>,
    "@/primitives/NegInt"
  >;
  NegIntOrNull: S.NullOr<
    S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegInt">
  >;
  NegIntOrUndefined: S.UndefinedOr<
    S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegInt">
  >;
  NegIntOrNullish: S.NullishOr<
    S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegInt">
  >;
  NegIntOptional: S.optional<
    S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegInt">
  >;
  NegIntWithDefault: (
    value: number,
  ) => S.PropertySignature<
    ":",
    number & import("effect/Brand").Brand<"@/primitives/NegInt">,
    never,
    ":",
    number,
    true,
    never
  >;
};
export default _default;
//# sourceMappingURL=Int.d.ts.map
