import * as MTypes from "../../Types";

/**
 * @since 0.1.0
 * @category models
 * Used to access relation source ref on live MOSES objects.
 * Reading this symbol must return `Ref<Live<MosesObject<any>>>`
 */
export const RelationSourceId: unique symbol = Symbol(
  "@e2/moses/RelationSource",
);

/**
 * @since 0.1.0
 * @category models
 * Used to access relation target ref on live MOSES objects.
 * Reading this symbol must return `Ref<Live<MosesObject<any>>>`
 */
export const RelationTargetId: unique symbol = Symbol(
  "@e2/moses/RelationSource",
);

/**
 * @since 0.1.0
 * @category models
 * Source and target props on relations.
 */
export type RelationSourceTargetRefs = {
  // TODO(ben): Type those better.
  /**
   * Source MOSES live object.
   */
  [RelationSourceId]: MTypes.AnyType;

  /**
   * Target MOSES live object.
   */
  [RelationTargetId]: MTypes.AnyType;
};
