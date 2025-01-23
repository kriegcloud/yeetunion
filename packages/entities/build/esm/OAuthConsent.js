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
export const OAuthConsentId = /*#__PURE__*/ye.NonEmptyTrimStr.pipe(/*#__PURE__*/ye.Brand("@ye/entities/OAuthConsentId"));
/**
 * @since 0.1.0
 * @category entities
 */
export class OAuthConsent extends /*#__PURE__*/S.Class("OAuthConsent")({
  id: OAuthConsentId,
  clientId: /*#__PURE__*/S.NullOr(ye.NonEmptyTrimStrOrNull),
  userId: /*#__PURE__*/S.NullOr(UserId),
  scopes: /*#__PURE__*/S.NullOr(ye.NonEmptyTrimStrOrNull),
  createdAt: /*#__PURE__*/S.NullOr(ye.DateTime),
  updatedAt: /*#__PURE__*/S.NullOr(ye.DateTime),
  consentGiven: /*#__PURE__*/S.NullOr(ye.Bool)
}) {}
//# sourceMappingURL=OAuthConsent.js.map