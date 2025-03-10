import * as S from "effect/Schema";
import * as AST from "effect/SchemaAST";
import { invariant } from "../../invariant";

import * as MTypes from "../../Types";
import {
  type JsonSchemaType,
  type SchemaMeta,
  SchemaMetaSymbol,
  schemaVariance,
} from "../AST";
import { toEffectSchema, toJsonSchema } from "../JSON";
import {
  type ObjectId,
  type TypedObject,
  type TypedObjectPrototype,
} from "../object";
import {
  addFieldsToSchema,
  removeFieldsFromSchema,
  setTypenameInSchema,
  updateFieldNameInSchema,
  updateFieldsInSchema,
} from "./manipulation";
import { StoredSchema } from "./stored-schema";

/**
 * Defines an effect-schema for the `MosesSchema` type.
 *
 * This is here so that `MosesSchema` class can be used as a part of another schema definition (e.g., `ref(MosesSchema)`).
 */
const MosesSchemaConstructor = (): TypedObjectPrototype => {
  /**
   * Return class definition satisfying S.Schema.
   */
  return class {
    private static get _schema() {
      // The field is DynamicMosesSchema in runtime, but is serialized as StoredMosesSchema in auto-merge.
      return S.Union(StoredSchema, S.instanceOf(MosesSchema)).annotations(
        StoredSchema.ast.annotations,
      );
    }

    static readonly [S.TypeId] = schemaVariance;

    static get ast() {
      return this._schema.ast;
    }

    static get annotations() {
      const schema = this._schema;
      return schema.annotations.bind(schema);
    }

    static get pipe() {
      const schema = this._schema;
      return schema.pipe.bind(schema);
    }
  } as MTypes.AnyType;
};

/**
 * Represents a schema stored in the MOSES database.
 * Schema can be mutable or readonly (specified by the {@link MosesSchema.readonly} field).
 *
 * Schema that can be modified at runtime via the API.
 * Is an instance of effect-schema (`Schema.Schema.AnyNoContext`) so it can be used in the same way as a regular schema.
 * IMPORTANT: The schema AST will change reactively when the schema is updated, including synced updates from remote peers.
 *
 * The class constructor is a schema instance itself, and can be used in the moses object definitions:
 *
 * @example
 * ```typescript
 * export class TableType extends TypedObject({ typename: 'example.org/type/Table', version: '0.1.0' })({
 *   title: S.String,
 *   schema: S.optional(ref(MosesSchema)),
 *   props: S.mutable(S.Array(TablePropSchema)),
 * }) {}
 * ```
 *
 * The MOSES API will translate any references to StoredSchema objects to be resolved as MosesSchema objects.
 */
export class MosesSchema
  extends MosesSchemaConstructor()
  implements S.Schema.AnyNoContext, TypedObject
{
  private _schema: S.Schema<MTypes.AnyType> | undefined;
  private _isDirty = true;

  constructor(private readonly _storedSchema: StoredSchema) {
    super();
  }

  /**
   * Id of the MOSES object containing the schema.
   */
  public get id(): ObjectId {
    return this._storedSchema.id;
  }

  /**
   * Schema typename.
   *
   * @example example.com/type/MyType
   */
  public get typename(): string {
    return this._storedSchema.typename;
  }

  /**
   * Schema version in semver format.
   *
   * @example 0.1.0
   */
  public get version(): string {
    return this._storedSchema.version;
  }

  /**
   * @returns `true` if the schema cannot be mutated.
   */
  public get readonly(): boolean {
    // TODO(ben): Implement readonly schema.
    return false;
  }

  /**
   * @reactive
   */
  public get jsonSchema(): JsonSchemaType {
    return this._storedSchema.jsonSchema;
  }

  /**
   * Reference to the underlying stored schema object.
   */
  public get storedSchema(): StoredSchema {
    return this._storedSchema;
  }

  /**
   * Returns an IMMUTABLE schema snapshot of the current state of the schema.
   */
  public getSchemaSnapshot(): S.Schema<MTypes.AnyType> {
    return this._getSchema();
  }

  //
  // Effect-Specific
  //

  public get [S.TypeId]() {
    return schemaVariance;
  }

  public get Type() {
    return this._storedSchema;
  }

  public get Encoded() {
    return this._storedSchema;
  }

  public get Context() {
    return this._getSchema().Context;
  }

  public get [SchemaMetaSymbol](): SchemaMeta {
    return {
      id: this.id,
      typename: this.typename,
      version: this._storedSchema.version,
    };
  }

  /**
   * Effect schema AST.
   */
  public get ast() {
    return this._getSchema().ast;
  }

  public get annotations() {
    const schema = this._getSchema();
    return schema.annotations.bind(schema);
  }

  public get pipe() {
    const schema = this._getSchema();
    return schema.pipe.bind(schema);
  }

  public getProperties(): AST.PropertySignature[] {
    const ast = this._getSchema().ast;
    invariant(AST.isTypeLiteral(ast));
    return [...ast.propertySignatures]
      .filter((p) => p.name !== "id")
      .map(unwrapOptionality);
  }

  // TODO(BEEPHOLE!): Deprecate direct manipulation? Use JSONSchema directly.

  //
  // Mutation methods.
  //

  /**
   * @throws Error if the schema is readonly.
   */
  public updateTypename(typename: string) {
    const updated = setTypenameInSchema(this._getSchema(), typename);
    this._storedSchema.typename = typename;
    this._storedSchema.jsonSchema = toJsonSchema(updated);
  }

  /**
   * @throws Error if the schema is readonly.
   */
  public addFields(fields: S.Struct.Fields) {
    const extended = addFieldsToSchema(this._getSchema(), fields);
    this._storedSchema.jsonSchema = toJsonSchema(extended);
  }

  /**
   * @throws Error if the schema is readonly.
   */
  public updateFields(fields: S.Struct.Fields) {
    const updated = updateFieldsInSchema(this._getSchema(), fields);
    this._storedSchema.jsonSchema = toJsonSchema(updated);
  }

  /**
   * @throws Error if the schema is readonly.
   */
  public updateFieldPropertyName({
    before,
    after,
  }: { before: PropertyKey; after: PropertyKey }) {
    const renamed = updateFieldNameInSchema(this._getSchema(), {
      before,
      after,
    });
    this._storedSchema.jsonSchema = toJsonSchema(renamed);
  }

  /**
   * @throws Error if the schema is readonly.
   */
  public removeFields(fieldNames: string[]) {
    const removed = removeFieldsFromSchema(this._getSchema(), fieldNames);
    this._storedSchema.jsonSchema = toJsonSchema(removed);
  }

  //
  // Internals
  //

  /**
   * Called by MosesSchemaRegistry on update.
   */
  _invalidate() {
    this._isDirty = true;
  }

  /**
   * Rebuilds this schema if it is dirty.
   */
  _rebuild() {
    if (this._isDirty || this._schema == null) {
      this._schema = toEffectSchema(unwrapProxy(this._storedSchema.jsonSchema));
      this._isDirty = false;
    }
  }

  private _getSchema() {
    this._rebuild();
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    return this._schema!;
  }
}

const unwrapOptionality = (
  property: AST.PropertySignature,
): AST.PropertySignature => {
  if (!AST.isUnion(property.type)) {
    return property;
  }

  return {
    ...property,
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    type: property.type.types.find((type) => !AST.isUndefinedKeyword(type))!,
  } as MTypes.AnyType;
};

// TODO(ben): Change to `getSnapshot`.
const unwrapProxy = (jsonSchema: MTypes.AnyType): MTypes.AnyType => {
  if (typeof jsonSchema !== "object") {
    return jsonSchema;
  }
  if (Array.isArray(jsonSchema)) {
    return jsonSchema.map(unwrapProxy);
  }

  const result: MTypes.AnyType = {};
  for (const key in jsonSchema) {
    result[key] = unwrapProxy(jsonSchema[key]);
  }

  return result;
};
