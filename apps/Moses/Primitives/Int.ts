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
 * - default
 * @param annotations
 */
const annotableInt =
  <A extends number>(annotations: EffectAnnotationsBase) =>
  <I, R>(self: S.Schema<A, I, R>): S.Schema<A, I, R> => {
    return self.pipe(S.annotations(annotations));
  };

export interface Int extends S.Annotable<Int, number> {}

export const Int = (params: EffectAnnotationsBase): Int =>
  S.Int.pipe(annotableInt(params));
