import * as S from "effect/Schema";
import * as AST from "effect/SchemaAST";
import { describe, expect, test } from "vitest";
import * as MTypes from "../../Types";
import * as MUtils from "../../Util";
import type { JsonProp } from "../../jsonPath";

import { deepMapValues } from "../../Map";

import {
  EntityKind,
  type JsonSchemaType,
  PropertyMeta,
  getMosesIdentifierAnnotation,
  getObjectAnnotation,
  getSchemaProperty,
  setSchemaProperty,
} from "../AST";
import { Ref, createSchemaReference, getSchemaReference } from "../AST/ref";
import { FormatAnnotationId } from "../formats";
import { Email } from "../formats/string";
import { TypedObject } from "../object";
import { Contact } from "../testing";
import { getMosesProp, toEffectSchema, toJsonSchema } from "./json-schema";

describe("effect-to-json", () => {
  test("type annotation", () => {
    class Schema extends TypedObject({
      typename: "example.com/type/Test",
      version: "0.1.0",
    })({ name: S.String }) {}
    const jsonSchema = toJsonSchema(Schema);
    expect((jsonSchema as MTypes.AnyType).$id).toEqual(
      "e2n:type:example.com/type/Test",
    );
    expect((jsonSchema as MTypes.AnyType).version).toEqual("0.1.0");
  });

  test("field meta annotation", () => {
    const meta = { maxLength: 0 };
    const metaNamespace = "e2.test";
    class Schema extends TypedObject({
      typename: "example.com/type/Test",
      version: "0.1.0",
    })({
      name: S.String.pipe(PropertyMeta(metaNamespace, meta)),
    }) {}
    const jsonSchema = toJsonSchema(Schema);
    expect(
      getMosesProp(MUtils.definedOrThrow(jsonSchema.properties?.name))
        .annotations[metaNamespace],
    ).to.deep.eq(meta);
  });

  test("reference annotation", () => {
    class Nested extends TypedObject({
      typename: "example.com/type/TestNested",
      version: "0.1.0",
    })({
      name: S.String,
    }) {}
    class Schema extends TypedObject({
      typename: "example.com/type/Test",
      version: "0.1.0",
    })({
      name: Ref(Nested),
    }) {}
    const jsonSchema = toJsonSchema(Schema);
    const nested = MUtils.definedOrThrow(jsonSchema.properties).name;
    expectReferenceAnnotation(MUtils.definedOrThrow(nested));
  });

  test("array of references", () => {
    class Nested extends TypedObject({
      typename: "example.com/type/TestNested",
      version: "0.1.0",
    })({
      name: S.String,
    }) {}
    class Schema extends TypedObject({
      typename: "example.com/type/Test",
      version: "0.1.0",
    })({
      name: S.Array(Ref(Nested)),
    }) {}

    const jsonSchema = toJsonSchema(Schema);
    expectReferenceAnnotation(
      (MUtils.definedOrThrow(jsonSchema.properties).name as MTypes.AnyType)
        .items,
    );
  });

  test("optional references", () => {
    class Nested extends TypedObject({
      typename: "example.com/type/TestNested",
      version: "0.1.0",
    })({
      name: S.String,
    }) {}
    class Schema extends TypedObject({
      typename: "example.com/type/Test",
      version: "0.1.0",
    })({
      name: S.optional(Ref(Nested)),
    }) {}
    const jsonSchema = toJsonSchema(Schema);
    expectReferenceAnnotation(
      MUtils.definedOrThrow(jsonSchema.properties?.name),
    );
  });

  test("regular objects are not annotated", () => {
    const object = S.Struct({ name: S.Struct({ name: S.String }) });
    const jsonSchema = toJsonSchema(object);
    expect(getMosesProp(jsonSchema)).to.be.undefined;
    expect(getMosesProp(MUtils.definedOrThrow(jsonSchema.properties?.name))).to
      .be.undefined;
  });

  test("annotations", () => {
    class Schema extends TypedObject({
      typename: "example.com/type/Contact",
      version: "0.1.0",
    })({
      name: S.String.annotations({ description: "Person name", title: "Name" }),
      email: S.String.annotations({
        description: "Email address",
        [FormatAnnotationId]: "email",
      }),
    }) {}
    const jsonSchema = toJsonSchema(Schema);
    expect(jsonSchema).to.deep.eq({
      $schema: "http://json-schema.org/draft-07/schema#",
      $id: "e2n:type:example.com/type/Contact",

      entityKind: EntityKind.Object,
      typename: "example.com/type/Contact",
      version: "0.1.0",

      type: "object",
      required: ["name", "email", "id"],
      properties: {
        id: { type: "string" },
        name: { type: "string", title: "Name", description: "Person name" },
        email: {
          type: "string",
          description: "Email address",
          format: "email",
        },
      },
      propertyOrder: ["name", "email", "id"],
      additionalProperties: false,
    });
  });

  test("Contact schema serialization", () => {
    const schema = toJsonSchema(Contact);
    expect(Object.keys(MUtils.definedOrThrow(schema.properties))).toEqual([
      "id",
      "name",
      "username",
      "email",
      "tasks",
      "address",
    ]);
  });

  test("reference property by ref", () => {
    class Org extends TypedObject({
      typename: "example.com/type/Org",
      version: "0.1.0",
    })({
      field: S.String,
    }) {}

    class Contact extends TypedObject({
      typename: "example.com/type/Contact",
      version: "0.1.0",
    })({
      name: S.String,
      org: Ref(Org).annotations({ description: "Contact organization" }),
    }) {}

    const jsonSchema = toJsonSchema(Contact);
    expect(jsonSchema).toEqual({
      $schema: "http://json-schema.org/draft-07/schema#",
      $id: "e2n:type:example.com/type/Contact",

      entityKind: EntityKind.Object,
      typename: "example.com/type/Contact",
      version: "0.1.0",

      type: "object",
      additionalProperties: false,

      properties: {
        id: {
          type: "string",
        },
        name: {
          type: "string",
        },
        org: {
          $id: "/schemas/moses/ref",
          description: "Contact organization",
          reference: {
            schema: {
              $ref: "e2n:type:example.com/type/Org",
            },
            schemaVersion: "0.1.0",
          },
        },
      },
      required: ["name", "org", "id"],
      propertyOrder: ["name", "org", "id"],
    });
  });

  test("add reference property", () => {
    class Org extends TypedObject({
      typename: "example.com/type/Org",
      version: "0.1.0",
    })({
      field: S.String,
    }) {}

    class Contact extends TypedObject({
      typename: "example.com/type/Contact",
      version: "0.1.0",
    })({
      name: S.String,
      org: Ref(Org).annotations({ description: "Contact organization" }),
    }) {}

    const jsonSchema = toJsonSchema(Contact);
    setSchemaProperty(
      jsonSchema,
      "employer" as JsonProp,
      createSchemaReference(Org.typename),
    );
    const { typename } =
      getSchemaReference(
        getSchemaProperty(jsonSchema, "employer" as JsonProp) ?? {},
      ) ?? {};
    expect(typename).to.eq(Org.typename);
  });

  const expectReferenceAnnotation = (object: JsonSchemaType) => {
    expect(object.reference).to.deep.eq({
      schema: {
        $ref: "e2n:type:example.com/type/TestNested",
      },
      schemaVersion: "0.1.0",
    });
  };
});

describe("json-to-effect", () => {
  describe("field schema", () => {
    test("email", () => {
      expect(toJsonSchema(Email)).to.deep.eq({
        $schema: "http://json-schema.org/draft-07/schema#",
        type: "string",
        format: "email",
        title: "Email",
        description: "Email address",
        // TODO(ben): omit pattern.
        pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
      });
    });
  });
  //
  // for (const partial of [false, true]) {
  //   test('deserialized equals original', () => {
  //     class Org extends TypedObject({ typename: 'example.com/type/Org', version: '0.1.0' })({
  //       field: S.String,
  //     }) {}
  //
  //     class Schema extends TypedObject({ typename: 'example.com/type/Test', version: '0.1.0' })(
  //       {
  //         string: S.String,
  //         number: S.Number.pipe(PropertyMeta('e2.test', { is_date: true })),
  //         boolean: S.Boolean,
  //         array: S.Array(S.String),
  //         twoDArray: S.Array(S.Array(S.String)),
  //         record: S.Record({ key: S.String, value: S.Number }),
  //         object: S.Struct({ id: S.String, field: Ref(Org) }),
  //         mosesObject: Ref(Org),
  //         mosesObjectArray: S.Array(Ref(Org)),
  //         email: S.String.annotations({ [FormatAnnotationId]: 'email' }),
  //         null: S.Null,
  //       },
  //       partial ? { partial } : {},
  //     ) {}
  //
  //     const jsonSchema = toJsonSchema(Schema);
  //     // console.log(JSON.stringify(jsonSchema, null, 2));
  //     const schema = toEffectSchema(jsonSchema);
  //
  //     expect(() => expect(schema.ast).to.deep.eq(Schema.ast)).to.throw();
  //     expect(() => expect(prepareAstForCompare(schema.ast)).to.deep.eq(Schema.ast)).to.throw();
  //     expect(() => expect(schema.ast).to.deep.eq(prepareAstForCompare(Schema.ast))).to.throw();
  //     // log.info('', { original: prepareAstForCompare(Schema.ast), deserialized: prepareAstForCompare(schema.ast) });
  //     expect(prepareAstForCompare(schema.ast)).to.deep.eq(prepareAstForCompare(Schema.ast));
  //
  //     // TODO(ben): Fix.
  //     // expect(
  //     //   AST.getPropertySignatures(schema.ast).find((prop) => prop.name === 'email')!.type.annotations[
  //     //     FormatAnnotationId
  //     //   ],
  //     // ).toEqual('email');
  //   });
  // }

  test("legacy schema with e2n:type $id gets decoded", () => {
    const jsonSchema: JsonSchemaType = {
      $id: "e2n:type:example.com/type/Project",
      $schema: "http://json-schema.org/draft-07/schema#",
      additionalProperties: false,
      moses: {
        type: {
          schemaId: "01JERV1HQCQZDQ4NVCJ42QB38F",
          typename: "example.com/type/Project",
          version: "0.1.0",
        },
      },
      properties: {
        description: {
          type: "string",
        },
        id: {
          type: "string",
        },
        name: {
          moses: {
            generator: "commerce.productName",
          },
          type: "string",
        },
      },
      required: ["id"],
      type: "object",
      version: "0.1.0",
    };

    const schema = toEffectSchema(jsonSchema);
    expect(getObjectAnnotation(schema)).to.deep.eq({
      kind: EntityKind.Object,
      typename: "example.com/type/Project",
      version: "0.1.0",
    });
    expect(getMosesIdentifierAnnotation(schema)).to.deep.eq(
      "e2n:moses:@:01JERV1HQCQZDQ4NVCJ42QB38F",
    );
  });

  test("symbol annotations get compared", () => {
    const schema1 = S.String.annotations({ [FormatAnnotationId]: "email" });
    const schema2 = S.String.annotations({ [FormatAnnotationId]: "currency" });

    expect(prepareAstForCompare(schema1.ast)).not.to.deep.eq(
      prepareAstForCompare(schema2.ast),
    );
  });

  const prepareAstForCompare = (obj: AST.AST): MTypes.AnyType =>
    deepMapValues(obj, (value: MTypes.AnyType, recurse, _key) => {
      if (typeof value === "function") {
        return null;
      }

      // Convert symbols to strings.
      if (typeof value === "object") {
        const clone = { ...value };
        for (const sym of Object.getOwnPropertySymbols(
          clone as MTypes.AnyType,
        )) {
          clone[sym.toString()] = clone[sym];
          delete clone[sym];
        }
        return recurse(clone);
      }

      return recurse(value);
    });
});
