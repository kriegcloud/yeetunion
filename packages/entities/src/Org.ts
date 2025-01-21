import { Model } from "@effect/sql";
/**
 * @since 0.1.0
 * @category entities
 */
import ye from "@ye/primitives";
import { Schema as S } from "effect";
import { baseFields } from "./lib/utils.js";
/**
 * @since 0.1.0
 * @category entities
 */
export const OrgId = ye.NonEmptyTrimStr.pipe(ye.Brand("@ye/entities/OrgId"));

/**
 * @since 0.1.0
 * @category entities
 */
export class Org extends Model.Class<Org>("Org")({
  id: Model.GeneratedByApp(OrgId),
  name: ye.NonEmptyTrimStr,
  slug: ye.NonEmptyTrimStr.pipe(S.lowercased()),
  logo: ye.URL,
  metadata: ye.Str,
  ...baseFields,
}) {}
