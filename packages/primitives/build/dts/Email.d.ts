/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
/**
 * @category primitives
 * @since 0.1.0
 */
declare const Email: S.filter<S.Schema<string, string, never>>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type Email = typeof Email.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const EmailOrNull: S.NullOr<S.filter<S.Schema<string, string, never>>>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type EmailOrNull = typeof EmailOrNull.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const EmailOrUndefined: S.UndefinedOr<S.filter<S.Schema<string, string, never>>>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type EmailOrUndefined = typeof EmailOrUndefined.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const EmailOrNullish: S.NullishOr<S.filter<S.Schema<string, string, never>>>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type EmailOrNullish = typeof EmailOrNullish.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const EmailOptional: S.optional<S.filter<S.Schema<string, string, never>>>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type EmailOptional = S.Schema.Type<typeof EmailOptional>;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const EmailWithDefault: (value: string) => S.PropertySignature<":", string, never, ":", string, true, never>;
/**
 * @category primitives
 * @since 0.1.0
 */
declare const _default: {
    Email: S.filter<S.Schema<string, string, never>>;
    EmailOrNull: S.NullOr<S.filter<S.Schema<string, string, never>>>;
    EmailOrUndefined: S.UndefinedOr<S.filter<S.Schema<string, string, never>>>;
    EmailOrNullish: S.NullishOr<S.filter<S.Schema<string, string, never>>>;
    EmailOptional: S.optional<S.filter<S.Schema<string, string, never>>>;
    EmailWithDefault: (value: string) => S.PropertySignature<":", string, never, ":", string, true, never>;
};
export default _default;
//# sourceMappingURL=Email.d.ts.map