import { Model } from "@effect/sql";
/**
 * @since 0.1.0
 * @category entities
 */
export declare const OrgMemberId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgMemberId">;
declare const OrgMember_base: import("@effect/experimental/VariantSchema").Class<OrgMember, {
    readonly createdAt: Model.DateTimeInsertFromDate;
    readonly updatedAt: Model.DateTimeUpdateFromDate;
    readonly id: Model.GeneratedByApp<import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgMemberId">>;
    readonly organizationId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgId">;
    readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
    readonly role: typeof import("effect/Schema").NonEmptyTrimmedString;
}, {
    readonly createdAt: Model.DateTimeFromDate;
    readonly updatedAt: Model.DateTimeFromDate;
    readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgMemberId">;
    readonly organizationId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgId">;
    readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
    readonly role: typeof import("effect/Schema").NonEmptyTrimmedString;
}, {
    readonly id: any;
} & {
    readonly createdAt: import("effect/DateTime").Utc;
} & {
    readonly updatedAt: import("effect/DateTime").Utc;
} & {
    readonly role: string;
} & {
    readonly userId: any;
} & {
    readonly organizationId: any;
}, import("effect/Schema").Struct.Encoded<{
    readonly createdAt: Model.DateTimeFromDate;
    readonly updatedAt: Model.DateTimeFromDate;
    readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgMemberId">;
    readonly organizationId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgId">;
    readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
    readonly role: typeof import("effect/Schema").NonEmptyTrimmedString;
}>, never, {
    readonly id: any;
} & {
    readonly createdAt: import("effect/DateTime").Utc;
} & {
    readonly updatedAt: import("effect/DateTime").Utc;
} & {
    readonly role: string;
} & {
    readonly userId: any;
} & {
    readonly organizationId: any;
}> & {
    readonly select: import("effect/Schema").Struct<{
        readonly createdAt: Model.DateTimeFromDate;
        readonly updatedAt: Model.DateTimeFromDate;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgMemberId">;
        readonly organizationId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgId">;
        readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly role: typeof import("effect/Schema").NonEmptyTrimmedString;
    }>;
    readonly insert: import("effect/Schema").Struct<{
        readonly createdAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly updatedAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgMemberId">;
        readonly organizationId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgId">;
        readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly role: typeof import("effect/Schema").NonEmptyTrimmedString;
    }>;
    readonly update: import("effect/Schema").Struct<{
        readonly updatedAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgMemberId">;
        readonly organizationId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgId">;
        readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly role: typeof import("effect/Schema").NonEmptyTrimmedString;
    }>;
    readonly json: import("effect/Schema").Struct<{
        readonly createdAt: typeof import("effect/Schema").DateTimeUtc;
        readonly updatedAt: typeof import("effect/Schema").DateTimeUtc;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgMemberId">;
        readonly organizationId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgId">;
        readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly role: typeof import("effect/Schema").NonEmptyTrimmedString;
    }>;
    readonly jsonCreate: import("effect/Schema").Struct<{
        readonly organizationId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgId">;
        readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly role: typeof import("effect/Schema").NonEmptyTrimmedString;
    }>;
    readonly jsonUpdate: import("effect/Schema").Struct<{
        readonly organizationId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/OrgId">;
        readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly role: typeof import("effect/Schema").NonEmptyTrimmedString;
    }>;
};
/**
 * @since 0.1.0
 * @category entities
 */
export declare class OrgMember extends OrgMember_base {
}
export {};
//# sourceMappingURL=OrgMember.d.ts.map