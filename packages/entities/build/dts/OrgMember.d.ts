import * as S from "effect/Schema";
/**
 * @since 0.1.0
 * @category entities
 */
export declare const OrgMemberId: S.brand<S.Schema.AnyNoContext, "@ye/entities/OrgMemberId">;
declare const OrgMember_base: S.Class<OrgMember, {
    createdAt: typeof S.Date;
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/OrgMemberId">;
    organizationId: S.brand<S.Schema.AnyNoContext, "@ye/entities/OrgId">;
    userId: S.brand<S.Schema.AnyNoContext, "@ye/entities/UserId">;
    role: typeof S.NonEmptyTrimmedString;
}, S.Struct.Encoded<{
    createdAt: typeof S.Date;
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/OrgMemberId">;
    organizationId: S.brand<S.Schema.AnyNoContext, "@ye/entities/OrgId">;
    userId: S.brand<S.Schema.AnyNoContext, "@ye/entities/UserId">;
    role: typeof S.NonEmptyTrimmedString;
}>, never, {
    readonly id: any;
} & {
    readonly role: string;
} & {
    readonly createdAt: Date;
} & {
    readonly userId: any;
} & {
    readonly organizationId: any;
}, {}, {}>;
/**
 * @since 0.1.0
 * @category entities
 */
export declare class OrgMember extends OrgMember_base {
}
export {};
//# sourceMappingURL=OrgMember.d.ts.map