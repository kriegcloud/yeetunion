import { Model } from "@effect/sql";
/**
 * @since 0.1.0
 * @category entities
 */
import ye from "@ye/primitives";
import { UserId } from "./User.js";
import { baseFields } from "./lib/utils.js";

/**
 * @since 0.1.0
 * @category entities
 */
export const PasskeyId = ye.NonEmptyTrimStr.pipe(
  ye.Brand("@ye/entities/PasskeyId"),
);

/**
 * @since 0.1.0
 * @category entities
 */
export class Passkey extends Model.Class<Passkey>("Passkey")({
  id: Model.GeneratedByApp(PasskeyId),
  name: ye.NonEmptyTrimStrOrNull,
  publicKey: ye.NonEmptyTrimStr,
  userId: UserId,
  credentialID: ye.NonEmptyTrimStr,
  counter: ye.PosInt,
  deviceType: ye.NonEmptyTrimStr,
  backedUp: ye.Bool,
  transports: ye.NonEmptyTrimStrOrNull,
  ...baseFields,
}) {}
