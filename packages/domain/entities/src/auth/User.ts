import ye from "@ye/primitives";
import * as S from "effect/Schema";

// 5) Define your S.Struct
export const UserId = ye.NonEmptyTrimStr.pipe(ye.Brand("@ye/entities/UserId"));
export const UserDefinition = S.Struct({
  id: UserId,
  name: ye.NonEmptyTrimStr,
  email: ye.Email,
  emailVerified: ye.Bool,
  image: S.optional(ye.NonEmptyTrimStrOrNullish),
  role: ye.NonEmptyTrimStrOrNull,
  banned: ye.BoolOrNull,
  banReason: ye.StrOrNull,
  banExpires: ye.DateTimeOrNull,
  twoFactorEnabled: ye.BoolOrNull,
  createdAt: ye.DateTime,
  updatedAt: ye.DateTime,
});

export const BetterAuthUser = S.mutable(UserDefinition);
export type BetterAuthUser = typeof BetterAuthUser.Type;
