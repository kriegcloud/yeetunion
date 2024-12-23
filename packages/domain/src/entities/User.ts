import * as S from "@effect/schema/Schema";
import * as P from "../primitives"

export const UserDef = S.TaggedStruct("@ye/domain/entities/User", {
  id: P.yePosInt,
  username: P.yeNonEmptyTrimStr,
  firstName: P.yeNonEmptyTrimStr,
  lastName: P.yeNonEmptyTrimStr,
  createdAt: P.yeDate,
  updatedAt: P.yeDateOrNull
}).pipe(
  S.annotations({
    identifier: "@ye/domain/entities/User"
  })
)
export type UserDef = typeof UserDef.Type