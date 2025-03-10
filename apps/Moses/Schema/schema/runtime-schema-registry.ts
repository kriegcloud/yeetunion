import * as S from "effect/Schema";

import { raise } from "../../Debug";
import type { E2N } from "../../E2N";
import { getTypenameOrThrow } from "../../Types";
import * as MTypes from "../../Types";
import * as MUtils from "../../Util";
import { getSchemaVersion } from "../AST";
import { StoredSchema } from "./stored-schema";
/**
 * Runtime registry of static schema objects (i.e., not Dynamic.
 */
// TODO(BEEPHOLE!): Reconcile with MosesSchemaRegistry.
export class RuntimeSchemaRegistry {
  // TODO(BEEPHOLE!): Change to TypedObject
  private readonly _schema = new Map<string, S.Schema<MTypes.AnyType>[]>();

  constructor() {
    this._schema.set(StoredSchema.typename, [StoredSchema]);
  }

  // TODO(BEEPHOLE!): Rename types, hasType, etc.
  get schemas(): S.Schema<MTypes.AnyType>[] {
    return Array.from(this._schema.values()).flat();
  }

  // TODO(BEEPHOLE!): TypedObject
  hasSchema<S extends S.Schema<MTypes.AnyType>>(schema: S): boolean {
    const typename = getTypenameOrThrow(schema);
    const arr = this._schema.get(typename);
    return (
      arr?.some((s) => getSchemaVersion(s) === getSchemaVersion(schema)) ??
      false
    );
  }

  getSchemaByE2N(e2n: E2N): S.Schema<MTypes.AnyType> | undefined {
    const components = e2n.asTypeE2N();
    if (!components) {
      return undefined;
    }
    const { type, version } = components;
    const allSchemas = this._schema.get(MUtils.definedOrThrow(type)) ?? [];
    if (version) {
      return allSchemas.find((s) => getSchemaVersion(s) === version);
    }
    // If no version is specified, return the earliest version for backwards compatibility.
    // TODO(ben): Probably not correct to compare lexicographically, but it's good enough for now.
    return allSchemas.sort((a, b) =>
      (getSchemaVersion(a) ?? "0.0.0").localeCompare(
        getSchemaVersion(b) ?? "0.0.0",
      ),
    )[0];
  }

  getSchema(typename: string): S.Schema<MTypes.AnyType> | undefined {
    return this._schema.get(typename)?.[0];
  }
  addSchema(types: S.Schema<MTypes.AnyType>[]) {
    types.forEach((schema) => {
      const typename = getTypenameOrThrow(schema);
      const version =
        getSchemaVersion(schema) ??
        raise(new TypeError("Schema has no version."));
      const arr = MUtils.defaultMap(this._schema, typename, () => []);
      if (arr.some((s) => getSchemaVersion(s) === version)) {
        throw new Error(
          `Schema version already registered: ${typename}:${version}`,
        );
      }

      arr.push(schema);
    });
  }
}
