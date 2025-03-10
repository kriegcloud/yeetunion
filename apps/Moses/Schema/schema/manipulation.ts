import * as S from "effect/Schema";
import * as AST from "effect/SchemaAST";
import { invariant } from "../../invariant";

import * as MTypes from "../../Types";
import { type ObjectAnnotation, ObjectAnnotationId } from "../AST";
// TODO(ben): Do this one at a time. This might be dangerous.
export const addFieldsToSchema = (
  schema: S.Schema<MTypes.AnyType>,
  fields: S.Struct.Fields,
): S.Schema<MTypes.AnyType> => {
  const schemaExtension = S.partial(S.Struct(fields));
  return S.extend(schema, schemaExtension).annotations(
    schema.ast.annotations,
  ) as MTypes.AnyType as S.Schema<MTypes.AnyType>;
};

export const updateFieldsInSchema = (
  schema: S.Schema<MTypes.AnyType>,
  fields: S.Struct.Fields,
): S.Schema<MTypes.AnyType> => {
  const ast = schema.ast as AST.TypeLiteral;
  invariant(AST.isTypeLiteral(ast));

  const updatedProperties = [...ast.propertySignatures];
  const propertiesToUpdate = (
    S.partial(S.Struct(fields)).ast as AST.TypeLiteral
  ).propertySignatures;
  for (const property of propertiesToUpdate) {
    const index = updatedProperties.findIndex((p) => p.name === property.name);
    if (index !== -1) {
      updatedProperties[index] = property;
    } else {
      updatedProperties.push(property);
    }
  }

  return S.make(
    new AST.TypeLiteral(
      updatedProperties,
      ast.indexSignatures,
      ast.annotations,
    ),
  );
};

export const removeFieldsFromSchema = (
  schema: S.Schema<MTypes.AnyType>,
  fieldNames: string[],
): S.Schema<MTypes.AnyType> => {
  return S.make(AST.omit(schema.ast, fieldNames)).annotations(
    schema.ast.annotations,
  );
};

export const updateFieldNameInSchema = (
  schema: S.Schema<MTypes.AnyType>,
  { before, after }: { before: PropertyKey; after: PropertyKey },
): S.Schema<MTypes.AnyType> => {
  const ast = schema.ast as AST.TypeLiteral;
  invariant(AST.isTypeLiteral(ast));

  return S.make(
    new AST.TypeLiteral(
      ast.propertySignatures.map((p) =>
        p.name === before
          ? new AST.PropertySignature(
              after,
              p.type,
              p.isOptional,
              p.isReadonly,
              p.annotations,
            )
          : p,
      ),
      ast.indexSignatures,
      ast.annotations,
    ),
  );
};

export const setTypenameInSchema = (
  schema: S.Schema<MTypes.AnyType>,
  typename: string,
): S.Schema<MTypes.AnyType> => {
  const existingAnnotation = schema.ast.annotations[
    ObjectAnnotationId
  ] as ObjectAnnotation;
  invariant(existingAnnotation, `Missing ${String(ObjectAnnotationId)}`);

  return schema.annotations({
    ...schema.ast.annotations,
    [ObjectAnnotationId]: {
      kind: existingAnnotation.kind,
      typename,
      version: existingAnnotation.version,
    } satisfies ObjectAnnotation,
  });
};
