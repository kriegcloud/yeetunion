/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const Bool: typeof S.Boolean;
/**
 * @category primitives
 * @since 0.1.0
 */
export type Bool = typeof Bool.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const BoolOrNull: S.NullOr<typeof S.Boolean>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type BoolOrNull = typeof BoolOrNull.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const BoolOrUndefined: S.UndefinedOr<typeof S.Boolean>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type BoolOrUndefined = typeof BoolOrUndefined.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const BoolOrNullish: S.NullishOr<typeof S.Boolean>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type BoolOrNullish = typeof BoolOrNullish.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const BoolOptional: S.optional<typeof S.Boolean>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type BoolOptional = S.Schema.Type<typeof BoolOptional>;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const BoolWithDefault: (
  value: boolean,
) => S.PropertySignature<":", boolean, never, ":", boolean, true, never>;
/**
 * @category primitives
 * @since 0.1.0
 */
declare const _default: {
  Bool: typeof S.Boolean;
  BoolOrNull: S.NullOr<typeof S.Boolean>;
  BoolOrUndefined: S.UndefinedOr<typeof S.Boolean>;
  BoolOrNullish: S.NullishOr<typeof S.Boolean>;
  BoolOptional: S.optional<typeof S.Boolean>;
  BoolWithDefault: (
    value: boolean,
  ) => S.PropertySignature<":", boolean, never, ":", boolean, true, never>;
};
export default _default;
//# sourceMappingURL=Bool.d.ts.map
