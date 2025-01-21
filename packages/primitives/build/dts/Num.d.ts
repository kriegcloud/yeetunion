/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const Num: typeof S.Number;
/**
 * @category primitives
 * @since 0.1.0
 */
export type Num = typeof Num.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NumOrNull: S.NullOr<typeof S.Number>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NumOrNull = typeof NumOrNull.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NumOrUndefined: S.UndefinedOr<typeof S.Number>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NumOrUndefined = typeof NumOrUndefined.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NumOrNullish: S.NullishOr<typeof S.Number>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NumOrNullish = typeof NumOrNullish.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NumOptional: S.optional<typeof S.Number>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NumOptional = S.Schema.Type<typeof NumOptional>;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NumWithDefault: (
  value: number,
) => S.PropertySignature<":", number, never, ":", number, true, never>;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const PosNum: S.brand<
  S.filter<S.Schema<number, number, never>>,
  "@/primitives/PosNum"
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type PosNum = typeof PosNum.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const PosNumOrNull: S.NullOr<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosNum">
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type PosNumOrNull = typeof PosNumOrNull.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const PosNumOrUndefined: S.UndefinedOr<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosNum">
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type PosNumOrUndefined = typeof PosNumOrUndefined.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const PosNumOrNullish: S.NullishOr<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosNum">
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type PosNumOrNullish = typeof PosNumOrNullish.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const PosNumOptional: S.optional<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosNum">
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type PosNumOptional = S.Schema.Type<typeof PosNumOptional>;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const PosNumWithDefault: (
  value: number,
) => S.PropertySignature<
  ":",
  number & import("effect/Brand").Brand<"@/primitives/PosNum">,
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
export declare const NegNum: S.brand<
  S.filter<S.Schema<number, number, never>>,
  "@/primitives/NegNum"
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NegNum = typeof NegNum.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NegNumOrNull: S.NullOr<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegNum">
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NegNumOrNull = typeof NegNumOrNull.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NegNumOrUndefined: S.UndefinedOr<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegNum">
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NegNumOrUndefined = typeof NegNumOrUndefined.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NegNumOrNullish: S.NullishOr<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegNum">
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NegNumOrNullish = typeof NegNumOrNullish.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NegNumOptional: S.optional<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegNum">
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type NegNumOptional = S.Schema.Type<typeof NegNumOptional>;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const NegNumWithDefault: (
  value: number,
) => S.PropertySignature<
  ":",
  number & import("effect/Brand").Brand<"@/primitives/NegNum">,
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
  Num: typeof S.Number;
  NumOrNull: S.NullOr<typeof S.Number>;
  NumOrUndefined: S.UndefinedOr<typeof S.Number>;
  NumOrNullish: S.NullishOr<typeof S.Number>;
  NumOptional: S.optional<typeof S.Number>;
  NumWithDefault: (
    value: number,
  ) => S.PropertySignature<":", number, never, ":", number, true, never>;
  PosNum: S.brand<
    S.filter<S.Schema<number, number, never>>,
    "@/primitives/PosNum"
  >;
  PosNumOrNull: S.NullOr<
    S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosNum">
  >;
  PosNumOrUndefined: S.UndefinedOr<
    S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosNum">
  >;
  PosNumOrNullish: S.NullishOr<
    S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosNum">
  >;
  PosNumOptional: S.optional<
    S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosNum">
  >;
  PosNumWithDefault: (
    value: number,
  ) => S.PropertySignature<
    ":",
    number & import("effect/Brand").Brand<"@/primitives/PosNum">,
    never,
    ":",
    number,
    true,
    never
  >;
  NegNum: S.brand<
    S.filter<S.Schema<number, number, never>>,
    "@/primitives/NegNum"
  >;
  NegNumOrNull: S.NullOr<
    S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegNum">
  >;
  NegNumOrNullish: S.NullishOr<
    S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegNum">
  >;
  NegNumOrUndefined: S.UndefinedOr<
    S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegNum">
  >;
  NegNumOptional: S.optional<
    S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegNum">
  >;
};
export default _default;
//# sourceMappingURL=Num.d.ts.map
