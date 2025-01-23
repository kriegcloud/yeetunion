import * as S from "effect/Schema";
/**
 * @since 0.1.0
 * @category entities
 */
export declare const VerificationId: S.brand<S.Schema.AnyNoContext, "@ye/entities/VerificationId">;
declare const Verification_base: S.Class<Verification, {
    createdAt: typeof S.Date;
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/VerificationId">;
    identifier: typeof S.NonEmptyTrimmedString;
    value: typeof S.NonEmptyTrimmedString;
    expiresAt: typeof S.Date;
}, S.Struct.Encoded<{
    createdAt: typeof S.Date;
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/VerificationId">;
    identifier: typeof S.NonEmptyTrimmedString;
    value: typeof S.NonEmptyTrimmedString;
    expiresAt: typeof S.Date;
}>, never, {
    readonly id: any;
} & {
    readonly createdAt: Date;
} & {
    readonly expiresAt: Date;
} & {
    readonly identifier: string;
} & {
    readonly value: string;
}, {}, {}>;
/**
 * @since 0.1.0
 * @category entities
 */
export declare class Verification extends Verification_base {
}
export {};
//# sourceMappingURL=Verification.d.ts.map