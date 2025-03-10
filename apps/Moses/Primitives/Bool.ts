import * as S from "effect/Schema";
import { EffectAnnotationsBase } from "./annotations";
/**
 * TODO: Refinements
 * - default
 * @param annotations
 */
const annotableBool =
  <A extends boolean>(annotations: EffectAnnotationsBase) =>
  <I, R>(self: S.Schema<A, I, R>): S.Schema<A, I, R> => {
    return self.pipe(S.annotations(annotations));
  };

export interface Bool extends S.Annotable<Bool, boolean> {}

export const Bool = (params: EffectAnnotationsBase): Bool =>
  S.Boolean.pipe(annotableBool(params));
