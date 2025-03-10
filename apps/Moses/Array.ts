import * as A from "effect/Array";
import * as F from "effect/Function";
import * as O from "effect/Option";
import * as MTypes from "./Types";
/**
 * get an element at an index and return Option<T>
 * @since 0.1.0
 * @category Utils
 */
export const getter =
  <A>(self: ReadonlyArray<A>): MTypes.OneArgFunction<number, O.Option<A>> =>
  (index) =>
    A.get(self, index);

/**
 * Get an element at an index or Throw
 * @since 0.1.0
 * @category Utils
 */
export const getOrThrow =
  <A>(self: ReadonlyArray<A>): MTypes.OneArgFunction<number, A> =>
  (index) =>
    getter(self)(index).pipe(O.getOrThrow);

/**
 * @since 0.1.0
 * @category Utils
 * An `Option`-based `.at()` that supports negative indices.
 * Returns `O.none` if out of range, otherwise `O.some(element)`.
 */
export const at =
  <A>(index: number) =>
  (arr: ReadonlyArray<A>): O.Option<A> => {
    const len = arr.length;
    // implement negative indexing
    const actualIndex = index >= 0 ? index : len + index;
    if (actualIndex < 0 || actualIndex >= len) {
      return O.none();
    }
    return O.some(getOrThrow(arr)(actualIndex));
  };

/**
 * @since 0.1.0
 * @category Utils
 * A "throwing" version of `at`. If `index` is out of range, it throws;
 * otherwise returns the element at `index`.
 *
 * Equivalent to `arr.at(index)!` but *type-safe* with no `!` needed.
 */
export const atOrThrow =
  <A>(index: number) =>
  (arr: ReadonlyArray<A>): A =>
    F.pipe(at<A>(index)(arr), O.getOrThrow);
