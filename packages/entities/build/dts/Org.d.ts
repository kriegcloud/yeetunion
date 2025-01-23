import * as S from "effect/Schema";
/**
 * @since 0.1.0
 * @category entities
 */
export declare const OrgId: S.brand<S.Schema.AnyNoContext, "@ye/entities/OrgId">;
declare const Org_base: S.Class<Org, {
    createdAt: typeof S.Date;
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/OrgId">;
    name: typeof S.NonEmptyTrimmedString;
    slug: S.filter<S.Schema<string, string, never>>;
    logo: S.optional<S.NullishOr<S.filter<S.Schema<string, string, never>>>>;
    metadata: S.optional<typeof S.String>;
}, S.Struct.Encoded<{
    createdAt: typeof S.Date;
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/OrgId">;
    name: typeof S.NonEmptyTrimmedString;
    slug: S.filter<S.Schema<string, string, never>>;
    logo: S.optional<S.NullishOr<S.filter<S.Schema<string, string, never>>>>;
    metadata: S.optional<typeof S.String>;
}>, never, {
    readonly id: any;
} & {
    readonly name: string;
} & {
    readonly slug: string;
} & {
    readonly logo?: string | null | undefined;
} & {
    readonly metadata?: string | undefined;
} & {
    readonly createdAt: Date;
}, {}, {}>;
/**
 * @since 0.1.0
 * @category entities
 */
export declare class Org extends Org_base {
}
export {};
//# sourceMappingURL=Org.d.ts.map