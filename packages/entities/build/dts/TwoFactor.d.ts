import * as S from "effect/Schema";
/**
 * @since 0.1.0
 * @category entities
 */
export declare const TwoFactorId: S.brand<S.Schema.AnyNoContext, "@ye/entities/TwoFactorId">;
declare const TwoFactor_base: S.Class<TwoFactor, {
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/TwoFactorId">;
    secret: typeof S.NonEmptyTrimmedString;
    backupCodes: typeof S.NonEmptyTrimmedString;
    userId: S.brand<S.Schema.AnyNoContext, "@ye/entities/UserId">;
}, S.Struct.Encoded<{
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/TwoFactorId">;
    secret: typeof S.NonEmptyTrimmedString;
    backupCodes: typeof S.NonEmptyTrimmedString;
    userId: S.brand<S.Schema.AnyNoContext, "@ye/entities/UserId">;
}>, never, {
    readonly id: any;
} & {
    readonly userId: any;
} & {
    readonly secret: string;
} & {
    readonly backupCodes: string;
}, {}, {}>;
/**
 * @since 0.1.0
 * @category entities
 */
export declare class TwoFactor extends TwoFactor_base {
}
export {};
//# sourceMappingURL=TwoFactor.d.ts.map