import * as S from "effect/Schema";
/**
 * @since 0.1.0
 * @category entities
 */
export declare const InvitationId: S.brand<S.Schema.AnyNoContext, "@ye/entities/InvitationId">;
declare const Invitation_base: S.Class<Invitation, {
    createdAt: typeof S.Date;
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/InvitationId">;
    organizationId: S.brand<S.Schema.AnyNoContext, "@ye/entities/OrgId">;
    email: S.filter<S.Schema<string, string, never>>;
    role: typeof S.NonEmptyTrimmedString;
    status: typeof S.NonEmptyTrimmedString;
    expiresAt: typeof S.Date;
    inviterId: S.brand<S.Schema.AnyNoContext, "@ye/entities/UserId">;
}, S.Struct.Encoded<{
    createdAt: typeof S.Date;
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/InvitationId">;
    organizationId: S.brand<S.Schema.AnyNoContext, "@ye/entities/OrgId">;
    email: S.filter<S.Schema<string, string, never>>;
    role: typeof S.NonEmptyTrimmedString;
    status: typeof S.NonEmptyTrimmedString;
    expiresAt: typeof S.Date;
    inviterId: S.brand<S.Schema.AnyNoContext, "@ye/entities/UserId">;
}>, never, {
    readonly id: any;
} & {
    readonly email: string;
} & {
    readonly role: string;
} & {
    readonly createdAt: Date;
} & {
    readonly organizationId: any;
} & {
    readonly status: string;
} & {
    readonly expiresAt: Date;
} & {
    readonly inviterId: any;
}, {}, {}>;
/**
 * @since 0.1.0
 * @category entities
 */
export declare class Invitation extends Invitation_base {
}
export {};
//# sourceMappingURL=Invitation.d.ts.map