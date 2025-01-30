/**
 * @since 0.1.0
 * @category entities
 */
import ye from "#primitives";
import * as S from "effect/Schema";
import { UserId } from "./User";
import { Brand } from "effect";
/**
 * @since 0.1.0
 * @category entities
 */
export type AccountId = Brand.Branded<string, "@ye/domain/entities/AccountId">
export const AccountId = Brand.nominal<AccountId>()

export const AccountIdFromString = ye.NonEmptyTrimStr.pipe(
  S.fromBrand(AccountId)
);

/**
 * @since 0.1.0
 * @category entities
 */
export class Account extends S.Class<Account>("Account")({
  id: AccountIdFromString,
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
