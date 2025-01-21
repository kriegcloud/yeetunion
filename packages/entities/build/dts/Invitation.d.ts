import { Model } from "@effect/sql";
/**
 * @since 0.1.0
 * @category entities
 */
export declare const InvitationId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/InvitationId">;
declare const Invitation_base: import("@effect/experimental/VariantSchema").Class<Invitation, {
    readonly createdAt: Model.DateTimeInsertFromDate;
    readonly updatedAt: Model.DateTimeUpdateFromDate;
    readonly id: Model.GeneratedByApp<import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/InvitationId">>;
    readonly organizationId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgId">;
    readonly email: import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>;
    readonly role: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly status: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly expiresAt: typeof import("effect/Schema").Date;
    readonly inviterId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
}, {
    readonly createdAt: Model.DateTimeFromDate;
    readonly updatedAt: Model.DateTimeFromDate;
    readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/InvitationId">;
    readonly organizationId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgId">;
    readonly email: import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>;
    readonly role: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly status: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly expiresAt: typeof import("effect/Schema").Date;
    readonly inviterId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
}, {
    readonly id: any;
} & {
    readonly createdAt: import("effect/DateTime").Utc;
} & {
    readonly updatedAt: import("effect/DateTime").Utc;
} & {
    readonly email: string;
} & {
    readonly role: string;
} & {
    readonly organizationId: any;
} & {
    readonly status: string;
} & {
    readonly expiresAt: Date;
} & {
    readonly inviterId: any;
}, import("effect/Schema").Struct.Encoded<{
    readonly createdAt: Model.DateTimeFromDate;
    readonly updatedAt: Model.DateTimeFromDate;
    readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/InvitationId">;
    readonly organizationId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgId">;
    readonly email: import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>;
    readonly role: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly status: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly expiresAt: typeof import("effect/Schema").Date;
    readonly inviterId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
}>, never, {
    readonly id: any;
} & {
    readonly createdAt: import("effect/DateTime").Utc;
} & {
    readonly updatedAt: import("effect/DateTime").Utc;
} & {
    readonly email: string;
} & {
    readonly role: string;
} & {
    readonly organizationId: any;
} & {
    readonly status: string;
} & {
    readonly expiresAt: Date;
} & {
    readonly inviterId: any;
}> & {
    readonly select: import("effect/Schema").Struct<{
        readonly createdAt: Model.DateTimeFromDate;
        readonly updatedAt: Model.DateTimeFromDate;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/InvitationId">;
        readonly organizationId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgId">;
        readonly email: import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>;
        readonly role: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly status: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly expiresAt: typeof import("effect/Schema").Date;
        readonly inviterId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
    }>;
    readonly insert: import("effect/Schema").Struct<{
        readonly createdAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly updatedAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/InvitationId">;
        readonly organizationId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgId">;
        readonly email: import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>;
        readonly role: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly status: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly expiresAt: typeof import("effect/Schema").Date;
        readonly inviterId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
    }>;
    readonly update: import("effect/Schema").Struct<{
        readonly updatedAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/InvitationId">;
        readonly organizationId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgId">;
        readonly email: import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>;
        readonly role: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly status: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly expiresAt: typeof import("effect/Schema").Date;
        readonly inviterId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
    }>;
    readonly json: import("effect/Schema").Struct<{
        readonly createdAt: typeof import("effect/Schema").DateTimeUtc;
        readonly updatedAt: typeof import("effect/Schema").DateTimeUtc;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/InvitationId">;
        readonly organizationId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgId">;
        readonly email: import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>;
        readonly role: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly status: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly expiresAt: typeof import("effect/Schema").Date;
        readonly inviterId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
    }>;
    readonly jsonCreate: import("effect/Schema").Struct<{
        readonly organizationId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgId">;
        readonly email: import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>;
        readonly role: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly status: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly expiresAt: typeof import("effect/Schema").Date;
        readonly inviterId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
    }>;
    readonly jsonUpdate: import("effect/Schema").Struct<{
        readonly organizationId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgId">;
        readonly email: import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>;
        readonly role: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly status: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly expiresAt: typeof import("effect/Schema").Date;
        readonly inviterId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
    }>;
};
/**
 * @since 0.1.0
 * @category entities
 */
export declare class Invitation extends Invitation_base {
}
export {};
//# sourceMappingURL=Invitation.d.ts.map