/**
 * @since 0.1.0
 */
import * as S from "effect/Schema";
import * as AST from "effect/SchemaAST";
import { E2N } from "./E2N";
import { Reference } from "./Ref";
import type { JsonPath } from "./jsonPath";

import {
  type HasId,
  getMosesIdentifierAnnotation,
  getObjectAnnotation,
} from "./Schema/AST";
import type { ObjectMeta } from "./Schema/object/meta";
import { getDeep, setDeep } from "./Util";
/*----------------------------------------------------------------------------------------------------------------------
 |  TITLE: Utility Types
 *--------------------------------------------------------------------------------------------------------------------*/
/**
 * Type that represents a function with one argument
 *
 * @category Models
 */
export type OneArgFunction<in A, out B = A> = (a: A) => B;

/**
 * @category utility types
 * @since 0.1.0
 *
 * @description Only used where any is necessary
 * biome-ignore lint/suspicious/noExplicitAny: <explanation>
 */
export type AnyType = any;

/**
 * @category utility types
 * @since 0.1.0
 *
 * @description Only used where AnyRecord is necessary
 */
export type AnyRecord = Record<string, AnyType>;

/**
 * @category utility types
 * @since 0.1.0
 *
 * @description Only used where AnyReadonlyArray is necessary
 */
export type AnyReadonlyArray = ReadonlyArray<AnyType>;

/**
 * @category utility types
 * @since 0.1.0
 *
 * @description Only used where AnyFn is necessary
 */
export type AnyFn = (...args: Array<AnyType>) => AnyType;

/*----------------------------------------------------------------------------------------------------------------------
 |  TITLE: Core Types
 *--------------------------------------------------------------------------------------------------------------------*/

// TODO(BEEPHOLE!): Use consistently (with serialization utils).
export const MOSES_ATTR_META = "@meta";

//
// Objects
//

/**
 * Base type for all data objects (reactive, MOSES, and other raw objects).
 * NOTE: This describes the base type for all database objects.
 * It is stricter than
 * ```
 * T extends {}` or T extends an object
 * ```.
 */
// TODO(BEEPHOLE!): Consider moving to lower-level base type lib.
// TODO(ben): Rename AnyProperties.
export type BaseObject = { [key: string]: any };

export type PropertyKey<T extends BaseObject> = Extract<
  keyof ExcludeId<T>,
  string
>;

export type ExcludeId<T extends BaseObject> = Omit<T, "id">;

// TODO(BEEPHOLE!): Reconcile with ReactiveMosesObject.
export type WithId = HasId & BaseObject;

export type WithMeta = { [MOSES_ATTR_META]?: ObjectMeta };

/**
 * The raw object should not include the MOSES id, but may include metadata.
 */
export const RawObject = <S extends S.Schema<any>>(
  schema: S,
): S.Schema<ExcludeId<S.Schema.Type<S>> & WithMeta, S.Schema.Encoded<S>> => {
  return S.make(AST.omit(schema.ast, ["id"]));
};

//
// Data
//

export interface CommonObjectData {
  id: string;
  // TODO(ben): Document cases when this can be null.
  // TODO(ben): Convert to @typename and @meta.
  __typename: string | null;
  __meta: ObjectMeta;
}

export interface AnyObjectData extends CommonObjectData {
  /**
   * Fields of the object.
   */
  [key: string]: any;
}

/**
 * Object data type in JSON-encodable format.
 * References are encoded in the IPLD format.
 * `__typename` is the string E2N of the object type.
 * Meta is added under `__meta` key.
 */
export type ObjectData<S> = S.Schema.Encoded<S> & CommonObjectData;

//
// Utils
//

/**
 * Utility to split meta-property from a raw object.
 */
export const splitMeta = <T>(
  object: T & WithMeta,
): { object: T; meta?: ObjectMeta } => {
  const meta = object[MOSES_ATTR_META];
  delete object[MOSES_ATTR_META];
  return { meta, object };
};

export const splitPath = (path: JsonPath): string[] => {
  return path.match(/[a-zA-Z_$][\w$]*|\[\d+\]/g) ?? [];
};

export const getValue = <T extends object>(obj: T, path: JsonPath): any => {
  return getDeep(
    obj,
    splitPath(path).map((p) => p.replace(/[[\]]/g, "")),
  );
};

export const setValue = <T extends object>(
  obj: T,
  path: JsonPath,
  value: any,
): T => {
  return setDeep(
    obj,
    splitPath(path).map((p) => p.replace(/[[\]]/g, "")),
    value,
  );
};

/**
 * Returns a typename of a schema.
 */
export const getTypenameOrThrow = (schema: S.Schema<any>): string =>
  requireTypeReference(schema).objectId;

/**
 * Returns a reference that will be used to point to a schema.
 */
export const getTypeReference = (
  schema: S.Schema<any> | undefined,
): Reference | undefined => {
  if (!schema) {
    return undefined;
  }

  const mosesId = getMosesIdentifierAnnotation(schema);
  if (mosesId) {
    return Reference.fromE2N(E2N.parse(mosesId));
  }

  const annotation = getObjectAnnotation(schema);
  if (annotation == null) {
    return undefined;
  }

  return Reference.fromLegacyTypename(annotation.typename);
};

/**
 * Returns a reference that will be used to point to a schema.
 * @throws If it is not possible to reference this schema.
 */
export const requireTypeReference = (schema: S.Schema<any>): Reference => {
  const typeReference = getTypeReference(schema);
  if (typeReference == null) {
    // TODO(BEEPHOLE!): Catalog user-facing errors (this is too verbose).
    throw new Error("Schema must be defined via TypedObject.");
  }

  return typeReference;
};

// TODO(ben): Unify with `getTypeReference`.
export const getSchemaE2N = (
  schema: S.Schema.AnyNoContext,
): E2N | undefined => {
  // TODO(ben): Add support for dynamic schema.
  const objectAnnotation = getObjectAnnotation(schema);
  if (!objectAnnotation) {
    return undefined;
  }

  return E2N.fromTypenameAndVersion(
    objectAnnotation.typename,
    objectAnnotation.version,
  );
};
