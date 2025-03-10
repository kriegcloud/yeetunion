/**
 * @since 0.1.0
 * @category Predicates
 * @param value
 */
export const isNonNullable = <T>(value: T | null | undefined): value is T =>
  value != null;
