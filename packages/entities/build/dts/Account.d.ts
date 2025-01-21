import { Model } from "@effect/sql";
/**
 * @since 0.1.0
 * @category entities
 */
export declare const AccountId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/AccountId">;
declare const Account_base: import("@effect/experimental/VariantSchema").Class<Account, {
    readonly createdAt: Model.DateTimeInsertFromDate;
    readonly updatedAt: Model.DateTimeUpdateFromDate;
    readonly id: Model.GeneratedByApp<import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/AccountId">>;
    readonly accountId: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly providerId: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
    readonly accessToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly refreshToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly idToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly accessTokenExpiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
    readonly refreshTokenExpiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
    readonly scope: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly password: Model.Sensitive<import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>>;
}, {
    readonly createdAt: Model.DateTimeFromDate;
    readonly updatedAt: Model.DateTimeFromDate;
    readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/AccountId">;
    readonly accountId: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly providerId: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
    readonly accessToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly refreshToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly idToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly accessTokenExpiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
    readonly refreshTokenExpiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
    readonly scope: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly password: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
}, {
    readonly id: any;
} & {
    readonly createdAt: import("effect/DateTime").Utc;
} & {
    readonly updatedAt: import("effect/DateTime").Utc;
} & {
    readonly password: string | null;
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
}, import("effect/Schema").Struct.Encoded<{
    readonly createdAt: Model.DateTimeFromDate;
    readonly updatedAt: Model.DateTimeFromDate;
    readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/AccountId">;
    readonly accountId: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly providerId: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
    readonly accessToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly refreshToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly idToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly accessTokenExpiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
    readonly refreshTokenExpiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
    readonly scope: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly password: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
}>, never, {
    readonly id: any;
} & {
    readonly createdAt: import("effect/DateTime").Utc;
} & {
    readonly updatedAt: import("effect/DateTime").Utc;
} & {
    readonly password: string | null;
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
}> & {
    readonly select: import("effect/Schema").Struct<{
        readonly createdAt: Model.DateTimeFromDate;
        readonly updatedAt: Model.DateTimeFromDate;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/AccountId">;
        readonly accountId: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly providerId: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly accessToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly refreshToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly idToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly accessTokenExpiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
        readonly refreshTokenExpiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
        readonly scope: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly password: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    }>;
    readonly insert: import("effect/Schema").Struct<{
        readonly createdAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly updatedAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/AccountId">;
        readonly accountId: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly providerId: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly accessToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly refreshToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly idToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly accessTokenExpiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
        readonly refreshTokenExpiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
        readonly scope: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly password: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    }>;
    readonly update: import("effect/Schema").Struct<{
        readonly updatedAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/AccountId">;
        readonly accountId: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly providerId: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly accessToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly refreshToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly idToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly accessTokenExpiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
        readonly refreshTokenExpiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
        readonly scope: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly password: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    }>;
    readonly json: import("effect/Schema").Struct<{
        readonly createdAt: typeof import("effect/Schema").DateTimeUtc;
        readonly updatedAt: typeof import("effect/Schema").DateTimeUtc;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/AccountId">;
        readonly accountId: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly providerId: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly accessToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly refreshToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly idToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly accessTokenExpiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
        readonly refreshTokenExpiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
        readonly scope: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    }>;
    readonly jsonCreate: import("effect/Schema").Struct<{
        readonly accountId: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly providerId: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly accessToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly refreshToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly idToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly accessTokenExpiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
        readonly refreshTokenExpiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
        readonly scope: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    }>;
    readonly jsonUpdate: import("effect/Schema").Struct<{
        readonly accountId: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly providerId: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly accessToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly refreshToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly idToken: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly accessTokenExpiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
        readonly refreshTokenExpiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
        readonly scope: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    }>;
};
/**
 * @since 0.1.0
 * @category entities
 */
export declare class Account extends Account_base {
}
export {};
//# sourceMappingURL=Account.d.ts.map