import { describe, test } from "vitest";

import * as S from "effect/Schema";

import { toJsonSchema } from "../JSON";
import { Format } from "./format";
import { FormatEnum, TypeEnum, getTypeEnum } from "./types";

describe("formats", () => {
  test("annotations", ({ expect }) => {
    const TestSchema = S.Struct({
      name: S.String,
      email: S.optional(Format.Email),
      salary: S.optional(Format.Currency({ decimals: 2, code: "usd" })),
      website: S.optional(Format.URL),
      birthday: S.optional(Format.Date),
      started: S.optional(Format.DateTime),
      active: S.optional(S.Boolean),
    }).pipe(S.mutable);

    type TestType = S.Schema.Type<typeof TestSchema>;

    const jsonSchema = toJsonSchema(TestSchema);

    const data: TestType = {
      name: "Alice",
      email: "alice@example.com",
      birthday: "1999-06-11",
    };

    const validate = S.validateSync(TestSchema);
    validate(data);

    {
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      const prop = jsonSchema.properties!["active" as const];
      // @ts-ignore
      expect(getTypeEnum(prop)).to.eq(TypeEnum.Boolean);
      expect(prop).includes({
        type: TypeEnum.Boolean,
      });
    }

    {
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      const prop = jsonSchema.properties!["email" as const];
      // @ts-ignore
      expect(getTypeEnum(prop)).to.eq(TypeEnum.String);
      expect(prop).includes({
        type: TypeEnum.String,
        format: FormatEnum.Email,
        title: "Email",
      });
    }

    {
      const prop = jsonSchema.properties?.["salary" as const];
      // @ts-ignore
      expect(getTypeEnum(prop)).to.eq(TypeEnum.Number);
      expect(prop).includes({
        type: TypeEnum.Number,
        format: FormatEnum.Currency,
        title: "Currency",
        multipleOf: 0.01,
        currency: "USD",
      });
    }

    {
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      const prop = jsonSchema.properties!["birthday" as const];
      // @ts-ignore
      expect(getTypeEnum(prop)).to.eq(TypeEnum.String);
      expect(prop).includes({
        type: TypeEnum.String,
        format: FormatEnum.Date,
      });
    }
  });
});
