import * as S from "effect/Schema";
/**
 * @since 0.1.0
 * @category entities
 */
import ye from "@ye/primitives";
import {UserId} from "@/User";

/**
 * @since 0.1.0
 * @category entities
 */
export const OAuthAccessTokenId = ye.NonEmptyTrimStr.pipe(ye.Brand("@ye/entities/OAuthAccessTokenId"));

/**
 * @since 0.1.0
 * @category entities
 */
export class OAuthAccessToken extends S.Class<OAuthAccessToken>("OAuthAccessToken")({
  id: OAuthAccessTokenId,
  accessToken: S.NullOr(ye.NonEmptyTrimStr),
  refreshToken: S.NullOr(ye.NonEmptyTrimStr),
  accessTokenExpiresAt: S.NullOr(ye.DateTime),
  refreshTokenExpiresAt: S.NullOr(ye.DateTime),
  clientId: S.NullOr(ye.NonEmptyTrimStr),
  userId: S.NullOr(UserId),
  scopes: S.NullOr(ye.NonEmptyTrimStr),
  createdAt: S.NullOr(ye.DateTime),
  updatedAt: S.NullOr(ye.DateTime),
}) {}
