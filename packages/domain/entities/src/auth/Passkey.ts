/**
 * @since 0.1.0
 * @category entities
 */
import ye from "@ye/primitives";
import * as S from "effect/Schema";
import { UserId } from "./User";
import { baseFields } from "../lib/utils";

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
export class Passkey extends S.Class<Passkey>("Passkey")({
  id: PasskeyId,
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
