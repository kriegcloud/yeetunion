import * as S from "effect/Schema";
/**
 * @since 0.1.0
 * @category entities
 */
import ye from "@ye/primitives";
import { baseFields } from "./lib/utils.js";
/**
 * @since 0.1.0
 * @category entities
 */
export const JWKSId = /*#__PURE__*/ye.NonEmptyTrimStr.pipe(/*#__PURE__*/ye.Brand("@ye/entities/JWKSId"));
/**
 * @since 0.1.0
 * @category entities
 */
export class JWKS extends /*#__PURE__*/S.Class("JWKS")({
  id: JWKSId,
  publicKey: ye.NonEmptyTrimStr,
  privateKey: ye.NonEmptyTrimStr,
  ...baseFields
}) {}
//# sourceMappingURL=JWKS.js.map