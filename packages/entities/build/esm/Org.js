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
export const OrgId = /*#__PURE__*/ye.NonEmptyTrimStr.pipe(/*#__PURE__*/ye.Brand("@ye/entities/OrgId"));
/**
 * @since 0.1.0
 * @category entities
 */
export class Org extends /*#__PURE__*/S.Class("Org")({
  id: OrgId,
  name: ye.NonEmptyTrimStr,
  slug: /*#__PURE__*/ye.NonEmptyTrimStr.pipe(/*#__PURE__*/S.lowercased()),
  logo: /*#__PURE__*/S.optional(ye.URLOrNullish),
  metadata: /*#__PURE__*/S.optional(ye.Str),
  ...baseFields
}) {}
//# sourceMappingURL=Org.js.map