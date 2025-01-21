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
export const OrgId = /*#__PURE__*/ye.NonEmptyTrimStr.pipe(/*#__PURE__*/ye.Brand("@ye/entities/OrgId"));
/**
 * @since 0.1.0
 * @category entities
 */
export class Org extends /*#__PURE__*/Model.Class("Org")({
  id: /*#__PURE__*/Model.GeneratedByApp(OrgId),
  name: ye.NonEmptyTrimStr,
  slug: /*#__PURE__*/ye.NonEmptyTrimStr.pipe(/*#__PURE__*/S.lowercased()),
  logo: ye.URL,
  metadata: ye.Str,
  ...baseFields
}) {}
//# sourceMappingURL=Org.js.map