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
export const VerificationId = /*#__PURE__*/ye.NonEmptyTrimStr.pipe(/*#__PURE__*/ye.Brand("@ye/entities/VerificationId"));
/**
 * @since 0.1.0
 * @category entities
 */
export class Verification extends /*#__PURE__*/Model.Class("Verification")({
  id: /*#__PURE__*/Model.GeneratedByApp(VerificationId),
  identifier: ye.NonEmptyTrimStr,
  value: ye.NonEmptyTrimStr,
  expiresAt: ye.DateTime,
  ...baseFields
}) {}
//# sourceMappingURL=Verification.js.map