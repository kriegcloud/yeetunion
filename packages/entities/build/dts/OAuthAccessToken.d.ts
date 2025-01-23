import * as S from "effect/Schema";
/**
 * @since 0.1.0
 * @category entities
 */
export declare const OAuthAccessTokenId: S.brand<S.Schema.AnyNoContext, "@ye/entities/OAuthAccessTokenId">;
declare const OAuthAccessToken_base: S.Class<OAuthAccessToken, {
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/OAuthAccessTokenId">;
    accessToken: S.NullOr<typeof S.NonEmptyTrimmedString>;
    refreshToken: S.NullOr<typeof S.NonEmptyTrimmedString>;
    accessTokenExpiresAt: S.NullOr<typeof S.Date>;
    refreshTokenExpiresAt: S.NullOr<typeof S.Date>;
    clientId: S.NullOr<typeof S.NonEmptyTrimmedString>;
    userId: S.NullOr<S.brand<S.Schema.AnyNoContext, "@ye/entities/UserId">>;
    scopes: S.NullOr<typeof S.NonEmptyTrimmedString>;
    createdAt: S.NullOr<typeof S.Date>;
    updatedAt: S.NullOr<typeof S.Date>;
}, S.Struct.Encoded<{
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/OAuthAccessTokenId">;
    accessToken: S.NullOr<typeof S.NonEmptyTrimmedString>;
    refreshToken: S.NullOr<typeof S.NonEmptyTrimmedString>;
    accessTokenExpiresAt: S.NullOr<typeof S.Date>;
    refreshTokenExpiresAt: S.NullOr<typeof S.Date>;
    clientId: S.NullOr<typeof S.NonEmptyTrimmedString>;
    userId: S.NullOr<S.brand<S.Schema.AnyNoContext, "@ye/entities/UserId">>;
    scopes: S.NullOr<typeof S.NonEmptyTrimmedString>;
    createdAt: S.NullOr<typeof S.Date>;
    updatedAt: S.NullOr<typeof S.Date>;
}>, never, {
    readonly id: any;
} & {
    readonly createdAt: Date | null;
} & {
    readonly updatedAt: Date | null;
} & {
    readonly userId: any;
} & {
    readonly accessToken: string | null;
} & {
    readonly refreshToken: string | null;
} & {
    readonly accessTokenExpiresAt: Date | null;
} & {
    readonly refreshTokenExpiresAt: Date | null;
} & {
    readonly clientId: string | null;
} & {
    readonly scopes: string | null;
}, {}, {}>;
/**
 * @since 0.1.0
 * @category entities
 */
export declare class OAuthAccessToken extends OAuthAccessToken_base {
}
export {};
//# sourceMappingURL=OAuthAccessToken.d.ts.map