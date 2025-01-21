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
export const VerificationId = ye.NonEmptyTrimStr.pipe(
  ye.Brand("@ye/entities/VerificationId"),
);

/**
 * @since 0.1.0
 * @category entities
 */
export class Verification extends Model.Class<Verification>("Verification")({
  id: Model.GeneratedByApp(VerificationId),
  identifier: ye.NonEmptyTrimStr,
  value: ye.NonEmptyTrimStr,
  expiresAt: ye.DateTime,
  ...baseFields,
}) {}
