import * as S from "effect/Schema";
/**
 * @since 0.1.0
 * @category entities
 */
export declare const JWKSId: S.brand<S.Schema.AnyNoContext, "@ye/entities/JWKSId">;
declare const JWKS_base: S.Class<JWKS, {
    createdAt: typeof S.Date;
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/JWKSId">;
    publicKey: typeof S.NonEmptyTrimmedString;
    privateKey: typeof S.NonEmptyTrimmedString;
}, S.Struct.Encoded<{
    createdAt: typeof S.Date;
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/JWKSId">;
    publicKey: typeof S.NonEmptyTrimmedString;
    privateKey: typeof S.NonEmptyTrimmedString;
}>, never, {
    readonly id: any;
} & {
    readonly createdAt: Date;
} & {
    readonly publicKey: string;
} & {
    readonly privateKey: string;
}, {}, {}>;
/**
 * @since 0.1.0
 * @category entities
 */
export declare class JWKS extends JWKS_base {
}
export {};
//# sourceMappingURL=JWKS.d.ts.map