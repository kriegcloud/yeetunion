import { Option, flow, pipe } from "effect";
import * as S from "effect/Schema";
import * as AST from "effect/SchemaAST";
import { type Simplify } from "effect/Types";
import * as MTypes from "../../Types";
import { EntityKind } from "./entity-kind";
import { checkIdNotPresentOnSchema } from "./schema-validator";
import { type HasId } from "./types";

export type Primitive = string | number | boolean | null | undefined;
type ToMutable<T> = T extends MTypes.BaseObject
  ? { -readonly [K in keyof T]: T[K] extends readonly (infer U)[] ? U[] : T[K] }
  : T;

/**
 * MOSES object.
 */
export const ObjectAnnotationId = Symbol.for("@moses/schema/annotation/Object");

export const TYPENAME_REGEX = /^\w+\.\w{2,}\/[\w/]+$/;
export const VERSION_REGEX = /^\d+.\d+.\d+$/;

/**
 * Payload stored under {@link ObjectAnnotationId}.
 */
// TODO(BEEPHOLE!): Reconcile with other types.
// TODO(BEEPHOLE!): Define as schema with regex patterns above.
// TODO(ben): Rename to represent commonality between objects and relations (e.g. `entity`).
export type ObjectAnnotation = {
  kind: EntityKind;
  typename: string;
  version: string;
};

/**
 * MOSES identifier for a schema.
 * Must be a `e2n:moses:` URI.
 */
export const MosesIdentifierAnnotationId = Symbol.for(
  "@moses/schema/annotation/MosesIdentifier",
);

/**
 * @returns {@link ObjectAnnotation} from a schema.
 * Schema must have been created with {@link TypedObject} or {@link TypedLink} or manually assigned an appropriate annotation.
 */
export const getObjectAnnotation = (
  schema: S.Schema.All,
): ObjectAnnotation | undefined =>
  flow(
    AST.getAnnotation<ObjectAnnotation>(ObjectAnnotationId),
    Option.getOrElse(() => undefined),
  )(schema.ast);

/**
 * @returns {@link EntityKind} from a schema.
 */
export const getEntityKind = (schema: S.Schema.All): EntityKind | undefined => {
  return getObjectAnnotation(schema)?.kind;
};

export const getSchemaTypename = (schema: S.Schema.All): string | undefined =>
  getObjectAnnotation(schema)?.typename;

export const getSchemaVersion = (schema: S.Schema.All): string | undefined =>
  getObjectAnnotation(schema)?.version;

export const getMosesIdentifierAnnotation = (schema: S.Schema.All) =>
  flow(
    AST.getAnnotation<string>(MosesIdentifierAnnotationId),
    Option.getOrElse(() => undefined),
  )(schema.ast);

export const MosesObject = (typename: string, version: string) => {
  return <A, I, R>(
    self: S.Schema<A, I, R>,
  ): S.Schema<Simplify<HasId & ToMutable<A>>> => {
    if (!AST.isTypeLiteral(self.ast)) {
      throw new Error("MosesObject can only be applied to an S.Struct type.");
    }

    checkIdNotPresentOnSchema(self);

    // TODO(ben): Does `S.mutable` work for deep mutability here?
    const schemaWithId = S.extend(S.mutable(self), S.Struct({ id: S.String }));
    const ast = AST.annotations(schemaWithId.ast, {
      [ObjectAnnotationId]: {
        kind: EntityKind.Object,
        typename,
        version,
      } satisfies ObjectAnnotation,
    });
    return S.make(ast) as S.Schema<Simplify<HasId & ToMutable<A>>>;
  };
};

/**
 * PropertyMeta (metadata for dynamic schema properties).
 */
export const PropertyMetaAnnotationId = Symbol.for(
  "@moses/schema/annotation/PropertyMeta",
);

export type PropertyMetaValue =
  | Primitive
  | Record<string, Primitive>
  | Primitive[];

export type PropertyMetaAnnotation = {
  [name: string]: PropertyMetaValue;
};

export const PropertyMeta = (name: string, value: PropertyMetaValue) => {
  return <A, I, R>(self: S.Schema<A, I, R>): S.Schema<A, I, R> => {
    const existingMeta = self.ast.annotations[
      PropertyMetaAnnotationId
    ] as PropertyMetaAnnotation;
    return self.annotations({
      [PropertyMetaAnnotationId]: {
        ...existingMeta,
        [name]: value,
      },
    });
  };
};

export const getPropertyMetaAnnotation = <T>(
  prop: AST.PropertySignature,
  name: string,
) =>
  pipe(
    AST.getAnnotation<PropertyMetaAnnotation>(PropertyMetaAnnotationId)(
      prop.type,
    ),
    Option.map((meta) => meta[name] as T),
    Option.getOrElse(() => undefined),
  );

/**
 * Schema reference.
 */
export const ReferenceAnnotationId = Symbol.for(
  "@moses/schema/annotation/Reference",
);

export type ReferenceAnnotationValue = ObjectAnnotation;

export const getReferenceAnnotation = (schema: S.Schema<MTypes.AnyType>) =>
  pipe(
    AST.getAnnotation<ReferenceAnnotationValue>(ReferenceAnnotationId)(
      schema.ast,
    ),
    Option.getOrElse(() => undefined),
  );

export const SchemaMetaSymbol = Symbol.for("@moses/schema/SchemaMeta");

// TODO(BEEPHOLE!): Factor out.
// TODO(BEEPHOLE!): Reconcile with ObjectAnnotation above.
export type SchemaMeta = {
  id: string;
  typename: string;
  version: string;
};

// TODO(BEEPHOLE!): Factor out when JSON schema parser allows extensions.

/**
 * Identifies label property or JSON path expression.
 */
export const LabelAnnotationId = Symbol.for("@moses/schema/annotation/Label");

/**
 * Default field to be used on referenced schema to look up the value.
 */
export const FieldLookupAnnotationId = Symbol.for(
  "@moses/schema/annotation/FieldLookup",
);

/**
 * Generate test data.
 */
export const GeneratorAnnotationId = Symbol.for(
  "@moses/schema/annotation/Generator",
);
