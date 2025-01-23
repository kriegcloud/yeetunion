import * as S from "effect/Schema";
/**
 * @since 0.1.0
 * @category entities
 */
import ye from "@ye/primitives";
import { OrgId } from "./Org.js";
import { UserId } from "./User.js";
import { baseFields } from "./lib/utils.js";
/**
 * @since 0.1.0
 * @category entities
 */
export const OrgMemberId = ye.NonEmptyTrimStr.pipe(
  ye.Brand("@ye/entities/OrgMemberId"),
);

/**
 * @since 0.1.0
 * @category entities
 */
export class OrgMember extends S.Class<OrgMember>("OrgMember")({
  id: OrgMemberId,
  organizationId: OrgId,
  userId: UserId,
  role: ye.NonEmptyTrimStr,
  ...baseFields,
}) {}
