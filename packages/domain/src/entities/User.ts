import * as S from "@effect/schema/Schema";
import * as P from "../primitives"

export const UserDef = S.TaggedStruct("@ye/domain/entities/User", {
  id: P.PosInt,
  username: P.NonEmptyTrimStr,
  firstName: P.NonEmptyTrimStr,
  lastName: P.NonEmptyTrimStr,
  createdAt: P.YeDate,
  updatedAt: P.DteOrNull
}).pipe(
  S.annotations({
    identifier: "@ye/domain/entities/User"
  })
)
export type UserDef = typeof UserDef.Type