import { Model } from "@effect/sql";
/**
 * @since 0.1.0
 * @category entities
 */
import ye from "@ye/primitives";
import { baseFields } from "./lib/utils.js";
/**
 * @since 0.1.0
 * @category entities
 */
export const UserId = /*#__PURE__*/ye.NonEmptyTrimStr.pipe(/*#__PURE__*/ye.Brand("@ye/entities/UserId"));
/**
 * @since 0.1.0
 * @category entities
 */
export class User extends /*#__PURE__*/Model.Class("User")({
  id: /*#__PURE__*/Model.GeneratedByApp(UserId),
  name: ye.NonEmptyTrimStr,
  email: ye.Email,
  emailVerified: ye.Bool,
  image: ye.NonEmptyTrimStrOrNull,
  role: ye.NonEmptyTrimStrOrNull,
  banned: ye.BoolOrNull,
  banReason: ye.StrOrNull,
  banExpires: ye.DateTimeOrNull,
  ...baseFields
}) {}
//# sourceMappingURL=User.js.map