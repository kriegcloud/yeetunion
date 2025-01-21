import { Schema as S } from "effect";
/**
 * @category primitives
 * @since 0.1.0
 */
import { NonEmptyTrimStr } from "./NonEmptyStr.js";
/**
 * @category primitives
 * @since 0.1.0
 */
export const Hex = /*#__PURE__*/NonEmptyTrimStr.pipe(/*#__PURE__*/S.pattern(/^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6}|[a-fA-F0-9]{4}|[a-fA-F0-9]{8})$/));
/**
 * @category primitives
 * @since 0.1.0
 */
export default {
  Hex
};
//# sourceMappingURL=Hex.js.map