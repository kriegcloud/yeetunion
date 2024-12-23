import * as S from "@effect/schema/Schema";

const Bool = S.Boolean.pipe(S.brand("Bool"));

const i = Bool.make(true);
console.log(i);

console.log(S.decodeUnknownSync(Bool)(i));
