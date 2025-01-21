import { Model } from "@effect/sql";
/**
 * @since 0.1.0
 * @category entities
 */
export declare const SessionId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/SessionId">;
declare const Session_base: import("@effect/experimental/VariantSchema").Class<Session, {
    readonly createdAt: Model.DateTimeInsertFromDate;
    readonly updatedAt: Model.DateTimeUpdateFromDate;
    readonly id: Model.GeneratedByApp<import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/SessionId">>;
    readonly expiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
    readonly token: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly ipAddress: import("effect/Schema").NullOr<import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>>;
    readonly userAgent: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
    readonly impersonatedBy: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly activeOrganizationId: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
}, {
    readonly createdAt: Model.DateTimeFromDate;
    readonly updatedAt: Model.DateTimeFromDate;
    readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/SessionId">;
    readonly expiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
    readonly token: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly ipAddress: import("effect/Schema").NullOr<import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>>;
    readonly userAgent: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
    readonly impersonatedBy: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly activeOrganizationId: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
}, {
    readonly id: any;
} & {
    readonly createdAt: import("effect/DateTime").Utc;
} & {
    readonly updatedAt: import("effect/DateTime").Utc;
} & {
    readonly userId: any;
} & {
    readonly expiresAt: Date | null;
} & {
    readonly token: string;
} & {
    readonly ipAddress: string | null;
} & {
    readonly userAgent: string | null;
} & {
    readonly impersonatedBy: string | null;
} & {
    readonly activeOrganizationId: string | null;
}, import("effect/Schema").Struct.Encoded<{
    readonly createdAt: Model.DateTimeFromDate;
    readonly updatedAt: Model.DateTimeFromDate;
    readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/SessionId">;
    readonly expiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
    readonly token: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly ipAddress: import("effect/Schema").NullOr<import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>>;
    readonly userAgent: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
    readonly impersonatedBy: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly activeOrganizationId: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
}>, never, {
    readonly id: any;
} & {
    readonly createdAt: import("effect/DateTime").Utc;
} & {
    readonly updatedAt: import("effect/DateTime").Utc;
} & {
    readonly userId: any;
} & {
    readonly expiresAt: Date | null;
} & {
    readonly token: string;
} & {
    readonly ipAddress: string | null;
} & {
    readonly userAgent: string | null;
} & {
    readonly impersonatedBy: string | null;
} & {
    readonly activeOrganizationId: string | null;
}> & {
    readonly select: import("effect/Schema").Struct<{
        readonly createdAt: Model.DateTimeFromDate;
        readonly updatedAt: Model.DateTimeFromDate;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/SessionId">;
        readonly expiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
        readonly token: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly ipAddress: import("effect/Schema").NullOr<import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>>;
        readonly userAgent: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly impersonatedBy: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly activeOrganizationId: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    }>;
    readonly insert: import("effect/Schema").Struct<{
        readonly createdAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly updatedAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/SessionId">;
        readonly expiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
        readonly token: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly ipAddress: import("effect/Schema").NullOr<import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>>;
        readonly userAgent: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly impersonatedBy: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly activeOrganizationId: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    }>;
    readonly update: import("effect/Schema").Struct<{
        readonly updatedAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/SessionId">;
        readonly expiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
        readonly token: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly ipAddress: import("effect/Schema").NullOr<import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>>;
        readonly userAgent: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly impersonatedBy: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly activeOrganizationId: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    }>;
    readonly json: import("effect/Schema").Struct<{
        readonly createdAt: typeof import("effect/Schema").DateTimeUtc;
        readonly updatedAt: typeof import("effect/Schema").DateTimeUtc;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/SessionId">;
        readonly expiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
        readonly token: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly ipAddress: import("effect/Schema").NullOr<import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>>;
        readonly userAgent: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly impersonatedBy: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly activeOrganizationId: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    }>;
    readonly jsonCreate: import("effect/Schema").Struct<{
        readonly expiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
        readonly token: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly ipAddress: import("effect/Schema").NullOr<import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>>;
        readonly userAgent: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly impersonatedBy: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly activeOrganizationId: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    }>;
    readonly jsonUpdate: import("effect/Schema").Struct<{
        readonly expiresAt: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
        readonly token: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly ipAddress: import("effect/Schema").NullOr<import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>>;
        readonly userAgent: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly impersonatedBy: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly activeOrganizationId: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    }>;
};
/**
 * @since 0.1.0
 * @category entities
 */
export declare class Session extends Session_base {
}
export {};
//# sourceMappingURL=Session.d.ts.map