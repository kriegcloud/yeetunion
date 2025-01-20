/**
 * @since 0.1.0
 * @category entities
 */
import ye from "@ye/primitives";
import { Model } from "@effect/sql";
import { baseFields } from "./lib/utils.js";
import { OrgId } from "./Org.js";
import {UserId} from "./User.js";
/**
 * @since 0.1.0
 * @category entities
 */
export const OrgMemberId = ye.NonEmptyTrimStr.pipe(ye.Brand("@ye/entities/OrgMemberId"));

/**
 * @since 0.1.0
 * @category entities
 */
export class OrgMember extends Model.Class<OrgMember>("OrgMember")({
  id: Model.GeneratedByApp(OrgMemberId),
  organizationId: OrgId,
  userId: UserId,
  role: ye.NonEmptyTrimStr,
  ...baseFields,
}) {}