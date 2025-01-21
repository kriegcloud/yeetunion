/**
 * @since 0.1.0
 * @category primitives
 */
import { Schema as S } from "effect";
/**
 * @since 0.1.0
 * @category primitives
 */
export declare const Brand: <T extends `@ye/${string}`>(
  str: T,
) => (self: S.Schema.AnyNoContext) => S.brand<S.Schema.AnyNoContext, T>;
//# sourceMappingURL=Brand.d.ts.map
