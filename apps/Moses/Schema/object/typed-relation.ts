/**
 * @since 0.1.0
 * @category models
 */
import * as S from "effect/Schema";
import * as MTypes from "../../Types";
import { invariant } from "../../invariant";
import {
  EntityKind,
  type HasId,
  ObjectAnnotationId,
  TYPENAME_REGEX,
  VERSION_REGEX,
} from "../AST";
import type { ObjectAnnotation } from "../AST/annotations";
import {
  type TypedObjectFields,
  type TypedObjectOptions,
  makeTypedEntityClass,
} from "./common";
import type { RelationSourceTargetRefs } from "./relation";

/**
 * @since 0.1.0
 * @category models
 * Definition for an object type that can be stored in a MOSES database.
 * Implements effect schema to define object properties.
 * Has a typename and version.
 *
 * In contrast to {@link MosesSchema} this definition is not recorded in the database.
 */
export interface TypedRelation<A = MTypes.AnyType, I = MTypes.AnyType>
  extends S.Schema<A, I> {
  /** Fully qualified type name. */
  readonly typename: string;

  /**
   * Semver schema version.
   */
  readonly version: string;
}

/**
 * @since 0.1.0
 * @category models
 * Typed object that could be used as a prototype in class definitions.
 * This is an internal API type.
 * Use {@link TypedRelation} for the common use-cases.
 */
export interface TypedRelationPrototype<A = MTypes.AnyType, I = MTypes.AnyType>
  extends TypedRelation<A, I> {
  /** Type constructor. */
  new (): HasId & A;
}

/**
 * @since 0.1.0
 * @category models
 */
export type TypedRelationProps = {
  typename: string;
  version: string;

  skipTypenameFormatCheck?: boolean;
};

/**
 * Base class factory for typed objects.
 */
// TODO(BEEPHOLE!): Can this be flattened into a single function (e.g., `class X extends TypedRelation({})`).
// TODO(BEEPHOLE!): Support pipe(S.default({}))
export const TypedRelation = ({
  typename,
  version,
  skipTypenameFormatCheck,
}: TypedRelationProps) => {
  if (!skipTypenameFormatCheck) {
    if (!TYPENAME_REGEX.test(typename)) {
      throw new TypeError(`Invalid typename: ${typename}`);
    }
    if (!VERSION_REGEX.test(version)) {
      throw new TypeError(`Invalid version: ${version}`);
    }
  }

  /**
   * Return class definition factory.
   */
  return <
    SchemaFields extends S.Struct.Fields,
    Options extends TypedObjectOptions,
  >(
    fields: SchemaFields,
    options?: Options,
  ): TypedRelationPrototype<
    TypedObjectFields<SchemaFields, Options> & RelationSourceTargetRefs,
    S.Struct.Encoded<SchemaFields>
  > => {
    // Create schema from fields.
    const schema: S.Schema.All = options?.record
      ? S.Struct(fields, { key: S.String, value: S.Any })
      : S.Struct(fields);

    // Set MOSES object id property.
    const typeSchema = S.extend(
      S.mutable(options?.partial ? S.partial(schema) : schema),
      S.Struct({ id: S.String }),
    );

    // Set MOSES annotations.
    invariant(typeof EntityKind.Relation === "string");
    const annotatedSchema = typeSchema.annotations({
      [ObjectAnnotationId]: {
        kind: EntityKind.Relation,
        typename,
        version,
      } satisfies ObjectAnnotation,
    });

    /**
     * Return class definition.
     * NOTE: Actual reactive MOSES objects must be created via the `create(Type)` function.
     */
    // TODO(BEEPHOLE!): This is missing fields required by TypedRelation (e.g., Type, Encoded, Context)?
    return class TypedRelation extends makeTypedEntityClass(
      typename,
      version,
      annotatedSchema as MTypes.AnyType,
    ) {} as MTypes.AnyType;
  };
};
