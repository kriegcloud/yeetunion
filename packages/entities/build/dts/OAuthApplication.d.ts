import * as S from "effect/Schema";
/**
 * @since 0.1.0
 * @category entities
 */
export declare const OAuthApplicationId: S.brand<S.Schema.AnyNoContext, "@ye/entities/OAuthApplicationId">;
declare const OAuthApplication_base: S.Class<OAuthApplication, {
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/OAuthApplicationId">;
    name: S.NullOr<typeof S.NonEmptyTrimmedString>;
    icon: S.NullOr<typeof S.NonEmptyTrimmedString>;
    metadata: S.NullOr<typeof S.NonEmptyTrimmedString>;
    clientId: S.NullOr<typeof S.NonEmptyTrimmedString>;
    clientSecret: S.NullOr<typeof S.NonEmptyTrimmedString>;
    redirectURLs: S.NullOr<typeof S.NonEmptyTrimmedString>;
    type: S.NullOr<typeof S.NonEmptyTrimmedString>;
    disabled: S.NullOr<typeof S.Boolean>;
    userId: S.NullOr<S.brand<S.Schema.AnyNoContext, "@ye/entities/UserId">>;
    createdAt: S.NullOr<typeof S.Date>;
    updatedAt: S.NullOr<typeof S.Date>;
}, S.Struct.Encoded<{
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/OAuthApplicationId">;
    name: S.NullOr<typeof S.NonEmptyTrimmedString>;
    icon: S.NullOr<typeof S.NonEmptyTrimmedString>;
    metadata: S.NullOr<typeof S.NonEmptyTrimmedString>;
    clientId: S.NullOr<typeof S.NonEmptyTrimmedString>;
    clientSecret: S.NullOr<typeof S.NonEmptyTrimmedString>;
    redirectURLs: S.NullOr<typeof S.NonEmptyTrimmedString>;
    type: S.NullOr<typeof S.NonEmptyTrimmedString>;
    disabled: S.NullOr<typeof S.Boolean>;
    userId: S.NullOr<S.brand<S.Schema.AnyNoContext, "@ye/entities/UserId">>;
    createdAt: S.NullOr<typeof S.Date>;
    updatedAt: S.NullOr<typeof S.Date>;
}>, never, {
    readonly id: any;
} & {
    readonly name: string | null;
} & {
    readonly createdAt: Date | null;
} & {
    readonly updatedAt: Date | null;
} & {
    readonly userId: any;
} & {
    readonly clientId: string | null;
} & {
    readonly icon: string | null;
} & {
    readonly metadata: string | null;
} & {
    readonly clientSecret: string | null;
} & {
    readonly redirectURLs: string | null;
} & {
    readonly type: string | null;
} & {
    readonly disabled: boolean | null;
}, {}, {}>;
/**
 * @since 0.1.0
 * @category entities
 */
export declare class OAuthApplication extends OAuthApplication_base {
}
export {};
//# sourceMappingURL=OAuthApplication.d.ts.map