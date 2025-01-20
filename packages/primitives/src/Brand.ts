/**
 * @since 0.1.0
 * @category primitives
 */
import { Schema as S } from "effect"

/**
 * @since 0.1.0
 * @category primitives
 */
export const Brand = <T extends `@ye/${string}`>(str: T) =>
  S.brand(str)

