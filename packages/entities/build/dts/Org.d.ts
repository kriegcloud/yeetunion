import { Model } from "@effect/sql";
import { Schema as S } from "effect";
/**
 * @since 0.1.0
 * @category entities
 */
export declare const OrgId: S.brand<S.Schema.AnyNoContext, "@ye/entities/OrgId">;
declare const Org_base: import("@effect/experimental/VariantSchema").Class<Org, {
    readonly createdAt: Model.DateTimeInsertFromDate;
    readonly updatedAt: Model.DateTimeUpdateFromDate;
    readonly id: Model.GeneratedByApp<S.brand<S.Schema.AnyNoContext, "@ye/entities/OrgId">>;
    readonly name: typeof S.NonEmptyTrimmedString;
    readonly slug: S.filter<S.Schema<string, string, never>>;
    readonly logo: S.filter<S.Schema<string, string, never>>;
    readonly metadata: typeof S.String;
}, {
    readonly createdAt: Model.DateTimeFromDate;
    readonly updatedAt: Model.DateTimeFromDate;
    readonly id: S.brand<S.Schema.AnyNoContext, "@ye/entities/OrgId">;
    readonly name: typeof S.NonEmptyTrimmedString;
    readonly slug: S.filter<S.Schema<string, string, never>>;
    readonly logo: S.filter<S.Schema<string, string, never>>;
    readonly metadata: typeof S.String;
}, {
    readonly id: any;
} & {
    readonly createdAt: import("effect/DateTime").Utc;
} & {
    readonly updatedAt: import("effect/DateTime").Utc;
} & {
    readonly name: string;
} & {
    readonly slug: string;
} & {
    readonly logo: string;
} & {
    readonly metadata: string;
}, S.Struct.Encoded<{
    readonly createdAt: Model.DateTimeFromDate;
    readonly updatedAt: Model.DateTimeFromDate;
    readonly id: S.brand<S.Schema.AnyNoContext, "@ye/entities/OrgId">;
    readonly name: typeof S.NonEmptyTrimmedString;
    readonly slug: S.filter<S.Schema<string, string, never>>;
    readonly logo: S.filter<S.Schema<string, string, never>>;
    readonly metadata: typeof S.String;
}>, never, {
    readonly id: any;
} & {
    readonly createdAt: import("effect/DateTime").Utc;
} & {
    readonly updatedAt: import("effect/DateTime").Utc;
} & {
    readonly name: string;
} & {
    readonly slug: string;
} & {
    readonly logo: string;
} & {
    readonly metadata: string;
}> & {
    readonly select: S.Struct<{
        readonly createdAt: Model.DateTimeFromDate;
        readonly updatedAt: Model.DateTimeFromDate;
        readonly id: S.brand<S.Schema.AnyNoContext, "@ye/entities/OrgId">;
        readonly name: typeof S.NonEmptyTrimmedString;
        readonly slug: S.filter<S.Schema<string, string, never>>;
        readonly logo: S.filter<S.Schema<string, string, never>>;
        readonly metadata: typeof S.String;
    }>;
    readonly insert: S.Struct<{
        readonly createdAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly updatedAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly id: S.brand<S.Schema.AnyNoContext, "@ye/entities/OrgId">;
        readonly name: typeof S.NonEmptyTrimmedString;
        readonly slug: S.filter<S.Schema<string, string, never>>;
        readonly logo: S.filter<S.Schema<string, string, never>>;
        readonly metadata: typeof S.String;
    }>;
    readonly update: S.Struct<{
        readonly updatedAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly id: S.brand<S.Schema.AnyNoContext, "@ye/entities/OrgId">;
        readonly name: typeof S.NonEmptyTrimmedString;
        readonly slug: S.filter<S.Schema<string, string, never>>;
        readonly logo: S.filter<S.Schema<string, string, never>>;
        readonly metadata: typeof S.String;
    }>;
    readonly json: S.Struct<{
        readonly createdAt: typeof S.DateTimeUtc;
        readonly updatedAt: typeof S.DateTimeUtc;
        readonly id: S.brand<S.Schema.AnyNoContext, "@ye/entities/OrgId">;
        readonly name: typeof S.NonEmptyTrimmedString;
        readonly slug: S.filter<S.Schema<string, string, never>>;
        readonly logo: S.filter<S.Schema<string, string, never>>;
        readonly metadata: typeof S.String;
    }>;
    readonly jsonCreate: S.Struct<{
        readonly name: typeof S.NonEmptyTrimmedString;
        readonly slug: S.filter<S.Schema<string, string, never>>;
        readonly logo: S.filter<S.Schema<string, string, never>>;
        readonly metadata: typeof S.String;
    }>;
    readonly jsonUpdate: S.Struct<{
        readonly name: typeof S.NonEmptyTrimmedString;
        readonly slug: S.filter<S.Schema<string, string, never>>;
        readonly logo: S.filter<S.Schema<string, string, never>>;
        readonly metadata: typeof S.String;
    }>;
};
/**
 * @since 0.1.0
 * @category entities
 */
export declare class Org extends Org_base {
}
export {};
//# sourceMappingURL=Org.d.ts.map