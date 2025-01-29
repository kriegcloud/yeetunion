/**
 * @since 0.1.0
 * @category entities
 */
import ye from "#primitives";
import * as S from "effect/Schema";
import { baseFields } from "../lib/utils";
/**
 * @since 0.1.0
 * @category entities
 */
export const VerificationId = ye.NonEmptyTrimStr.pipe(
  ye.Brand("@ye/domain/entities/VerificationId"),
);

/**
 * @since 0.1.0
 * @category entities
 */
export class Verification extends S.Class<Verification>("Verification")({
  id: VerificationId,
  identifier: ye.NonEmptyTrimStr,
  value: ye.NonEmptyTrimStr,
  expiresAt: ye.DateTime,
  ...baseFields,
}) {}
