import { describe, expect, test } from "vitest";

import * as S from "effect/Schema";
import * as AST from "effect/SchemaAST";

import { TypedObject } from "./typed-object";

class Org extends TypedObject({
  typename: "example.com/type/Org",
  version: "0.1.0",
})({
  name: S.String,
}) {}

describe("MosesObject class DSL", () => {
  test("type is a valid schema", async () => {
    expect(S.isSchema(Org)).to.be.true;
  });

  test("static typename accessor", async () => {
    expect(Org.typename).to.eq("example.com/type/Org");
  });

  test("expect constructor to throw", async () => {
    expect(() => new Org()).to.throw();
  });

  test("expect schema", async () => {
    expect(AST.isTypeLiteral(Org.ast)).to.be.true;
  });
});
