/**
 * @since 0.1.0
 * @category entities
 */
import ye from "@ye/primitives";
import * as S from "effect/Schema";
import { baseFields } from "../lib/utils";
/**
 * @since 0.1.0
 * @category entities
 */
export const OrgId = ye.NonEmptyTrimStr.pipe(ye.Brand("@ye/entities/OrgId"));

/**
 * @since 0.1.0
 * @category entities
 */
export class Org extends S.Class<Org>("Org")({
  id: OrgId,
  name: ye.NonEmptyTrimStr,
  slug: ye.NonEmptyTrimStr.pipe(S.lowercased()),
  logo: S.optional(ye.URLOrNullish),
  metadata: S.optional(ye.Str),
  ...baseFields,
}) {}
