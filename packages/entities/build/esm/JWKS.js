import { Model } from "@effect/sql";
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
export class JWKS extends /*#__PURE__*/Model.Class("JWKS")({
  id: /*#__PURE__*/Model.GeneratedByApp(JWKSId),
  publicKey: ye.NonEmptyTrimStr,
  privateKey: /*#__PURE__*/Model.Sensitive(ye.NonEmptyTrimStr),
  ...baseFields
}) {}
//# sourceMappingURL=JWKS.js.map