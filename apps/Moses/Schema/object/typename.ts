import type * as MTypes from "../../Types";
/**
 * @since 0.1.0
 */
import { invariant } from "../../invariant";

/**
 * @since 0.1.0
 * @category models
 */
export const MOSES_ATTR_TYPE = "@type";

/**
 * @since 0.1.0
 * @category models
 * Querying the typename of the object.
 * The typename is the raw string without a version: `example.com/type/Contact`.
 */
// TODO(ben): Convert to E2N.
export const TYPENAME_SYMBOL = Symbol.for("@moses/schema/Typename");

/**
 * @since 0.1.0
 * @category models
 * Gets the typename of the object without the version.
 */
// TODO(ben): Convert to E2N.
export const getTypename = (obj: MTypes.BaseObject): string | undefined => {
  let typename = (obj as MTypes.AnyType)[TYPENAME_SYMBOL];

  if (typename === undefined) {
    typename = obj[MOSES_ATTR_TYPE];
  }

  if (typename === undefined) {
    return undefined;
  }
  invariant(typeof typename === "string");
  invariant(!typename.startsWith("e2n:"));
  invariant(!typename.includes("@"));
  return typename;
};
