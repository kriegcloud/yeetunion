/**
 * @category primitives
 * @since 0.1.0
 */
import {NonEmptyTrimStr} from "./NonEmptyStr.js";
import { Schema as S } from "effect";

/**
 * @category primitives
 * @since 0.1.0
 */
export const Hex = NonEmptyTrimStr.pipe(
  S.pattern(/^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6}|[a-fA-F0-9]{4}|[a-fA-F0-9]{8})$/)
)

/**
 * @category primitives
 * @since 0.1.0
 */
export type Hex = typeof Hex.Type;

/**
 * @category primitives
 * @since 0.1.0
 */
export default {
  Hex
}