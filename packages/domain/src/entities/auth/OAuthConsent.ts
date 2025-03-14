/**
 * @since 0.1.0
 * @category entities
 */
import ye from "#primitives";
import * as S from "effect/Schema";
import { UserId } from "./User";

/**
 * @since 0.1.0
 * @category entities
 */
export const OAuthConsentId = ye.NonEmptyTrimStr.pipe(
  ye.Brand("@ye/domain/entities/OAuthConsentId"),
);

/**
 * @since 0.1.0
 * @category entities
 */
export class OAuthConsent extends S.Class<OAuthConsent>("OAuthConsent")({
  id: OAuthConsentId,
  clientId: S.NullOr(ye.NonEmptyTrimStrOrNull),
  userId: S.NullOr(UserId),
  scopes: S.NullOr(ye.NonEmptyTrimStrOrNull),
  createdAt: S.NullOr(ye.DateTime),
  updatedAt: S.NullOr(ye.DateTime),
  consentGiven: S.NullOr(ye.Bool),
}) {}
