import * as S from "effect/Schema";
/**
 * @since 0.1.0
 * @category entities
 */
import ye from "@ye/primitives";
import {UserId} from "./User.js";

/**
 * @since 0.1.0
 * @category entities
 */
export const OAuthApplicationId = ye.NonEmptyTrimStr.pipe(
  ye.Brand("@ye/entities/OAuthApplicationId"),
);

/**
 * @since 0.1.0
 * @category entities
 */
export class OAuthApplication extends S.Class<OAuthApplication>("OAuthApplication")({
  id: OAuthApplicationId,
  name: S.NullOr(ye.NonEmptyTrimStr),
  icon: S.NullOr(ye.NonEmptyTrimStr),
  metadata: S.NullOr(ye.NonEmptyTrimStr),
  clientId: S.NullOr(ye.NonEmptyTrimStr),
  clientSecret: S.NullOr(ye.NonEmptyTrimStr),
  redirectURLs: S.NullOr(ye.NonEmptyTrimStr),
  type: S.NullOr(ye.NonEmptyTrimStr),
  disabled: S.NullOr(ye.Bool),
  userId: S.NullOr(UserId),
  createdAt: S.NullOr(ye.DateTime),
  updatedAt: S.NullOr(ye.DateTime),
}) {
}
