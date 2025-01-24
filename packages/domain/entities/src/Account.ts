import * as S from "effect/Schema";
/**
 * @since 0.1.0
 * @category entities
 */
import ye from "@ye/primitives";
import { UserId } from "./User";

/**
 * @since 0.1.0
 * @category entities
 */
export const AccountId = ye.NonEmptyTrimStr.pipe(
  ye.Brand("@ye/entities/AccountId"),
);

/**
 * @since 0.1.0
 * @category entities
 */
export class Account extends S.Class<Account>("Account")({
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
  updatedAt: ye.DateTime,
}) {}
