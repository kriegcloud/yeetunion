/**
 * @since 0.1.0
 * @category entities
 */
import ye from "@ye/primitives";
import * as S from "effect/Schema";
import { UserId } from "./User";
import { baseFields } from "./lib/utils";

/**
 * @since 0.1.0
 * @category entities
 */
export const SessionId = ye.NonEmptyTrimStr.pipe(
  ye.Brand("@ye/entities/SessionId"),
);

/**
 * @since 0.1.0
 * @category entities
 */
export class Session extends S.Class<Session>("Session")({
  id: SessionId,
  expiresAt: ye.DateTimeOrNull,
  token: ye.NonEmptyTrimStr,
  ipAddress: ye.IPOrNull,
  userAgent: ye.NonEmptyTrimStrOrNull,
  userId: UserId,
  impersonatedBy: ye.NonEmptyTrimStrOrNull,
  activeOrganizationId: ye.NonEmptyTrimStrOrNull,
  ...baseFields,
}) {}
