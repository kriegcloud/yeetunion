import {yeNonEmptyTrimStr} from "@/yeNonEmptyStr";
import * as S from "@effect/schema/Schema";

export const yeHex = yeNonEmptyTrimStr.pipe(
  S.pattern(/^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6}|[a-fA-F0-9]{4}|[a-fA-F0-9]{8})$/)
)