import * as S from "@effect/schema/Schema";

/**
 * @category Primitives
 * @since 0.1.0
 */
const Decimal = S.Number;
export type Decimal = S.Schema.Type<typeof Decimal>;
