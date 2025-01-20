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
export const InvitationId = ye.NonEmptyTrimStr.pipe(ye.Brand("@ye/entities/InvitationId"));

/**
 * @since 0.1.0
 * @category entities
 */
export class Invitation extends Model.Class<Invitation>("Invitation")({
  id: Model.GeneratedByApp(InvitationId),
  organizationId: OrgId,
  email: ye.Email,
  role: ye.NonEmptyTrimStr,
  status: ye.NonEmptyTrimStr,
  expiresAt: ye.DateTime,
  inviterId: UserId,
  ...baseFields,
}) {}