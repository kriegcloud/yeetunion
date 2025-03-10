import { isSome } from "effect/Option";
import * as S from "effect/Schema";
/**
 * @since 0.1.0
 */
import * as MTypes from "./Types";

import { invariant } from "./invariant";

/**
 * @since 0.1.0
 * @category JSON
 */
export type JsonProp = string & { __JsonPath: true; __JsonProp: true };
/**
 * @since 0.1.0
 * @category JSON
 */
export type JsonPath = string & { __JsonPath: true };
/**
 * @since 0.1.0
 * @category REGEX
 */
const PATH_REGEX = /^($|[a-zA-Z_$][\w$]*(?:\.[a-zA-Z_$][\w$]*|\[\d+]\.?)*$)/;
/**
 * @since 0.1.0
 * @category REGEX
 */
const PROP_REGEX = /\w+/;

/**
 * @since 0.1.0
 * @category JSON
 * https://www.ietf.org/archive/id/draft-goessner-dispatch-jsonpath-00.html
 */
export const JsonPath = S.String.pipe(
  S.pattern(PATH_REGEX),
) as MTypes.AnyType as S.Schema<JsonPath>;
/**
 * @since 0.1.0
 * @category JSON
 */
export const JsonProp = S.NonEmptyString.pipe(
  S.pattern(PROP_REGEX),
) as MTypes.AnyType as S.Schema<JsonProp>;
/**
 * @since 0.1.0
 * @category JSON
 */
export const isJsonPath = (value: unknown): value is JsonPath => {
  return isSome(S.validateOption(JsonPath)(value));
};

/**
 * @since 0.1.0
 * @category JSON
 * Creates a JsonPath from an array of path segments.
 *
 * Currently, supports:
 * - Simple property access (e.g., 'foo.bar')
 * - Array indexing with non-negative integers (e.g., 'foo[0]')
 * - Identifiers starting with letters, underscore, or $ (e.g., '$foo', '_bar')
 * - Dot notation for nested properties (e.g., 'foo.bar.baz')
 *
 * Does not support (yet?).
 * - Recursive descent (…)
 * - Wildcards (*)
 * - Array slicing
 * - Filters
 * - Negative indices
 *
 * @param path Array of string or number segments
 * @returns Valid JsonPath or undefined if invalid
 */
export const createJsonPath = (path: (string | number)[]): JsonPath => {
  const candidatePath = path
    .map((p, i) => {
      if (typeof p === "number") {
        return `[${p}]`;
      }
      return i === 0 ? p : `.${p}`;
    })
    .join("");

  invariant(isJsonPath(candidatePath), `Invalid JsonPath: ${candidatePath}`);
  return candidatePath;
};

/**
 * @since 0.1.0
 * @category JSON
 * Converts an Effect validation path format (e.g. "addresses.[0].zip")
 * to JsonPath format (e.g. "addresses[0].zip")
 */
export const fromEffectValidationPath = (effectPath: string): JsonPath => {
  // Handle array notation: convert "prop.[0]" to "prop[0]"
  const jsonPath = effectPath.replace(/\.\[(\d+)]/g, "[$1]");
  invariant(isJsonPath(jsonPath), `Invalid JsonPath: ${jsonPath}`);
  return jsonPath;
};

/**
 * @since 0.1.0
 * @category JSON
 * Splits a JsonPath into its constituent parts.
 * Handles property access and array indexing.
 */
export const splitJsonPath = (path: JsonPath): string[] => {
  if (!isJsonPath(path)) {
    return [];
  }

  return (
    path
      .match(/[a-zA-Z_$][\w$]*|\[\d+]/g)
      ?.map((part) =>
        part.startsWith("[") ? part.replace(/[[\]]/g, "") : part,
      ) ?? []
  );
};
