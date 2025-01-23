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
export const TwoFactorId = /*#__PURE__*/ye.NonEmptyTrimStr.pipe(/*#__PURE__*/ye.Brand("@ye/entities/TwoFactorId"));
/**
 * @since 0.1.0
 * @category entities
 */
export class TwoFactor extends /*#__PURE__*/S.Class("TwoFactor")({
  id: TwoFactorId,
  secret: ye.NonEmptyTrimStr,
  backupCodes: ye.NonEmptyTrimStr,
  userId: UserId
}) {}
//# sourceMappingURL=TwoFactor.js.map