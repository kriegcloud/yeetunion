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
export const JWKSId = ye.NonEmptyTrimStr.pipe(ye.Brand("@ye/domain/entities/JWKSId"));

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
