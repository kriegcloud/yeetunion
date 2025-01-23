import ye from "@ye/primitives";
import * as S from "effect/Schema";
// 1) Define `baseFields` as a `const` so TS has exact key knowledge
export const baseFields = {
  createdAt: ye.DateTime,
  updatedAt: ye.DateTimeOrNull
};
// 2) Define your static keys
export const staticKeys = ["id", "name", "email", "emailVerified", "image", "role", "banned", "banReason", "banExpires"];
// 4) Create your combined Keys array
export const Keys = [...staticKeys, ... /*#__PURE__*/Object.keys(baseFields)];
// 5) Define your S.Struct
export const UserId = /*#__PURE__*/ye.NonEmptyTrimStr.pipe(/*#__PURE__*/ye.Brand("@ye/entities/UserId"));
export const UserDefinition = /*#__PURE__*/S.Struct({
  id: UserId,
  name: ye.NonEmptyTrimStr,
  email: ye.Email,
  emailVerified: ye.Bool,
  image: /*#__PURE__*/S.optional(ye.NonEmptyTrimStrOrNullish),
  role: ye.NonEmptyTrimStrOrNull,
  banned: ye.BoolOrNull,
  banReason: ye.StrOrNull,
  banExpires: ye.DateTimeOrNull,
  twoFactorEnabled: ye.BoolOrNull,
  createdAt: ye.DateTime,
  updatedAt: ye.DateTime
});
export const BetterAuthUser = /*#__PURE__*/S.mutable(UserDefinition);
//# sourceMappingURL=User.js.map