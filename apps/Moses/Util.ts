import * as F from "effect/Function";
import * as O from "effect/Option";
import * as MArray from "./Array";
import * as MTypes from "./Types";
/**
 * @since 0.1.0
 */
import { invariant } from "./invariant";

/**
 * @category Utils
 * @since 0.1.0
 * Initialize a deeply nested object.
 * @returns The value of the prop after assignment.
 */
export const setDeep = <T>(
  obj: MTypes.AnyType,
  path: readonly (string | number)[],
  value: T,
): T => {
  invariant(path.length > 0);
  let parent = obj;
  for (const key of path.slice(0, -1)) {
    if (parent[key] === undefined) {
      const isArrayIndex = !Number.isNaN(Number(key));
      parent[key] = isArrayIndex ? [] : {};
    }
    parent = parent[key];
  }

  parent[MArray.atOrThrow<string | number>(-1)(path)] = value;
  return obj;
};

/**
 * @category Utils
 * @since 0.1.0
 * Gets a value from a deeply nested object.
 * @param obj
 * @param path
 * @returns The value of the prop if it exists, otherwise undefined.
 */
export const getDeep = <T>(
  obj: MTypes.AnyType,
  path: readonly (string | number)[],
): T | undefined => {
  let parent = obj;
  for (const key of path) {
    parent = parent?.[key];
  }

  return parent;
};

/**
 * @category Utils
 * @since 0.1.0
 * Type for Get or set map value.
 */
interface IMap<K, V> {
  get(key: K): V | undefined;
  set(key: K, value: V): this;
}

/**
 * @category Utils
 * @since 0.1.0
 * Get or set map value.
 */
export const defaultMap = <K, V>(
  map: IMap<K, V>,
  key: K,
  def: V | (() => V),
) => {
  let value = map.get(key);
  if (value === undefined) {
    value = typeof def === "function" ? (def as () => V)() : def;
    map.set(key, value);
  }

  return value;
};

/**
 * @category Utils
 * @since 0.1.0
 * @param obj
 * @param order
 */
export const orderKeys = <O extends NonNullable<unknown>>(
  obj: O,
  order: (keyof O)[],
): O => {
  const ordered: Partial<O> = {};
  for (const key of order) {
    if (key in obj) {
      ordered[key] = obj[key];
    }
  }
  for (const key in obj) {
    if (!(key in ordered)) {
      ordered[key] = obj[key];
    }
  }
  return ordered as O;
};

export const definedOrThrow = <A>(self?: A): A =>
  F.pipe(O.fromNullable(self), O.getOrThrow);
