import * as S from "effect/Schema";
import { EffectAnnotationsBase } from "./annotations";

/**
 * TODO: Refinements
 * - Non Empty
 * - Trimmed
 * - Lowercase
 * - Uppercase
 * - Pattern
 * - minLength
 * - maxLength
 * @param annotations
 */

const annotableStr =
  <A extends string>(annotations: EffectAnnotationsBase) =>
  <I, R>(self: S.Schema<A, I, R>): S.Schema<A, I, R> => {
    return self.pipe(S.annotations(annotations));
  };

export interface Str extends S.Annotable<Str, string> {}

export const Str = (params: EffectAnnotationsBase): Str =>
  S.String.pipe(annotableStr(params));
