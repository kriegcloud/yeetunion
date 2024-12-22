import * as S from "@effect/schema/Schema";

/**
 * @category Primitives
 * @since 0.1.0
 */
const Dte = S.Date;
export type Date = S.Schema.Type<typeof Dte>;
