/**
 * @since 0.1.0
 * @category models
 * Kinds of entities stored in MOSES: objects and relations.
 */
export enum EntityKind {
  Object = "object",
  Relation = "relation",
}

/**
 * @since 0.1.0
 * @category models
 * Used to access entity kind on live objects.
 */
export const EntityKindPropertyId: unique symbol = Symbol.for(
  "@moses/moses-schema/EntityKindProperty",
);
