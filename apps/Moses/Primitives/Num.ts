import * as S from "effect/Schema";
import { EffectAnnotationsBase } from "./annotations";
/**
 * TODO: Refinements
 * - Positive
 * - Negative
 * - Non Zero
 * - min
 * - max
 * - between
 * @param annotations
 */
const annotableNum =
  <A extends number>(annotations: EffectAnnotationsBase) =>
  <I, R>(self: S.Schema<A, I, R>): S.Schema<A, I, R> => {
    return self.pipe(S.annotations(annotations));
  };

export interface Num extends S.Annotable<Num, number> {}

export const Num = (params: EffectAnnotationsBase): Num =>
  S.Number.pipe(annotableNum(params));
