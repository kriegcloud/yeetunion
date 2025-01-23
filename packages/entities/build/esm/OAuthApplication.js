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
export const OAuthApplicationId = /*#__PURE__*/ye.NonEmptyTrimStr.pipe(/*#__PURE__*/ye.Brand("@ye/entities/OAuthApplicationId"));
/**
 * @since 0.1.0
 * @category entities
 */
export class OAuthApplication extends /*#__PURE__*/S.Class("OAuthApplication")({
  id: OAuthApplicationId,
  name: /*#__PURE__*/S.NullOr(ye.NonEmptyTrimStr),
  icon: /*#__PURE__*/S.NullOr(ye.NonEmptyTrimStr),
  metadata: /*#__PURE__*/S.NullOr(ye.NonEmptyTrimStr),
  clientId: /*#__PURE__*/S.NullOr(ye.NonEmptyTrimStr),
  clientSecret: /*#__PURE__*/S.NullOr(ye.NonEmptyTrimStr),
  redirectURLs: /*#__PURE__*/S.NullOr(ye.NonEmptyTrimStr),
  type: /*#__PURE__*/S.NullOr(ye.NonEmptyTrimStr),
  disabled: /*#__PURE__*/S.NullOr(ye.Bool),
  userId: /*#__PURE__*/S.NullOr(UserId),
  createdAt: /*#__PURE__*/S.NullOr(ye.DateTime),
  updatedAt: /*#__PURE__*/S.NullOr(ye.DateTime)
}) {}
//# sourceMappingURL=OAuthApplication.js.map