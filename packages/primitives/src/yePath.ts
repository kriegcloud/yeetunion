import * as S from "@effect/schema/Schema";
import { yeNonEmptyTrimStr } from "./yeNonEmptyStr";

export const yeNextPath = yeNonEmptyTrimStr.pipe(
  S.startsWith("/"),
  S.brand("@ye/primitives/yeNextPath"),
);
export type yeNextPath = typeof yeNextPath.Type;