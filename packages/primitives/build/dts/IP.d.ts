import { Schema as S } from "effect";
/**
 * @category primitives
 * @since 0.1.0
 */
declare const IPv4: S.filter<S.Schema<string, string, never>>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type IPv4 = typeof IPv4.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const IPv6: S.filter<S.Schema<string, string, never>>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type IPv6 = typeof IPv6.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const IP: S.filter<S.Schema<string, string, never>>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type IP = typeof IP.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const IPOrNull: S.NullOr<
  S.filter<S.Schema<string, string, never>>
>;
/**
 * @category primitives
 * @since 0.1.0
 */
export type IPOrNull = typeof IP.Type;
//# sourceMappingURL=IP.d.ts.map
