import * as S from "effect/Schema";
/**
 * @since 0.1.0
 * @category entities
 */
export declare const PasskeyId: S.brand<S.Schema.AnyNoContext, "@ye/entities/PasskeyId">;
declare const Passkey_base: S.Class<Passkey, {
    createdAt: typeof S.Date;
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/PasskeyId">;
    name: S.NullOr<typeof S.NonEmptyTrimmedString>;
    publicKey: typeof S.NonEmptyTrimmedString;
    userId: S.brand<S.Schema.AnyNoContext, "@ye/entities/UserId">;
    credentialID: typeof S.NonEmptyTrimmedString;
    counter: S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosInt">;
    deviceType: typeof S.NonEmptyTrimmedString;
    backedUp: typeof S.Boolean;
    transports: S.NullOr<typeof S.NonEmptyTrimmedString>;
}, S.Struct.Encoded<{
    createdAt: typeof S.Date;
    id: S.brand<S.Schema.AnyNoContext, "@ye/entities/PasskeyId">;
    name: S.NullOr<typeof S.NonEmptyTrimmedString>;
    publicKey: typeof S.NonEmptyTrimmedString;
    userId: S.brand<S.Schema.AnyNoContext, "@ye/entities/UserId">;
    credentialID: typeof S.NonEmptyTrimmedString;
    counter: S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosInt">;
    deviceType: typeof S.NonEmptyTrimmedString;
    backedUp: typeof S.Boolean;
    transports: S.NullOr<typeof S.NonEmptyTrimmedString>;
}>, never, {
    readonly id: any;
} & {
    readonly name: string | null;
} & {
    readonly createdAt: Date;
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
}, {}, {}>;
/**
 * @since 0.1.0
 * @category entities
 */
export declare class Passkey extends Passkey_base {
}
export {};
//# sourceMappingURL=Passkey.d.ts.map