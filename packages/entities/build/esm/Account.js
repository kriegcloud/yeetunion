import * as S from "effect/Schema";
/**
 * @since 0.1.0
 * @category entities
 */
import ye from "@ye/primitives";
import { UserId } from "./User.js";
/**
 * @since 0.1.0
 * @category entities
 */
export const AccountId = /*#__PURE__*/ye.NonEmptyTrimStr.pipe(/*#__PURE__*/ye.Brand("@ye/entities/AccountId"));
/**
 * @since 0.1.0
 * @category entities
 */
export class Account extends /*#__PURE__*/S.Class("Account")({
  id: AccountId,
  accountId: ye.NonEmptyTrimStr,
  providerId: ye.NonEmptyTrimStr,
  userId: UserId,
  accessToken: ye.NonEmptyTrimStrOrNull,
  refreshToken: ye.NonEmptyTrimStrOrNull,
  idToken: ye.NonEmptyTrimStrOrNull,
  accessTokenExpiresAt: ye.DateTimeOrNull,
  refreshTokenExpiresAt: ye.DateTimeOrNull,
  scope: ye.NonEmptyTrimStrOrNull,
  password: ye.NonEmptyTrimStrOrNull,
  createdAt: ye.DateTime,
  updatedAt: ye.DateTime
}) {}
//# sourceMappingURL=Account.js.map