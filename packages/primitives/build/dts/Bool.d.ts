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
    Bool: typeof S.Boolean;
    BoolOrNull: S.NullOr<typeof S.Boolean>;
    BoolOrUndefined: S.UndefinedOr<typeof S.Boolean>;
    BoolOrNullish: S.NullishOr<typeof S.Boolean>;
    BoolOptional: S.optional<typeof S.Boolean>;
    BoolWithDefault: (value: boolean) => S.PropertySignature<":", boolean, never, ":", boolean, true, never>;
};
export default _default;
//# sourceMappingURL=Bool.d.ts.map