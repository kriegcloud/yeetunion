import * as MArray from "./Array";
/**
 * @since 0.1.0
 */
import * as E2N from "./E2N";
import * as ProtoRef from "./ProtoRef";
import * as MTypes from "./Types";

/**
 * Reference to an object in the Moses space.
 * @category Models
 * @since 0.1.0
 */
export type ObjectId = string;

/**
 * Reference to an object in the Moses space.
 * @category Models
 * @since 0.1.0
 */
export class Reference {
  /**
   * Protocol references to runtime registered types.
   */
  static TYPE_PROTOCOL = "BEEPHOLE";

  static fromE2N(e2n: E2N.E2N): Reference {
    switch (e2n.kind) {
      case E2N.E2N.kind.TYPE:
        return new Reference(
          MArray.getOrThrow(e2n.parts)(0),
          Reference.TYPE_PROTOCOL,
          "e2.solutions",
          e2n,
        );
      case E2N.E2N.kind.MOSES:
        if (e2n.parts[0] === E2N.LOCAL_SPACE_TAG) {
          return new Reference(MArray.getOrThrow(e2n.parts)(1));
        }
        return new Reference(
          MArray.getOrThrow(e2n.parts)(1),
          undefined,
          e2n.parts[0],
        );

      default:
        throw new Error(`Unsupported E2N kind: ${e2n.kind}`);
    }
  }

  static fromValue(value: ProtoRef.Reference): Reference {
    return new Reference(value.objectId, value.protocol, value.host);
  }

  /**
   * Reference an object in the local space.
   */
  static localObjectReference(objectId: ObjectId): Reference {
    return new Reference(objectId);
  }

  static fromLegacyTypename(type: string): Reference {
    return new Reference(type, Reference.TYPE_PROTOCOL, "e2.solutions");
  }

  constructor(
    public readonly objectId: ObjectId,
    public readonly protocol?: string,
    public readonly host?: string,
    public readonly e2n?: E2N.E2N,
  ) {}

  encode(): ProtoRef.Reference {
    return {
      objectId: this.objectId,
      host: this.host,
      protocol: this.protocol,
    };
  }

  toE2N(): E2N.E2N {
    if (this.e2n) {
      return this.e2n;
    }

    if (this.protocol === Reference.TYPE_PROTOCOL) {
      return new E2N.E2N(E2N.E2N.kind.TYPE, [this.objectId]);
    }
    if (this.host) {
      // Host is assumed to be the space key.
      // The E2N should actually have the space ID.
      return new E2N.E2N(E2N.E2N.kind.MOSES, [this.host, this.objectId]);
    }
    return new E2N.E2N(E2N.E2N.kind.MOSES, [
      E2N.LOCAL_SPACE_TAG,
      this.objectId,
    ]);
  }
}

/**
 * Reference to an object in the Moses space.
 * @category Models
 * @since 0.1.0
 */
export const REFERENCE_TYPE_TAG = "e2.moses.model.document.Reference";

/**
 * Encoded Reference to an object in the Moses space.
 * @category Models
 * @since 0.1.0
 */
export type EncodedReference = {
  "/": string;
};

/**
 * Encoded Reference to an object in the Moses space.
 * @category Models
 * @since 0.1.0
 */
export const encodeReference = (reference: Reference): EncodedReference => ({
  "/": reference.toE2N().toString(),
});

/**
 * Decodes an encoded reference.
 * @category Models
 * @since 0.1.0
 */
export const decodeReference = (value: MTypes.AnyType) =>
  Reference.fromE2N(E2N.E2N.parse(value["/"]));

/**
 * Checks if a value is an encoded reference.
 * @category Models
 * @since 0.1.0
 */
export const isEncodedReference = (
  value: MTypes.AnyType,
): value is EncodedReference =>
  typeof value === "object" &&
  value !== null &&
  Object.keys(value).length === 1 &&
  typeof value["/"] === "string";
