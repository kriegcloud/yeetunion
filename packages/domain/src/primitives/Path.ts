/**
 * @since 0.1.0
 * @category primitives
 */
import { Schema as S } from "effect";
import { NonEmptyTrimStr } from "./NonEmptyStr";
/**
 * @since 0.1.0
 * @category primitives
 */
export const NextPath = NonEmptyTrimStr.pipe(
  S.startsWith("/"),
);
/**
 * @since 0.1.0
 * @category primitives
 */
export type NextPath = typeof NextPath.Type;

/**
 * @since 0.1.0
 * @category primitives
 */
export default {
  NextPath,
};
