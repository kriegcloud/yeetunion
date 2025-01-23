import * as S from "effect/Schema";
export declare const baseFields: {
    readonly createdAt: typeof S.Date;
    readonly updatedAt: S.NullOr<typeof S.Date>;
};
export declare const staticKeys: readonly ["id", "name", "email", "emailVerified", "image", "role", "banned", "banReason", "banExpires"];
type StaticKey = typeof staticKeys[number];
type BaseKey = keyof typeof baseFields;
export type Key = StaticKey | BaseKey;
export declare const Keys: Key[];
export declare const UserId: S.brand<S.Schema.AnyNoContext, "@ye/entities/UserId">;
export declare const UserDefinition: S.Struct<{
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/UserId">;
    name: typeof S.NonEmptyTrimmedString;
    email: S.filter<S.Schema<string, string, never>>;
    emailVerified: typeof S.Boolean;
    image: S.optional<S.NullishOr<typeof S.NonEmptyTrimmedString>>;
    role: S.NullOr<typeof S.NonEmptyTrimmedString>;
    banned: S.NullOr<typeof S.Boolean>;
    banReason: S.NullOr<typeof S.String>;
    banExpires: S.NullOr<typeof S.Date>;
    twoFactorEnabled: S.NullOr<typeof S.Boolean>;
    createdAt: typeof S.Date;
    updatedAt: typeof S.Date;
}>;
export declare const BetterAuthUser: S.mutable<S.Struct<{
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/UserId">;
    name: typeof S.NonEmptyTrimmedString;
    email: S.filter<S.Schema<string, string, never>>;
    emailVerified: typeof S.Boolean;
    image: S.optional<S.NullishOr<typeof S.NonEmptyTrimmedString>>;
    role: S.NullOr<typeof S.NonEmptyTrimmedString>;
    banned: S.NullOr<typeof S.Boolean>;
    banReason: S.NullOr<typeof S.String>;
    banExpires: S.NullOr<typeof S.Date>;
    twoFactorEnabled: S.NullOr<typeof S.Boolean>;
    createdAt: typeof S.Date;
    updatedAt: typeof S.Date;
}>>;
export type BetterAuthUser = typeof BetterAuthUser.Type;
export {};
//# sourceMappingURL=User.d.ts.map