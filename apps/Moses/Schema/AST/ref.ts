import { Option } from "effect";
import {
  type Annotated,
  getDescriptionAnnotation,
  getIdentifierAnnotation,
  getTitleAnnotation,
} from "effect/SchemaAST";

import * as S from "effect/Schema";
import { E2N } from "../../E2N";
import { type EncodedReference } from "../../Ref";
import type * as MTypes from "../../Types";
import * as MUtils from "../../Util";
import type { ObjectId } from "../object";
import {
  ReferenceAnnotationId,
  getMosesIdentifierAnnotation,
  getObjectAnnotation,
} from "./annotations";
import { type JsonSchemaType } from "./json-schema-type";

/**
 * The `$id` field for a MOSES reference schema.
 */
export const JSON_SCHEMA_MOSES_REF_ID = "/schemas/moses/ref";

// A narrower interface that definitely has these properties
interface MosesRefSchema {
  $id: string;
  reference: {
    schema: {
      $ref: string;
    };
  };
}

// Type guard function that checks shape at runtime
function isMosesRefSchema(val: JsonSchemaType): val is MosesRefSchema {
  return (
    val != null &&
    val.$id === JSON_SCHEMA_MOSES_REF_ID &&
    typeof val.reference?.schema?.$ref === "string"
  );
}

// TODO(BEEPHOLE!): Define return type.
export const getSchemaReference = (property: JsonSchemaType) => {
  if (isMosesRefSchema(property)) {
    // Inside here, `property` is MosesRefSchema,
    // so no type error destructuring reference.schema.$ref

    return {
      typename: MUtils.definedOrThrow(
        E2N.parse(property.reference.schema.$ref).toTypename(),
      ),
    };
  }
  // else return undefined or do something else
};

export const createSchemaReference = (typename: string): JsonSchemaType => {
  return {
    $id: JSON_SCHEMA_MOSES_REF_ID,
    reference: {
      schema: {
        $ref: E2N.fromTypename(typename).toString(),
      },
    },
  };
};

/**
 * Reference Schema.
 */
//  Naming pattern (Ref$) is borrowed from effect-schema.
export interface Ref$<T extends MTypes.WithId>
  extends S.Schema<Ref<T>, EncodedReference> {}

interface RefFn {
  <T extends MTypes.WithId>(schema: S.Schema<T, MTypes.AnyType>): Ref$<T>;

  isRef: (obj: MTypes.AnyType) => obj is Ref<MTypes.AnyType>;

  hasObjectId: (id: ObjectId) => (ref: Ref<MTypes.AnyType>) => boolean;
}

/**
 * Schema builder for references.
 */
export const Ref: RefFn = <T extends MTypes.WithId>(
  schema: S.Schema<T, MTypes.AnyType>,
): Ref$<T> => {
  const annotation = getObjectAnnotation(schema);
  if (annotation == null) {
    throw new Error("Reference target must be a MOSES schema.");
  }

  return createMosesReferenceSchema(
    getMosesIdentifierAnnotation(schema),
    annotation.typename,
    annotation.version,
    getSchemaExpectedName(schema.ast),
  );
};

export const RefTypeId: unique symbol = Symbol("@moses/moses-schema/Ref");

/**
 * Represents a materialized reference to a target.
 * This is the data type for the fields marked as ref.
 */
export interface Ref<T> {
  /**
   * Target object E2N.
   */
  get e2n(): E2N;

  /**
   * @returns The reference target.
   * May return `undefined` if the object is not loaded in the working set.
   * Accessing this property, even if it returns `undefined,` will trigger the object to be loaded to the working set.
   *
   * @reactive Supports signal subscriptions.
   */
  get target(): T | undefined;

  /**
   * @returns Promise that will resolve with the target object.
   * Will load the object from the disk if it is not present in the working set.
   * @throws If the object is not available locally.
   */
  load(): Promise<T>;

  /**
   * @returns Promise that will resolve with the target object or undefined if the object is not loaded locally.
   */
  tryLoad(): Promise<T | undefined>;

  [RefTypeId]: {
    _T: T;
  };
}

Ref.isRef = (obj: MTypes.AnyType): obj is Ref<MTypes.AnyType> => {
  return obj && typeof obj === "object" && RefTypeId in obj;
};

Ref.hasObjectId = (id: ObjectId) => (ref: Ref<MTypes.AnyType>) =>
  ref.e2n.isLocalObjectId() && ref.e2n.parts[1] === id;

/**
 * `reference` field on the schema object.
 */
export type JsonSchemaReferenceInfo = {
  schema: { $ref: string };
  schemaVersion?: string;
};

/**
 * @internal
 */
// TODO(BEEPHOLE!): Move to json schema and make private?
export const createMosesReferenceSchema = (
  mosesId: string | undefined,
  typename: string | undefined,
  version: string | undefined,
  schemaName?: string,
): S.Schema<MTypes.AnyType> => {
  if (!mosesId && !typename) {
    throw new TypeError("Either mosesId or typename must be provided.");
  }

  const referenceInfo: JsonSchemaReferenceInfo = {
    schema: {
      $ref: mosesId ?? `e2n:type:${typename}`,
    },
    schemaVersion: version,
  };

  return S.Any.annotations({ jsonSchema: {} }).pipe(
    S.filter(
      (obj) => {
        return Ref.isRef(obj);
      },
      {
        jsonSchema: {
          $id: JSON_SCHEMA_MOSES_REF_ID,
          reference: referenceInfo,
          title: undefined, // Remove title from the output JSON schema.
        },
        title: schemaName ? `Ref to ${schemaName}` : "Ref",
        [ReferenceAnnotationId]: {
          typename: typename ?? "",
          version,
        },
      },
    ),
  );
};

const getSchemaExpectedName = (ast: Annotated): string | undefined => {
  return getIdentifierAnnotation(ast).pipe(
    Option.orElse(() => getTitleAnnotation(ast)),
    Option.orElse(() => getDescriptionAnnotation(ast)),
    Option.getOrElse(() => undefined),
  );
};
