/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const Str: typeof S.String;
/**
 * @category primitives
 * @since 0.1.0
 */
export type Str = typeof Str.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const StrOrNull: S.NullOr<typeof S.String>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type StrOrNull = typeof StrOrNull.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const StrOrUndefined: S.UndefinedOr<typeof S.String>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type StrOrUndefined = typeof StrOrUndefined.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const StrOrNullish: S.NullishOr<typeof S.String>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type StrOrNullish = typeof StrOrNullish.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const StrOptional: S.optional<typeof S.String>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type StrOptional = S.Schema.Type<typeof StrOptional>;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const StrWithDefault: (
  value: string,
) => S.PropertySignature<":", string, never, ":", string, true, never>;
/**
 * @category primitives
 * @since 0.1.0
 */
declare const _default: {
  Str: typeof S.String;
  StrOrNull: S.NullOr<typeof S.String>;
  StrOrUndefined: S.UndefinedOr<typeof S.String>;
  StrOrNullish: S.NullishOr<typeof S.String>;
  StrOptional: S.optional<typeof S.String>;
  StrWithDefault: (
    value: string,
  ) => S.PropertySignature<":", string, never, ":", string, true, never>;
};
export default _default;
//# sourceMappingURL=Str.d.ts.map
