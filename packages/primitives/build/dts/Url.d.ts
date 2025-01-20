/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const URL: S.filter<S.Schema<string, string, never>>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type URL = typeof URL.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const URLOrNull: S.NullOr<S.filter<S.Schema<string, string, never>>>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type URLOrNull = typeof URLOrNull.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const URLOrUndefined: S.UndefinedOr<S.filter<S.Schema<string, string, never>>>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type URLOrUndefined = typeof URLOrUndefined.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const URLOrNullish: S.NullishOr<S.filter<S.Schema<string, string, never>>>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type URLOrNullish = typeof URLOrNullish.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const URLOptional: S.optional<S.filter<S.Schema<string, string, never>>>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type URLOptional = S.Schema.Type<typeof URLOptional>;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const URLWithDefault: (value: string) => S.PropertySignature<":", string, never, ":", string, true, never>;
/**
 * @category primitives
 * @since 0.1.0
 */
declare const _default: {
    URL: S.filter<S.Schema<string, string, never>>;
    URLOrNull: S.NullOr<S.filter<S.Schema<string, string, never>>>;
    URLOrUndefined: S.UndefinedOr<S.filter<S.Schema<string, string, never>>>;
    URLOrNullish: S.NullishOr<S.filter<S.Schema<string, string, never>>>;
    URLOptional: S.optional<S.filter<S.Schema<string, string, never>>>;
    URLWithDefault: (value: string) => S.PropertySignature<":", string, never, ":", string, true, never>;
};
export default _default;
//# sourceMappingURL=Url.d.ts.map