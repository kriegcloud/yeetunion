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
export const JWKSId = ye.NonEmptyTrimStr.pipe(ye.Brand("@ye/entities/JWKSId"));

/**
 * @since 0.1.0
 * @category entities
 */
export class JWKS extends S.Class<JWKS>("JWKS")({
  id: JWKSId,
  publicKey: ye.NonEmptyTrimStr,
  privateKey: ye.NonEmptyTrimStr,
  ...baseFields,
}) {}
