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
export const JWKSId = ye.NonEmptyTrimStr.pipe(ye.Brand("@ye/entities/JWKSId"));

/**
 * @since 0.1.0
 * @category entities
 */
export class JWKS extends Model.Class<JWKS>("JWKS")({
  id: Model.GeneratedByApp(JWKSId),
  publicKey: ye.NonEmptyTrimStr,
  privateKey: Model.Sensitive(ye.NonEmptyTrimStr),
  ...baseFields,
}) {}
