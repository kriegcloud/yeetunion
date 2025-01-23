import * as S from "effect/Schema";
/**
 * @since 0.1.0
 * @category entities
 */
import ye from "@ye/primitives";
import { UserId } from "@/User";
/**
 * @since 0.1.0
 * @category entities
 */
export const OAuthAccessTokenId = /*#__PURE__*/ye.NonEmptyTrimStr.pipe(/*#__PURE__*/ye.Brand("@ye/entities/OAuthAccessTokenId"));
/**
 * @since 0.1.0
 * @category entities
 */
export class OAuthAccessToken extends /*#__PURE__*/S.Class("OAuthAccessToken")({
  id: OAuthAccessTokenId,
  accessToken: /*#__PURE__*/S.NullOr(ye.NonEmptyTrimStr),
  refreshToken: /*#__PURE__*/S.NullOr(ye.NonEmptyTrimStr),
  accessTokenExpiresAt: /*#__PURE__*/S.NullOr(ye.DateTime),
  refreshTokenExpiresAt: /*#__PURE__*/S.NullOr(ye.DateTime),
  clientId: /*#__PURE__*/S.NullOr(ye.NonEmptyTrimStr),
  userId: /*#__PURE__*/S.NullOr(UserId),
  scopes: /*#__PURE__*/S.NullOr(ye.NonEmptyTrimStr),
  createdAt: /*#__PURE__*/S.NullOr(ye.DateTime),
  updatedAt: /*#__PURE__*/S.NullOr(ye.DateTime)
}) {}
//# sourceMappingURL=OAuthAccessToken.js.map