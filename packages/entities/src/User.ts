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
export const UserId = ye.NonEmptyTrimStr.pipe(ye.Brand("@ye/entities/UserId"));

/**
 * @since 0.1.0
 * @category entities
 */
export class User extends Model.Class<User>("User")({
  id: Model.GeneratedByApp(UserId),
  name: ye.NonEmptyTrimStr,
  email: ye.Email,
  emailVerified: ye.Bool,
  image: ye.NonEmptyTrimStrOrNull,
  role: ye.NonEmptyTrimStrOrNull,
  banned: ye.BoolOrNull,
  banReason: ye.StrOrNull,
  banExpires: ye.DateTimeOrNull,
  ...baseFields,
}) {}
