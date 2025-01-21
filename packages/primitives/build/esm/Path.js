/**
 * @since 0.1.0
 * @category primitives
 */
import { Schema as S } from "effect";
import { NonEmptyTrimStr } from "./NonEmptyStr.js";
/**
 * @since 0.1.0
 * @category primitives
 */
export const NextPath = /*#__PURE__*/NonEmptyTrimStr.pipe(/*#__PURE__*/S.startsWith("/"), /*#__PURE__*/S.brand("@ye/primitives/NextPath"));
/**
 * @since 0.1.0
 * @category primitives
 */
export default {
  NextPath
};
//# sourceMappingURL=Path.js.map