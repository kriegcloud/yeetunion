import { Model } from "@effect/sql";
/**
 * @since 0.1.0
 * @category entities
 */
export declare const VerificationId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/VerificationId">;
declare const Verification_base: import("@effect/experimental/VariantSchema").Class<Verification, {
    readonly createdAt: Model.DateTimeInsertFromDate;
    readonly updatedAt: Model.DateTimeUpdateFromDate;
    readonly id: Model.GeneratedByApp<import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/VerificationId">>;
    readonly identifier: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly value: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly expiresAt: typeof import("effect/Schema").Date;
}, {
    readonly createdAt: Model.DateTimeFromDate;
    readonly updatedAt: Model.DateTimeFromDate;
    readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/VerificationId">;
    readonly identifier: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly value: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly expiresAt: typeof import("effect/Schema").Date;
}, {
    readonly id: any;
} & {
    readonly createdAt: import("effect/DateTime").Utc;
} & {
    readonly updatedAt: import("effect/DateTime").Utc;
} & {
    readonly expiresAt: Date;
} & {
    readonly identifier: string;
} & {
    readonly value: string;
}, import("effect/Schema").Struct.Encoded<{
    readonly createdAt: Model.DateTimeFromDate;
    readonly updatedAt: Model.DateTimeFromDate;
    readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/VerificationId">;
    readonly identifier: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly value: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly expiresAt: typeof import("effect/Schema").Date;
}>, never, {
    readonly id: any;
} & {
    readonly createdAt: import("effect/DateTime").Utc;
} & {
    readonly updatedAt: import("effect/DateTime").Utc;
} & {
    readonly expiresAt: Date;
} & {
    readonly identifier: string;
} & {
    readonly value: string;
}> & {
    readonly select: import("effect/Schema").Struct<{
        readonly createdAt: Model.DateTimeFromDate;
        readonly updatedAt: Model.DateTimeFromDate;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/VerificationId">;
        readonly identifier: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly value: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly expiresAt: typeof import("effect/Schema").Date;
    }>;
    readonly insert: import("effect/Schema").Struct<{
        readonly createdAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly updatedAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/VerificationId">;
        readonly identifier: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly value: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly expiresAt: typeof import("effect/Schema").Date;
    }>;
    readonly update: import("effect/Schema").Struct<{
        readonly updatedAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/VerificationId">;
        readonly identifier: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly value: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly expiresAt: typeof import("effect/Schema").Date;
    }>;
    readonly json: import("effect/Schema").Struct<{
        readonly createdAt: typeof import("effect/Schema").DateTimeUtc;
        readonly updatedAt: typeof import("effect/Schema").DateTimeUtc;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/VerificationId">;
        readonly identifier: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly value: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly expiresAt: typeof import("effect/Schema").Date;
    }>;
    readonly jsonCreate: import("effect/Schema").Struct<{
        readonly identifier: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly value: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly expiresAt: typeof import("effect/Schema").Date;
    }>;
    readonly jsonUpdate: import("effect/Schema").Struct<{
        readonly identifier: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly value: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly expiresAt: typeof import("effect/Schema").Date;
    }>;
};
/**
 * @since 0.1.0
 * @category entities
 */
export declare class Verification extends Verification_base {
}
export {};
//# sourceMappingURL=Verification.d.ts.map