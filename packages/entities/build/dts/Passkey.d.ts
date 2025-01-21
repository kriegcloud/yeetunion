import { Model } from "@effect/sql";
/**
 * @since 0.1.0
 * @category entities
 */
export declare const PasskeyId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/PasskeyId">;
declare const Passkey_base: import("@effect/experimental/VariantSchema").Class<Passkey, {
    readonly createdAt: Model.DateTimeInsertFromDate;
    readonly updatedAt: Model.DateTimeUpdateFromDate;
    readonly id: Model.GeneratedByApp<import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/PasskeyId">>;
    readonly name: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly publicKey: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
    readonly credentialID: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly counter: import("effect/Schema").brand<import("effect/Schema").filter<import("effect/Schema").Schema<number, number, never>>, "@/primitives/PosInt">;
    readonly deviceType: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly backedUp: typeof import("effect/Schema").Boolean;
    readonly transports: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
}, {
    readonly createdAt: Model.DateTimeFromDate;
    readonly updatedAt: Model.DateTimeFromDate;
    readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/PasskeyId">;
    readonly name: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly publicKey: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
    readonly credentialID: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly counter: import("effect/Schema").brand<import("effect/Schema").filter<import("effect/Schema").Schema<number, number, never>>, "@/primitives/PosInt">;
    readonly deviceType: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly backedUp: typeof import("effect/Schema").Boolean;
    readonly transports: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
}, {
    readonly id: any;
} & {
    readonly createdAt: import("effect/DateTime").Utc;
} & {
    readonly updatedAt: import("effect/DateTime").Utc;
} & {
    readonly name: string | null;
} & {
    readonly userId: any;
} & {
    readonly publicKey: string;
} & {
    readonly credentialID: string;
} & {
    readonly counter: number & import("effect/Brand").Brand<"@/primitives/PosInt">;
} & {
    readonly deviceType: string;
} & {
    readonly backedUp: boolean;
} & {
    readonly transports: string | null;
}, import("effect/Schema").Struct.Encoded<{
    readonly createdAt: Model.DateTimeFromDate;
    readonly updatedAt: Model.DateTimeFromDate;
    readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/PasskeyId">;
    readonly name: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    readonly publicKey: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
    readonly credentialID: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly counter: import("effect/Schema").brand<import("effect/Schema").filter<import("effect/Schema").Schema<number, number, never>>, "@/primitives/PosInt">;
    readonly deviceType: typeof import("effect/Schema").NonEmptyTrimmedString;
    readonly backedUp: typeof import("effect/Schema").Boolean;
    readonly transports: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
}>, never, {
    readonly id: any;
} & {
    readonly createdAt: import("effect/DateTime").Utc;
} & {
    readonly updatedAt: import("effect/DateTime").Utc;
} & {
    readonly name: string | null;
} & {
    readonly userId: any;
} & {
    readonly publicKey: string;
} & {
    readonly credentialID: string;
} & {
    readonly counter: number & import("effect/Brand").Brand<"@/primitives/PosInt">;
} & {
    readonly deviceType: string;
} & {
    readonly backedUp: boolean;
} & {
    readonly transports: string | null;
}> & {
    readonly select: import("effect/Schema").Struct<{
        readonly createdAt: Model.DateTimeFromDate;
        readonly updatedAt: Model.DateTimeFromDate;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/PasskeyId">;
        readonly name: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly publicKey: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly credentialID: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly counter: import("effect/Schema").brand<import("effect/Schema").filter<import("effect/Schema").Schema<number, number, never>>, "@/primitives/PosInt">;
        readonly deviceType: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly backedUp: typeof import("effect/Schema").Boolean;
        readonly transports: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    }>;
    readonly insert: import("effect/Schema").Struct<{
        readonly createdAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly updatedAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/PasskeyId">;
        readonly name: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly publicKey: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly credentialID: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly counter: import("effect/Schema").brand<import("effect/Schema").filter<import("effect/Schema").Schema<number, number, never>>, "@/primitives/PosInt">;
        readonly deviceType: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly backedUp: typeof import("effect/Schema").Boolean;
        readonly transports: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    }>;
    readonly update: import("effect/Schema").Struct<{
        readonly updatedAt: import("@effect/experimental/VariantSchema").Overrideable<import("effect/DateTime").Utc, Date, never>;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/PasskeyId">;
        readonly name: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly publicKey: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly credentialID: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly counter: import("effect/Schema").brand<import("effect/Schema").filter<import("effect/Schema").Schema<number, number, never>>, "@/primitives/PosInt">;
        readonly deviceType: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly backedUp: typeof import("effect/Schema").Boolean;
        readonly transports: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    }>;
    readonly json: import("effect/Schema").Struct<{
        readonly createdAt: typeof import("effect/Schema").DateTimeUtc;
        readonly updatedAt: typeof import("effect/Schema").DateTimeUtc;
        readonly id: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/PasskeyId">;
        readonly name: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly publicKey: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly credentialID: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly counter: import("effect/Schema").brand<import("effect/Schema").filter<import("effect/Schema").Schema<number, number, never>>, "@/primitives/PosInt">;
        readonly deviceType: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly backedUp: typeof import("effect/Schema").Boolean;
        readonly transports: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    }>;
    readonly jsonCreate: import("effect/Schema").Struct<{
        readonly name: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly publicKey: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly credentialID: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly counter: import("effect/Schema").brand<import("effect/Schema").filter<import("effect/Schema").Schema<number, number, never>>, "@/primitives/PosInt">;
        readonly deviceType: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly backedUp: typeof import("effect/Schema").Boolean;
        readonly transports: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    }>;
    readonly jsonUpdate: import("effect/Schema").Struct<{
        readonly name: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
        readonly publicKey: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly userId: import("effect/Schema").brand<import("effect/Schema").Schema.AnyNoContext, "@ye/entities/UserId">;
        readonly credentialID: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly counter: import("effect/Schema").brand<import("effect/Schema").filter<import("effect/Schema").Schema<number, number, never>>, "@/primitives/PosInt">;
        readonly deviceType: typeof import("effect/Schema").NonEmptyTrimmedString;
        readonly backedUp: typeof import("effect/Schema").Boolean;
        readonly transports: import("effect/Schema").NullOr<typeof import("effect/Schema").NonEmptyTrimmedString>;
    }>;
};
/**
 * @since 0.1.0
 * @category entities
 */
export declare class Passkey extends Passkey_base {
}
export {};
//# sourceMappingURL=Passkey.d.ts.map