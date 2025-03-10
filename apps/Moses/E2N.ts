import type { InspectOptionsStylized, inspect } from "node:util";
/**
 * @since 0.1.0
 */
import * as MDebug from "./Debug";
import { invariant } from "./invariant";

/**
 * @category Models
 * @since 0.1.0
 * E2N unambiguously names a resource like a MOSES object, schema definition, plugin, etc.
 * Each E2N starts with a e2 prefix, followed by a resource kind.
 * Colon Symbol: is used as a delimiter between parts.
 * E2Ns may contain slashes.
 * '@' in the place of the space id is used to denote that the E2N should be resolved in the local space.
 *
 * @example
 *
 * ```
 * // 'e2:moses:<space key>:<moses id>'
 * e2:moses:BA25QRC2FEWCSAMRP4RZL65LWJ7352CKE:01J00J9B45YHYSGZQTQMSKMGJ6
 * e2:moses:@:01J00J9B45YHYSGZQTQMSKMGJ6
 * e2:type:e2.solutions/type/Calendar
 * e2:plugin:e2.solutions/agent/plugin/functions
 * ```
 */
export class E2N {
  /**
   * Kind constants.
   */
  static kind = Object.freeze({
    TYPE: "type",
    MOSES: "moses",
  });

  static equals(a: E2N, b: E2N) {
    return (
      a.kind === b.kind &&
      a.parts.length === b.parts.length &&
      a.parts.every((part, i) => part === b.parts[i])
    );
  }

  static isE2NString(e2n: string) {
    return e2n.startsWith("e2n:");
  }

  static parse(e2n: string): E2N {
    if (typeof e2n !== "string") {
      throw new Error("Invalid E2N");
    }
    const [prefix, kind, ...parts] = e2n.split(":");
    if (!(prefix === "e2n")) {
      throw new Error("Invalid E2N");
    }
    if (!(typeof kind === "string" && kind.length > 0)) {
      throw new Error("Invalid E2N");
    }
    if (!(parts.length > 0)) {
      throw new Error("Invalid E2N");
    }

    return new E2N(kind, parts);
  }

  /**
   * @example `e2n:type:example.com/type/Contact`
   */
  static fromTypename(type: string) {
    return new E2N(E2N.kind.TYPE, [type]);
  }

  /**
   * @example `e2n:type:example.com/type/Contact:0.1.0`
   */
  static fromTypenameAndVersion(type: string, version: string) {
    return new E2N(E2N.kind.TYPE, [type, version]);
  }

  /**
   * @example `e2n:moses:@:01J00J9B45YHYSGZQTQMSKMGJ6`
   */
  static fromLocalObjectId(id: string) {
    return new E2N(E2N.kind.MOSES, [LOCAL_SPACE_TAG, id]);
  }

  readonly #kind: string;
  readonly #parts: string[];

  constructor(kind: string, parts: string[]) {
    invariant(parts.length > 0);
    invariant(
      parts.every(
        (part) =>
          typeof part === "string" &&
          part.length > 0 &&
          part.indexOf(":") === -1,
      ),
    );

    // Per-type validation.
    switch (kind) {
      case E2N.kind.TYPE:
        if (parts.length > 2) {
          throw new Error('Invalid "type" E2N');
        }
        break;
      case E2N.kind.MOSES:
        if (parts.length !== 2) {
          throw new Error('Invalid "moses" E2N');
        }
        break;
    }

    this.#kind = kind;
    this.#parts = parts;
  }

  get kind() {
    return this.#kind;
  }

  get parts() {
    return this.#parts;
  }

  toTypename() {
    invariant(this.#kind === E2N.kind.TYPE);
    return this.#parts[0];
  }

  hasTypenameOf(typename: string) {
    return (
      this.#kind === E2N.kind.TYPE &&
      this.#parts.length === 1 &&
      this.#parts[0] === typename
    );
  }

  asTypeE2N() {
    if (this.kind !== E2N.kind.TYPE) {
      return undefined;
    }

    return {
      type: this.#parts[0],
      version: this.#parts[1] as string | undefined,
    };
  }

  isLocalObjectId() {
    return (
      this.#kind === E2N.kind.MOSES &&
      this.#parts[0] === LOCAL_SPACE_TAG &&
      this.#parts.length === 2
    );
  }

  toString() {
    return `e2n:${this.#kind}:${this.#parts.join(":")}`;
  }

  /**
   * Used by Node.js to get textual representation of this object when it's printed with a `console.log` statement.
   */
  [MDebug.inspectCustom](
    depth: number,
    options: InspectOptionsStylized,
    inspectFn: typeof inspect,
  ) {
    const printControlCode = (code: number) => {
      return `\x1b[${code}m`;
    };

    invariant(!!inspectFn.colors.blueBright);
    invariant(!!inspectFn.colors.reset);
    return (
      printControlCode(inspectFn.colors.blueBright[0]) +
      this.toString() +
      printControlCode(inspectFn.colors.reset[0])
    );
  }
}

/**
 * @category Models
 * @since 0.1.0
 * Tags for MOSES E2Ns that should resolve the object ID in the local space.
 */
export const LOCAL_SPACE_TAG = "@";
