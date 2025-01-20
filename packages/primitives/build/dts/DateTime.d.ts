/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
/**
 * @category primitives
 * @since 0.1.0
 */
declare const _default: {
    DateTime: typeof S.Date;
    DateTimeOrNull: S.NullOr<typeof S.Date>;
    DateTimeOrUndefined: S.UndefinedOr<typeof S.Date>;
    DateTimeOptional: S.optional<typeof S.Date>;
    DateTimeOrNullish: S.NullishOr<typeof S.Date>;
    DateTimeWithDefault: (value: Date) => S.PropertySignature<":", Date, never, ":", string, true, never>;
};
export default _default;
//# sourceMappingURL=DateTime.d.ts.map