import * as S from "effect/Schema";
/**
 * @since 0.1.0
 * @category entities
 */
import ye from "@ye/primitives";
import {UserId} from "./User";

/**
 * @since 0.1.0
 * @category entities
 */
export const TwoFactorId = ye.NonEmptyTrimStr.pipe(
  ye.Brand("@ye/entities/TwoFactorId"),
);

/**
 * @since 0.1.0
 * @category entities
 */
export class TwoFactor extends S.Class<TwoFactor>("TwoFactor")({
  id: TwoFactorId,
  secret: ye.NonEmptyTrimStr,
  backupCodes: ye.NonEmptyTrimStr,
  userId: UserId,
}) {
}
