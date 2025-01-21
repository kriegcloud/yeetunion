import { Model } from "@effect/sql";
/**
 * @since 0.1.0
 * @category entities
 */
export declare const JWKSId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/JWKSId">;
declare const JWKS_base: import("@effect/experimental/VariantSchema").Class<JWKS, {
    readonly createdAt: Model.DateTimeInsertFromDate;
    readonly updatedAt: Model.DateTimeUpdateFromDate;
    readonly id: Model.GeneratedByApp<import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/JWKSId">>;
    readonly publicKey: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly privateKey: Model.Sensitive<typeof import("effect/Schema").NonEmptyTrimmedString>;
}, {
    readonly createdAt: Model.DateTimeFromDate;
    readonly updatedAt: Model.DateTimeFromDate;
    readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/JWKSId">;
    readonly publicKey: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly privateKey: typeof import("effect/Schema").NonEmptyTrimmedString;
}, {
    readonly id: any;
} & {
    readonly createdAt: import("effect/DateTime").Utc;
} & {
    readonly updatedAt: import("effect/DateTime").Utc;
} & {
    readonly privateKey: string;
} & {
    readonly publicKey: string;
}, import("effect/Schema").Struct.Encoded<{
    readonly createdAt: Model.DateTimeFromDate;
    readonly updatedAt: Model.DateTimeFromDate;
    readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/JWKSId">;
    readonly publicKey: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly privateKey: typeof import("effect/Schema").NonEmptyTrimmedString;
}>, never, {
    readonly id: any;
} & {
    readonly createdAt: import("effect/DateTime").Utc;
} & {
    readonly updatedAt: import("effect/DateTime").Utc;
} & {
    readonly privateKey: string;
} & {
    readonly publicKey: string;
}> & {
    readonly select: import("effect/Schema").Struct<{
        readonly createdAt: Model.DateTimeFromDate;
        readonly updatedAt: Model.DateTimeFromDate;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/JWKSId">;
        readonly publicKey: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly privateKey: typeof import("effect/Schema").NonEmptyTrimmedString;
    }>;
    readonly insert: import("effect/Schema").Struct<{
        readonly createdAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly updatedAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/JWKSId">;
        readonly publicKey: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly privateKey: typeof import("effect/Schema").NonEmptyTrimmedString;
    }>;
    readonly update: import("effect/Schema").Struct<{
        readonly updatedAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/JWKSId">;
        readonly publicKey: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly privateKey: typeof import("effect/Schema").NonEmptyTrimmedString;
    }>;
    readonly json: import("effect/Schema").Struct<{
        readonly createdAt: typeof import("effect/Schema").DateTimeUtc;
        readonly updatedAt: typeof import("effect/Schema").DateTimeUtc;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/JWKSId">;
        readonly publicKey: typeof import("effect/Schema").NonEmptyTrimmedString;
    }>;
    readonly jsonCreate: import("effect/Schema").Struct<{
        readonly publicKey: typeof import("effect/Schema").NonEmptyTrimmedString;
    }>;
    readonly jsonUpdate: import("effect/Schema").Struct<{
        readonly publicKey: typeof import("effect/Schema").NonEmptyTrimmedString;
    }>;
};
/**
 * @since 0.1.0
 * @category entities
 */
export declare class JWKS extends JWKS_base {
}
export {};
//# sourceMappingURL=JWKS.d.ts.map