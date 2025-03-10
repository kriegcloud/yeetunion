import { Option, type Types } from "effect";
import { JSONSchema } from "effect";
import * as S from "effect/Schema";
import * as AST from "effect/SchemaAST";
import { E2N } from "../../E2N";
import * as MTypes from "../../Types";
import * as MUtil from "../../Util";
import { invariant } from "../../invariant";
import {
  EntityKind,
  EntityKindSchema,
  FieldLookupAnnotationId,
  GeneratorAnnotationId,
  type JsonSchemaType,
  LabelAnnotationId,
  MosesIdentifierAnnotationId,
  type ObjectAnnotation,
  ObjectAnnotationId,
  type PropertyMetaAnnotation,
  PropertyMetaAnnotationId,
  getMosesIdentifierAnnotation,
  getObjectAnnotation,
} from "../AST";
import { mapAst } from "../AST/mapAST";
import {
  type JsonSchemaReferenceInfo,
  Ref,
  createMosesReferenceSchema,
} from "../AST/ref";
import { CustomAnnotations } from "../formats";
import { Expando, ObjectId } from "../object";

/**
 * @internal
 */
export const getMosesProp = (obj: JsonSchemaType): MTypes.AnyType => {
  return (obj as MTypes.AnyType)[MOSES_REFINEMENT_KEY];
};

/**
 * Create object jsonSchema.
 */
export const createJsonSchema = (
  schema: S.Struct<MTypes.AnyType> = S.Struct({}),
): JsonSchemaType => {
  const jsonSchema = toJsonSchema(schema);

  // TODO(ben): Fix those in the serializer.
  jsonSchema.type = "object";
  delete jsonSchema.anyOf;
  return jsonSchema;
};

interface MosesRefinement {
  type?: ObjectAnnotation;
  reference?: ObjectAnnotation;
  annotations?: PropertyMetaAnnotation;
  generator?: string;
}

export enum PropType {
  NONE = 0,
  STRING = 1,
  NUMBER = 2,
  BOOLEAN = 3,
  DATE = 4,
  REF = 5,
  RECORD = 6,
  ENUM = 7,
}

export const toPropType = (type?: PropType): string => {
  switch (type) {
    case PropType.STRING:
      return "string";
    case PropType.NUMBER:
      return "number";
    case PropType.BOOLEAN:
      return "boolean";
    case PropType.DATE:
      return "date";
    case PropType.REF:
      return "ref";
    case PropType.RECORD:
      return "object";
    default:
      throw new Error(`Invalid type: ${type}`);
  }
};

/**
 * Convert effect schema to JSON Schema.
 * @param schema
 */
export const toJsonSchema = (schema: S.Schema.All): JsonSchemaType => {
  invariant(schema);
  const schemaWithRefinements = S.make(withMosesRefinements(schema.ast));
  let jsonSchema = JSONSchema.make(schemaWithRefinements) as JsonSchemaType;
  if (jsonSchema.properties && "id" in jsonSchema.properties) {
    // Put id first.
    jsonSchema.properties = MUtil.orderKeys(jsonSchema.properties, ["id"]);
  }

  const mosesIdentifier = getMosesIdentifierAnnotation(schema);
  if (mosesIdentifier) {
    jsonSchema.$id = mosesIdentifier;
  }

  const objectAnnotation = getObjectAnnotation(schema);
  if (objectAnnotation) {
    // MosesIdentifier annotation takes precedence, but the id can also be defined by the typename.
    if (!jsonSchema.$id) {
      jsonSchema.$id = `e2n:type:${objectAnnotation.typename}`;
    }
    jsonSchema.entityKind = objectAnnotation.kind;
    jsonSchema.version = objectAnnotation.version;
    jsonSchema.typename = objectAnnotation.typename;
  }

  // Fix field order.
  // TODO(ben): Makes sure undefined is not left on optional fields for the resulting object .
  jsonSchema = MUtil.orderKeys(jsonSchema, [
    "$schema",
    "$id",
    "entityKind",
    "typename",
    "version",

    "type",

    "enum",

    "properties",
    "required",
    "propertyOrder",
    "items",
    "additionalProperties",

    "anyOf",
  ]);

  return jsonSchema;
};

const withMosesRefinements = (ast: AST.AST): AST.AST => {
  let recursiveResult: AST.AST;
  if (AST.isSuspend(ast)) {
    // Precompute JSON schema for suspended AST since effect serializer does not support it.
    const suspendedAst = ast.f();
    const jsonSchema = toJsonSchema(S.make(suspendedAst));
    recursiveResult = new AST.Suspend(
      () => withMosesRefinements(suspendedAst),
      {
        [AST.JSONSchemaAnnotationId]: jsonSchema,
      },
    );
  } else if (AST.isTypeLiteral(ast)) {
    recursiveResult = mapAst(ast, withMosesRefinements);
    recursiveResult = makeAnnotatedRefinement(recursiveResult, {
      [AST.JSONSchemaAnnotationId]: {
        propertyOrder: [
          ...ast.propertySignatures.map((p) => p.name),
        ] as string[],
      } satisfies JsonSchemaType,
    });
  } else {
    recursiveResult = mapAst(ast, withMosesRefinements);
  }

  const annotationFields = annotationsToJsonSchemaFields(ast.annotations);
  if (Object.keys(annotationFields).length === 0) {
    return recursiveResult;
  }
  return makeAnnotatedRefinement(recursiveResult, {
    [AST.JSONSchemaAnnotationId]: annotationFields,
  });
};

/**
 * Convert JSON schema to effect schema.
 * @param root
 * @param _defs
 */
export const toEffectSchema = (
  root: JsonSchemaType,
  _defs?: JsonSchemaType["$defs"],
): S.Schema<MTypes.AnyType> => {
  const defs = root.$defs ? { ..._defs, ...root.$defs } : _defs ?? {};
  if ("type" in root && root.type === "object") {
    return objectToEffectSchema(root, defs);
  }

  let result: S.Schema<MTypes.AnyType> = S.Unknown;
  if ("$id" in root) {
    switch (root.$id as string) {
      case "/schemas/any": {
        result = anyToEffectSchema(root as JSONSchema.JsonSchema7Any);
        break;
      }
      case "/schemas/unknown": {
        result = S.Unknown;
        break;
      }
      case "/schemas/{}":
      case "/schemas/object": {
        result = S.Object;
        break;
      }
      // Custom MOSES object reference.
      case "/schemas/moses/ref": {
        result = refToEffectSchema(root);
      }
    }
  } else if ("enum" in root) {
    result = S.Union(
      ...MUtil.definedOrThrow(root.enum).map((e) => S.Literal(e)),
    );
  } else if ("anyOf" in root) {
    result = S.Union(
      ...MUtil.definedOrThrow(root.anyOf).map((v) => toEffectSchema(v, defs)),
    );
  } else if ("type" in root) {
    switch (root.type) {
      case "string": {
        result = S.String;
        break;
      }
      case "number": {
        result = S.Number;
        break;
      }
      case "integer": {
        result = S.Number.pipe(S.int());
        break;
      }
      case "boolean": {
        result = S.Boolean;
        break;
      }
      case "array": {
        if (Array.isArray(root.items)) {
          result = S.Tuple(...root.items.map((v) => toEffectSchema(v, defs)));
        } else {
          invariant(root.items);
          result = S.Array(toEffectSchema(root.items, defs));
        }
        break;
      }
    }
  } else if ("$ref" in root) {
    const refSegments = MUtil.definedOrThrow(root.$ref).split("/");
    const jsonSchema =
      defs[MUtil.definedOrThrow(refSegments[refSegments.length - 1])];
    invariant(jsonSchema, `missing definition for ${root.$ref}`);
    result = toEffectSchema(jsonSchema, defs).pipe(
      S.annotations({ identifier: refSegments[refSegments.length - 1] }),
    );
  }

  const refinement: MosesRefinement | undefined = (root as MTypes.AnyType)[
    MOSES_REFINEMENT_KEY
  ];
  if (refinement?.annotations) {
    result = result.annotations({
      [PropertyMetaAnnotationId]: refinement.annotations,
    });
  }

  const annotations = jsonSchemaFieldsToAnnotations(root);

  // log.info('toEffectSchema', { root, annotations });
  result = result.annotations(annotations);

  return result;
};

const objectToEffectSchema = (
  root: JsonSchemaType,
  defs: JsonSchemaType["$defs"],
): S.Schema<MTypes.AnyType> => {
  invariant("type" in root && root.type === "object", `not an object: ${root}`);

  const mosesRefinement: MosesRefinement = (root as MTypes.AnyType)[
    MOSES_REFINEMENT_KEY
  ];
  const isMosesObject =
    mosesRefinement != null ||
    ("$id" in root &&
      typeof root.$id === "string" &&
      root.$id.startsWith("e2n:"));

  let fields: S.Struct.Fields = {};
  const propertyList = Object.entries(root.properties ?? {});
  let immutableIdField: S.Schema<MTypes.AnyType> | undefined;
  for (const [key, value] of propertyList) {
    if (isMosesObject && key === "id") {
      immutableIdField = toEffectSchema(value, defs);
    } else {
      // TODO(BEEPHOLE!): Mutable cast.
      (fields as MTypes.AnyType)[key] = root.required?.includes(key)
        ? toEffectSchema(value, defs)
        : S.optional(toEffectSchema(value, defs));
    }
  }

  if (root.propertyOrder) {
    fields = MUtil.orderKeys(fields, root.propertyOrder as MTypes.AnyType);
  }

  let schema: S.Schema<MTypes.AnyType, MTypes.AnyType, unknown>;
  if (root.patternProperties) {
    invariant(
      propertyList.length === 0,
      "pattern properties mixed with regular properties are not supported",
    );
    invariant(
      Object.keys(root.patternProperties).length === 1 &&
        Object.keys(root.patternProperties)[0] === "",
      "only one pattern property is supported",
    );

    schema = S.Record({
      key: S.String,
      value: toEffectSchema(
        MUtil.definedOrThrow(root.patternProperties[""]),
        defs,
      ),
    });
  } else if (typeof root.additionalProperties !== "object") {
    schema = S.Struct(fields);
  } else {
    const indexValue = toEffectSchema(root.additionalProperties, defs);
    if (propertyList.length > 0) {
      schema = S.Struct(fields, { key: S.String, value: indexValue });
    } else {
      schema = S.Record({ key: S.String, value: indexValue });
    }
  }

  if (immutableIdField) {
    schema = S.extend(S.mutable(schema), S.Struct({ id: immutableIdField }));
  }

  const annotations = jsonSchemaFieldsToAnnotations(root);
  return schema.annotations(annotations) as MTypes.AnyType;
};

const anyToEffectSchema = (
  root: JSONSchema.JsonSchema7Any,
): S.Schema<MTypes.AnyType> => {
  const mosesRefinement: MosesRefinement = (root as MTypes.AnyType)[
    MOSES_REFINEMENT_KEY
  ];
  if (mosesRefinement?.reference != null) {
    const mosesId = root.$id.startsWith("e2n:moses:") ? root.$id : undefined;
    return createMosesReferenceSchema(
      mosesId,
      mosesRefinement.reference.typename,
      mosesRefinement.reference.version,
    );
  }

  return S.Any;
};

// TODO(ben): Types.
const refToEffectSchema = (root: MTypes.AnyType): S.Schema<MTypes.AnyType> => {
  if (!("reference" in root)) {
    return Ref(Expando);
  }
  const reference: JsonSchemaReferenceInfo = root.reference;
  if (typeof reference !== "object") {
    throw new Error("Invalid reference field in ref schema");
  }

  const targetSchemaE2N = E2N.parse(reference.schema.$ref);
  invariant(targetSchemaE2N.kind === E2N.kind.TYPE);

  return createMosesReferenceSchema(
    targetSchemaE2N.toString(),
    targetSchemaE2N.kind === E2N.kind.TYPE
      ? targetSchemaE2N.parts[0]
      : undefined,
    reference.schemaVersion,
  );
};

//
// Annotations
//

/**
 * @internal
 */
export const MOSES_REFINEMENT_KEY = "moses";

const MOSES_REFINEMENTS = [
  ObjectAnnotationId,
  PropertyMetaAnnotationId,
  LabelAnnotationId,
  FieldLookupAnnotationId,
  GeneratorAnnotationId,
];

const annotationToRefinementKey: {
  [annotation: symbol]: keyof MosesRefinement;
} = {
  // TODO(ben): Extract out.
  [PropertyMetaAnnotationId]: "annotations",
  [GeneratorAnnotationId]: "generator",
};

const annotationsToJsonSchemaFields = (
  annotations: AST.Annotations,
): Record<symbol, MTypes.AnyType> => {
  const schemaFields: Record<string, MTypes.AnyType> = {};

  const mosesRefinement: MosesRefinement = {};
  for (const annotation of MOSES_REFINEMENTS) {
    if (annotations[annotation] != null) {
      if (annotationToRefinementKey[annotation]) {
        mosesRefinement[annotationToRefinementKey[annotation]] = annotations[
          annotation
        ] as MTypes.AnyType;
      }
    }
  }
  if (Object.keys(mosesRefinement).length > 0) {
    schemaFields[MOSES_REFINEMENT_KEY] = mosesRefinement;
  }

  const mosesIdentifier = annotations[MosesIdentifierAnnotationId];
  if (mosesIdentifier) {
    schemaFields[MOSES_REFINEMENT_KEY] ??= {};
    schemaFields[MOSES_REFINEMENT_KEY].schemaId = mosesIdentifier;
  }

  // Custom (at the end).
  for (const [key, annotationId] of Object.entries(CustomAnnotations)) {
    const value = annotations[annotationId];
    if (value != null) {
      schemaFields[key] = value;
    }
  }

  return schemaFields;
};

const jsonSchemaFieldsToAnnotations = (
  schema: JsonSchemaType,
): AST.Annotations => {
  const annotations: Types.Mutable<S.Annotations.Schema<MTypes.AnyType>> = {};

  const mosesRefinement: MosesRefinement = (schema as MTypes.AnyType)[
    MOSES_REFINEMENT_KEY
  ];
  if (mosesRefinement != null) {
    for (const annotation of MOSES_REFINEMENTS) {
      if (
        mosesRefinement[
          MUtil.definedOrThrow(annotationToRefinementKey[annotation])
        ]
      ) {
        annotations[annotation] =
          mosesRefinement[
            MUtil.definedOrThrow(annotationToRefinementKey[annotation])
          ];
      }
    }
  }

  // Limit to e2n:moses: URIs.
  if (schema.$id && MUtil.definedOrThrow(schema.$id.startsWith("e2n:moses:"))) {
    annotations[MosesIdentifierAnnotationId] = schema.$id;
  } else if (
    schema.$id &&
    MUtil.definedOrThrow(schema.$id.startsWith("e2n:type:")) &&
    schema?.moses?.type?.schemaId
  ) {
    const id = schema?.moses?.type?.schemaId;
    if (ObjectId.isValid(id)) {
      annotations[MosesIdentifierAnnotationId] =
        E2N.fromLocalObjectId(id).toString();
    }
  }

  if (schema.typename) {
    annotations[ObjectAnnotationId] ??= {
      kind: schema.entityKind
        ? S.decodeSync(EntityKindSchema)(schema.entityKind)
        : EntityKind.Object,
      typename: schema.typename,
      version: schema.version ?? "0.1.0",
    } satisfies ObjectAnnotation;
  }

  // Decode legacy schema.
  if (!schema.typename && schema?.moses?.type) {
    annotations[ObjectAnnotationId] ??= {
      kind: EntityKind.Object,
      typename: schema.moses.type.typename,
      version: schema.moses.type.version,
    } satisfies ObjectAnnotation;
  }

  // Custom (at the end).
  for (const [key, annotationId] of Object.entries(CustomAnnotations)) {
    if (key in schema) {
      annotations[annotationId] = (schema as MTypes.AnyType)[key];
    }
  }

  return annotations;
};

const makeAnnotatedRefinement = (
  ast: AST.AST,
  annotations: AST.Annotations,
): AST.Refinement => {
  return new AST.Refinement(ast, () => Option.none(), annotations);
};
