/**
 * @since 0.1.0
 */
import * as S from "effect/Schema";
import { IdentifierAnnotationId } from "effect/SchemaAST";

//
// ForeignKey
//
/**
 * @since 0.1.0
 * @category models
 */
const _ForeignKeySchema = S.Struct({
  source: S.String,
  // TODO(ben): This annotation is currently used to ensure id field shows up in forms.
  id: S.String.annotations({ [IdentifierAnnotationId]: false }),
});
/**
 * @since 0.1.0
 * @category models
 */
export type ForeignKey = S.Schema.Type<typeof _ForeignKeySchema>;
/**
 * @since 0.1.0
 * @category models
 */
export const ForeignKeySchema: S.Schema<ForeignKey> = _ForeignKeySchema;

//
// ObjectMeta
//
/**
 * @since 0.1.0
 * @category models
 */
export const ObjectMetaSchema = S.Struct({
  keys: S.mutable(S.Array(ForeignKeySchema)),
});
/**
 * @since 0.1.0
 * @category models
 */
export type ObjectMeta = S.Schema.Type<typeof ObjectMetaSchema>;
/**
 * @since 0.1.0
 * @category models
 */
export const foreignKey = (source: string, id: string): ForeignKey => ({
  source,
  id,
});
/**
 * @since 0.1.0
 * @category models
 */
export const foreignKeyEquals = (a: ForeignKey, b: ForeignKey) =>
  a.source === b.source && a.id === b.id;
