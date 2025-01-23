import * as S from "effect/Schema";
/**
 * @since 0.1.0
 * @category entities
 */
export declare const SessionId: S.brand<S.Schema.AnyNoContext, "@ye/entities/SessionId">;
declare const Session_base: S.Class<Session, {
    createdAt: typeof S.Date;
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/SessionId">;
    expiresAt: S.NullOr<typeof S.Date>;
    token: typeof S.NonEmptyTrimmedString;
    ipAddress: S.NullOr<S.filter<S.Schema<string, string, never>>>;
    userAgent: S.NullOr<typeof S.NonEmptyTrimmedString>;
    userId: S.brand<S.Schema.AnyNoContext, "@ye/entities/UserId">;
    impersonatedBy: S.NullOr<typeof S.NonEmptyTrimmedString>;
    activeOrganizationId: S.NullOr<typeof S.NonEmptyTrimmedString>;
}, S.Struct.Encoded<{
    createdAt: typeof S.Date;
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/SessionId">;
    expiresAt: S.NullOr<typeof S.Date>;
    token: typeof S.NonEmptyTrimmedString;
    ipAddress: S.NullOr<S.filter<S.Schema<string, string, never>>>;
    userAgent: S.NullOr<typeof S.NonEmptyTrimmedString>;
    userId: S.brand<S.Schema.AnyNoContext, "@ye/entities/UserId">;
    impersonatedBy: S.NullOr<typeof S.NonEmptyTrimmedString>;
    activeOrganizationId: S.NullOr<typeof S.NonEmptyTrimmedString>;
}>, never, {
    readonly id: any;
} & {
    readonly createdAt: Date;
} & {
    readonly userId: any;
} & {
    readonly expiresAt: Date | null;
} & {
    readonly token: string;
} & {
    readonly ipAddress: string | null;
} & {
    readonly userAgent: string | null;
} & {
    readonly impersonatedBy: string | null;
} & {
    readonly activeOrganizationId: string | null;
}, {}, {}>;
/**
 * @since 0.1.0
 * @category entities
 */
export declare class Session extends Session_base {
}
export {};
//# sourceMappingURL=Session.d.ts.map