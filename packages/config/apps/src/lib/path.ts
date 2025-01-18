import * as S from "@effect/schema/Schema";


export const makePathKey = <const T extends string>(s: T) =>
  S.Literal(s).pipe(S.startsWith("/"))

export type PathKey<T extends string> = ReturnType<typeof makePathKey<T>>

