import * as S from "effect/Schema";
import * as MTypes from "../../Types";
/**
 * @since 0.1.0
 */
import { invariant } from "../../invariant";
import {
  EntityKind,
  type HasId,
  type ObjectAnnotation,
  ObjectAnnotationId,
  TYPENAME_REGEX,
  VERSION_REGEX,
} from "../AST";
import {
  type TypedObjectFields,
  type TypedObjectOptions,
  makeTypedEntityClass,
} from "./common";

/**
 * @since 0.1.0
 * @category models
 * Definition for an object type that can be stored in a MOSES database.
 * Implements effect schema to define object properties.
 * Has a typename and version.
 *
 * In contrast to {@link MosesSchema} this definition is not recorded in the database.
 */
export interface TypedObject<A = MTypes.AnyType, I = MTypes.AnyType>
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
 * Use {@link TypedObject} for the common use-cases.
 */
export interface TypedObjectPrototype<A = MTypes.AnyType, I = MTypes.AnyType>
  extends TypedObject<A, I> {
  /** Type constructor. */
  new (): HasId & A;
}

/**
 * @since 0.1.0
 * @category models
 */
export type TypedObjectProps = {
  typename: string;
  version: string;
  skipTypenameFormatCheck?: boolean;
};

/**
 * @since 0.1.0
 * @category models
 * Base class factory for typed objects.
 */
// TODO(BEEPHOLE!): Can this be flattened into a single function (e.g., `class X extends TypedObject({})`).
// TODO(BEEPHOLE!): Support pipe(S.default({}))
export const TypedObject = ({
  typename,
  version,
  skipTypenameFormatCheck,
}: TypedObjectProps) => {
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
  ): TypedObjectPrototype<
    TypedObjectFields<SchemaFields, Options>,
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
    invariant(typeof EntityKind.Object === "string");
    const annotatedSchema = typeSchema.annotations({
      [ObjectAnnotationId]: {
        kind: EntityKind.Object,
        typename,
        version,
      } satisfies ObjectAnnotation,
    });

    /**
     * Return class definition.
     * NOTE: Actual reactive MOSES objects must be created via the `create(Type)` function.
     */
    // TODO(BEEPHOLE!): This is missing fields required by TypedObject (e.g., Type, Encoded, Context)?
    return class TypedObject extends makeTypedEntityClass(
      typename,
      version,
      annotatedSchema as MTypes.AnyType,
    ) {} as MTypes.AnyType;
  };
};
