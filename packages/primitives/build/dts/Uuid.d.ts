/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const UUID: typeof S.UUID;
/**
 * @since 0.1.0
 * @category primitives
 */
export type UUID = typeof UUID.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const UUIDOrNull: S.NullOr<typeof S.UUID>;
/**
 * @since 0.1.0
 * @category primitives
 */
export type UUIDOrNull = typeof UUIDOrNull.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const UUIDOrUndefined: S.UndefinedOr<typeof S.UUID>;
/**
 * @since 0.1.0
 * @category primitives
 */
export type UUIDOrUndefined = typeof UUIDOrUndefined.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const UUIDOrNullish: S.NullishOr<typeof S.UUID>;
/**
 * @since 0.1.0
 * @category primitives
 */
export type UUIDOrNullish = typeof UUIDOrNullish.Type;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const UUIDOptional: S.optional<typeof S.UUID>;
/**
 * @since 0.1.0
 * @category primitives
 */
export type UUIDOptional = S.Schema.Type<typeof UUIDOptional>;
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const UUIDWithDefault: (value: string) => S.PropertySignature<":", string, never, ":", string, true, never>;
/**
 * @since 0.1.0
 * @category primitives
 */
declare const _default: {
    UUID: typeof S.UUID;
    UUIDOrNull: S.NullOr<typeof S.UUID>;
    UUIDOrUndefined: S.UndefinedOr<typeof S.UUID>;
    UUIDOrNullish: S.NullishOr<typeof S.UUID>;
    UUIDOptional: S.optional<typeof S.UUID>;
    UUIDWithDefault: (value: string) => S.PropertySignature<":", string, never, ":", string, true, never>;
};
export default _default;
//# sourceMappingURL=Uuid.d.ts.map