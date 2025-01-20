/**
 * @since 0.1.0
 * @category entities
 */
import ye from "@ye/primitives";
import { Model } from "@effect/sql";
import { baseFields } from "./lib/utils.js";
import { UserId } from "./User.js";

/**
 * @since 0.1.0
 * @category entities
 */
export const AccountId = ye.NonEmptyTrimStr.pipe(ye.Brand("@ye/entities/AccountId"));

/**
 * @since 0.1.0
 * @category entities
 */
export class Account extends Model.Class<Account>("Account")({
  id: Model.GeneratedByApp(AccountId),
  accountId: ye.NonEmptyTrimStr,
  providerId: ye.NonEmptyTrimStr,
  userId: UserId,
  accessToken: ye.NonEmptyTrimStrOrNull,
  refreshToken: ye.NonEmptyTrimStrOrNull,
  idToken: ye.NonEmptyTrimStrOrNull,
  accessTokenExpiresAt: ye.DateTimeOrNull,
  refreshTokenExpiresAt: ye.DateTimeOrNull,
  scope: ye.NonEmptyTrimStrOrNull,
  password: Model.Sensitive(ye.NonEmptyTrimStrOrNull),
  ...baseFields,
}) {}