import * as S from "effect/Schema";

// TODO(ben): Where should this live?
const SortDirection = S.Union(S.Literal("asc"), S.Literal("desc"));
export type SortDirectionType = S.Schema.Type<typeof SortDirection>;

// TODO(ben): Struct vs pair?
const FieldSort = S.Struct({
  fieldId: S.String,
  direction: SortDirection,
}).pipe(S.mutable);

export interface FieldSortType extends S.Schema.Type<typeof FieldSort> {}

/**
 * MOSES query object.
 */
const QuerySchema = S.Struct({
  // TODO(BEEPHOLE!): Rename to typename.
  // typename: S.String,
  type: S.String,
  sort: S.optional(S.Array(FieldSort)),
}).pipe(S.mutable);

export interface QueryType extends S.Schema.Type<typeof QuerySchema> {}

export const QueryType: S.Schema<QueryType> = QuerySchema;
