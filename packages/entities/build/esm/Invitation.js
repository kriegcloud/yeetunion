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
export const InvitationId = /*#__PURE__*/ye.NonEmptyTrimStr.pipe(/*#__PURE__*/ye.Brand("@ye/entities/InvitationId"));
/**
 * @since 0.1.0
 * @category entities
 */
export class Invitation extends /*#__PURE__*/S.Class("Invitation")({
  id: InvitationId,
  organizationId: OrgId,
  email: ye.Email,
  role: ye.NonEmptyTrimStr,
  status: ye.NonEmptyTrimStr,
  expiresAt: ye.DateTime,
  inviterId: UserId,
  ...baseFields
}) {}
//# sourceMappingURL=Invitation.js.map