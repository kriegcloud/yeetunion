/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const DateTime: typeof S.Date;
/**
 * @category primitives
 * @since 0.1.0
 */
export type DateTime = typeof DateTime.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const DateTimeOrNull: S.NullOr<typeof S.Date>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type DateTimeOrNull = typeof DateTimeOrNull.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const DateTimeOrUndefined: S.UndefinedOr<typeof S.Date>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type DateTimeOrUndefined = typeof DateTimeOrUndefined.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const DateTimeOrNullish: S.NullishOr<typeof S.Date>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type DateTimeOrNullish = typeof DateTimeOrNullish.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const DateTimeOptional: S.optional<typeof S.Date>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type DateTimeOptional = S.Schema.Type<typeof DateTimeOptional>;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const DateTimeWithDefault: (value: Date) => S.PropertySignature<":", Date, never, ":", string, true, never>;
//# sourceMappingURL=DateTime.d.ts.map