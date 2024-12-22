import * as S from "@effect/schema/Schema";

/**
 * @category Primitives
 * @since 0.1.0
 */
const Bool = S.Boolean;
export type Bool = S.Schema.Type<typeof Bool>;

/**
 * @category Primitives
 * @since 0.1.0
 */
const TrueBool = Bool.pipe(
  S.propertySignature,
  S.withConstructorDefault(() => true),
);
export type TrueBool = S.Schema.Type<typeof TrueBool>;
