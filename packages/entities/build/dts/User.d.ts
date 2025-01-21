import { Model } from "@effect/sql";
/**
 * @since 0.1.0
 * @category entities
 */
export declare const UserId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
declare const User_base: import("@effect/experimental/VariantSchema").Class<User, {
    readonly createdAt: Model.DateTimeInsertFromDate;
    readonly updatedAt: Model.DateTimeUpdateFromDate;
    readonly id: Model.GeneratedByApp<import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">>;
    readonly name: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly email: import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>;
    readonly emailVerified: typeof import("effect/Schema").Boolean;
    readonly image: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly role: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly banned: import("effect/Schema").NullOr<typeof import("effect/Schema").Boolean>;
    readonly banReason: import("effect/Schema").NullOr<typeof import("effect/Schema").String>;
    readonly banExpires: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
}, {
    readonly createdAt: Model.DateTimeFromDate;
    readonly updatedAt: Model.DateTimeFromDate;
    readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
    readonly name: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly email: import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>;
    readonly emailVerified: typeof import("effect/Schema").Boolean;
    readonly image: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly role: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly banned: import("effect/Schema").NullOr<typeof import("effect/Schema").Boolean>;
    readonly banReason: import("effect/Schema").NullOr<typeof import("effect/Schema").String>;
    readonly banExpires: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
}, {
    readonly id: any;
} & {
    readonly createdAt: import("effect/DateTime").Utc;
} & {
    readonly updatedAt: import("effect/DateTime").Utc;
} & {
    readonly name: string;
} & {
    readonly email: string;
} & {
    readonly emailVerified: boolean;
} & {
    readonly image: string | null;
} & {
    readonly role: string | null;
} & {
    readonly banned: boolean | null;
} & {
    readonly banReason: string | null;
} & {
    readonly banExpires: Date | null;
}, import("effect/Schema").Struct.Encoded<{
    readonly createdAt: Model.DateTimeFromDate;
    readonly updatedAt: Model.DateTimeFromDate;
    readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
    readonly name: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly email: import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>;
    readonly emailVerified: typeof import("effect/Schema").Boolean;
    readonly image: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly role: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly banned: import("effect/Schema").NullOr<typeof import("effect/Schema").Boolean>;
    readonly banReason: import("effect/Schema").NullOr<typeof import("effect/Schema").String>;
    readonly banExpires: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
}>, never, {
    readonly id: any;
} & {
    readonly createdAt: import("effect/DateTime").Utc;
} & {
    readonly updatedAt: import("effect/DateTime").Utc;
} & {
    readonly name: string;
} & {
    readonly email: string;
} & {
    readonly emailVerified: boolean;
} & {
    readonly image: string | null;
} & {
    readonly role: string | null;
} & {
    readonly banned: boolean | null;
} & {
    readonly banReason: string | null;
} & {
    readonly banExpires: Date | null;
}> & {
    readonly select: import("effect/Schema").Struct<{
        readonly createdAt: Model.DateTimeFromDate;
        readonly updatedAt: Model.DateTimeFromDate;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly name: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly email: import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>;
        readonly emailVerified: typeof import("effect/Schema").Boolean;
        readonly image: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly role: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly banned: import("effect/Schema").NullOr<typeof import("effect/Schema").Boolean>;
        readonly banReason: import("effect/Schema").NullOr<typeof import("effect/Schema").String>;
        readonly banExpires: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
    }>;
    readonly insert: import("effect/Schema").Struct<{
        readonly createdAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly updatedAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly name: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly email: import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>;
        readonly emailVerified: typeof import("effect/Schema").Boolean;
        readonly image: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly role: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly banned: import("effect/Schema").NullOr<typeof import("effect/Schema").Boolean>;
        readonly banReason: import("effect/Schema").NullOr<typeof import("effect/Schema").String>;
        readonly banExpires: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
    }>;
    readonly update: import("effect/Schema").Struct<{
        readonly updatedAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly name: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly email: import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>;
        readonly emailVerified: typeof import("effect/Schema").Boolean;
        readonly image: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly role: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly banned: import("effect/Schema").NullOr<typeof import("effect/Schema").Boolean>;
        readonly banReason: import("effect/Schema").NullOr<typeof import("effect/Schema").String>;
        readonly banExpires: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
    }>;
    readonly json: import("effect/Schema").Struct<{
        readonly createdAt: typeof import("effect/Schema").DateTimeUtc;
        readonly updatedAt: typeof import("effect/Schema").DateTimeUtc;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly name: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly email: import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>;
        readonly emailVerified: typeof import("effect/Schema").Boolean;
        readonly image: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly role: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly banned: import("effect/Schema").NullOr<typeof import("effect/Schema").Boolean>;
        readonly banReason: import("effect/Schema").NullOr<typeof import("effect/Schema").String>;
        readonly banExpires: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
    }>;
    readonly jsonCreate: import("effect/Schema").Struct<{
        readonly name: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly email: import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>;
        readonly emailVerified: typeof import("effect/Schema").Boolean;
        readonly image: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly role: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly banned: import("effect/Schema").NullOr<typeof import("effect/Schema").Boolean>;
        readonly banReason: import("effect/Schema").NullOr<typeof import("effect/Schema").String>;
        readonly banExpires: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
    }>;
    readonly jsonUpdate: import("effect/Schema").Struct<{
        readonly name: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly email: import("effect/Schema").filter<import("effect/Schema").Schema<string, string, never>>;
        readonly emailVerified: typeof import("effect/Schema").Boolean;
        readonly image: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly role: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly banned: import("effect/Schema").NullOr<typeof import("effect/Schema").Boolean>;
        readonly banReason: import("effect/Schema").NullOr<typeof import("effect/Schema").String>;
        readonly banExpires: import("effect/Schema").NullOr<typeof import("effect/Schema").Date>;
    }>;
};
/**
 * @since 0.1.0
 * @category entities
 */
export declare class User extends User_base {
}
export {};
//# sourceMappingURL=User.d.ts.map