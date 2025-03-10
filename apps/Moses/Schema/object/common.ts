/**
 * @since 0.1.0
 */
import * as S from "effect/Schema";
import * as MTypes from "../../Types";
import { schemaVariance } from "../AST";
import { getTypename } from "./typename";

/**
 * @since 0.1.0
 * @category models
 */
export type TypedObjectOptions = {
  partial?: true;
  record?: true;
};

/**
 * @category models
 * @since 0.1.0
 */
type SimplifiedSchemaFields<
  SchemaFields extends S.Struct.Fields,
  Options extends TypedObjectOptions,
> = Options["partial"] extends boolean
  ? S.SimplifyMutable<Partial<S.Struct.Type<SchemaFields>>>
  : S.SimplifyMutable<S.Struct.Type<SchemaFields>>;

/**
 * @category models
 * @since 0.1.0
 */
export type TypedObjectFields<
  SchemaFields extends S.Struct.Fields,
  Options extends TypedObjectOptions,
> = SimplifiedSchemaFields<SchemaFields, Options> & {
  id: string;
} & (Options["record"] extends boolean
    ? S.SimplifyMutable<S.IndexSignature.Type<S.IndexSignature.Records>>
    : NonNullable<unknown>);
/**
 * @category models
 * @since 0.1.0
 */
export const makeTypedEntityClass = (
  typename: string,
  version: string,
  baseSchema: S.Schema.AnyNoContext,
): S.SchemaClass<MTypes.AnyType> => {
  return class {
    // Implement TypedObject properties.
    static readonly typename = typename;

    static readonly version = version;
    static readonly [S.TypeId] = schemaVariance;
    static readonly ast = baseSchema.ast;
    static readonly annotations = baseSchema.annotations.bind(baseSchema);
    static readonly pipe = baseSchema.pipe.bind(baseSchema);
    static [Symbol.hasInstance](obj: unknown) {
      return obj != null && getTypename(obj) === typename;
    }

    private constructor() {
      throw new Error(
        "Use create(Typename, { ...fields }) to instantiate an object.",
      );
    }
  } as MTypes.AnyType;
};
