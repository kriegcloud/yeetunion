import * as S from "effect/Schema";
/**
 * @since 0.1.0
 * @category entities
 */
export declare const AccountId: S.brand<S.Schema.AnyNoContext, "@ye/entities/AccountId">;
declare const Account_base: S.Class<Account, {
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/AccountId">;
    accountId: typeof S.NonEmptyTrimmedString;
    providerId: typeof S.NonEmptyTrimmedString;
    userId: S.brand<S.Schema.AnyNoContext, "@ye/entities/UserId">;
    accessToken: S.NullOr<typeof S.NonEmptyTrimmedString>;
    refreshToken: S.NullOr<typeof S.NonEmptyTrimmedString>;
    idToken: S.NullOr<typeof S.NonEmptyTrimmedString>;
    accessTokenExpiresAt: S.NullOr<typeof S.Date>;
    refreshTokenExpiresAt: S.NullOr<typeof S.Date>;
    scope: S.NullOr<typeof S.NonEmptyTrimmedString>;
    password: S.NullOr<typeof S.NonEmptyTrimmedString>;
    createdAt: typeof S.Date;
    updatedAt: typeof S.Date;
}, S.Struct.Encoded<{
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/AccountId">;
    accountId: typeof S.NonEmptyTrimmedString;
    providerId: typeof S.NonEmptyTrimmedString;
    userId: S.brand<S.Schema.AnyNoContext, "@ye/entities/UserId">;
    accessToken: S.NullOr<typeof S.NonEmptyTrimmedString>;
    refreshToken: S.NullOr<typeof S.NonEmptyTrimmedString>;
    idToken: S.NullOr<typeof S.NonEmptyTrimmedString>;
    accessTokenExpiresAt: S.NullOr<typeof S.Date>;
    refreshTokenExpiresAt: S.NullOr<typeof S.Date>;
    scope: S.NullOr<typeof S.NonEmptyTrimmedString>;
    password: S.NullOr<typeof S.NonEmptyTrimmedString>;
    createdAt: typeof S.Date;
    updatedAt: typeof S.Date;
}>, never, {
    readonly id: any;
} & {
    readonly createdAt: Date;
} & {
    readonly updatedAt: Date;
} & {
    readonly accountId: string;
} & {
    readonly providerId: string;
} & {
    readonly userId: any;
} & {
    readonly accessToken: string | null;
} & {
    readonly refreshToken: string | null;
} & {
    readonly idToken: string | null;
} & {
    readonly accessTokenExpiresAt: Date | null;
} & {
    readonly refreshTokenExpiresAt: Date | null;
} & {
    readonly scope: string | null;
} & {
    readonly password: string | null;
}, {}, {}>;
/**
 * @since 0.1.0
 * @category entities
 */
export declare class Account extends Account_base {
}
export {};
//# sourceMappingURL=Account.d.ts.map