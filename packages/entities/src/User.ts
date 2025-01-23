import ye from "@ye/primitives";
import * as S from "effect/Schema";

// 1) Define `baseFields` as a `const` so TS has exact key knowledge
export const baseFields = {
  createdAt: ye.DateTime,
  updatedAt: ye.DateTimeOrNull,
} as const;

// 2) Define your static keys
export const staticKeys = [
  "id",
  "name",
  "email",
  "emailVerified",
  "image",
  "role",
  "banned",
  "banReason",
  "banExpires",
] as const;

type StaticKey = typeof staticKeys[number];
type BaseKey = keyof typeof baseFields;

// 3) Merge them into a single union type
export type Key = StaticKey | BaseKey;

// 4) Create your combined Keys array
export const Keys = [...staticKeys, ...Object.keys(baseFields)] as Key[];

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