import * as S from "effect/Schema";
/**
 * @since 0.1.0
 * @category entities
 */
export declare const OAuthConsentId: S.brand<S.Schema.AnyNoContext, "@ye/entities/OAuthConsentId">;
declare const OAuthConsent_base: S.Class<OAuthConsent, {
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/OAuthConsentId">;
    clientId: S.NullOr<S.NullOr<typeof S.NonEmptyTrimmedString>>;
    userId: S.NullOr<S.brand<S.Schema.AnyNoContext, "@ye/entities/UserId">>;
    scopes: S.NullOr<S.NullOr<typeof S.NonEmptyTrimmedString>>;
    createdAt: S.NullOr<typeof S.Date>;
    updatedAt: S.NullOr<typeof S.Date>;
    consentGiven: S.NullOr<typeof S.Boolean>;
}, S.Struct.Encoded<{
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/OAuthConsentId">;
    clientId: S.NullOr<S.NullOr<typeof S.NonEmptyTrimmedString>>;
    userId: S.NullOr<S.brand<S.Schema.AnyNoContext, "@ye/entities/UserId">>;
    scopes: S.NullOr<S.NullOr<typeof S.NonEmptyTrimmedString>>;
    createdAt: S.NullOr<typeof S.Date>;
    updatedAt: S.NullOr<typeof S.Date>;
    consentGiven: S.NullOr<typeof S.Boolean>;
}>, never, {
    readonly id: any;
} & {
    readonly createdAt: Date | null;
} & {
    readonly updatedAt: Date | null;
} & {
    readonly userId: any;
} & {
    readonly clientId: string | null;
} & {
    readonly scopes: string | null;
} & {
    readonly consentGiven: boolean | null;
}, {}, {}>;
/**
 * @since 0.1.0
 * @category entities
 */
export declare class OAuthConsent extends OAuthConsent_base {
}
export {};
//# sourceMappingURL=OAuthConsent.d.ts.map