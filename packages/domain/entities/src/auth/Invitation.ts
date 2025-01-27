/**
 * @since 0.1.0
 * @category entities
 */
import ye from "@ye/primitives";
import * as S from "effect/Schema";
import { OrgId } from "./Org";
import { UserId } from "./User";
import { baseFields } from "../lib/utils";
/**
 * @since 0.1.0
 * @category entities
 */
export const InvitationId = ye.NonEmptyTrimStr.pipe(
  ye.Brand("@ye/entities/InvitationId"),
);

/**
 * @since 0.1.0
 * @category entities
 */
export class Invitation extends S.Class<Invitation>("Invitation")({
  id: InvitationId,
  organizationId: OrgId,
  email: ye.Email,
  role: ye.NonEmptyTrimStr,
  status: ye.NonEmptyTrimStr,
  expiresAt: ye.DateTime,
  inviterId: UserId,
  ...baseFields,
}) {}
