import { Model } from "@effect/sql";
/**
 * @since 0.1.0
 * @category entities
 */
import ye from "@ye/primitives";
import { UserId } from "./User.js";
import { baseFields } from "./lib/utils.js";
/**
 * @since 0.1.0
 * @category entities
 */
export const SessionId = /*#__PURE__*/ye.NonEmptyTrimStr.pipe(/*#__PURE__*/ye.Brand("@ye/entities/SessionId"));
/**
 * @since 0.1.0
 * @category entities
 */
export class Session extends /*#__PURE__*/Model.Class("Session")({
  id: /*#__PURE__*/Model.GeneratedByApp(SessionId),
  expiresAt: ye.DateTimeOrNull,
  token: ye.NonEmptyTrimStr,
  ipAddress: ye.IPOrNull,
  userAgent: ye.NonEmptyTrimStrOrNull,
  userId: UserId,
  impersonatedBy: ye.NonEmptyTrimStrOrNull,
  activeOrganizationId: ye.NonEmptyTrimStrOrNull,
  ...baseFields
}) {}
//# sourceMappingURL=Session.js.map