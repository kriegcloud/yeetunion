import * as S from "effect/Schema";
export const BasePropSchema = S.Struct({
  name: S.NonEmptyTrimmedString,
  label: S.NonEmptyString,
});

export const EffectAnnotationsBase = S.Struct({
  identifier: S.NonEmptyTrimmedString,
  title: S.NonEmptyString,
});
export type EffectAnnotationsBase = typeof EffectAnnotationsBase.Type;

export const BaseAnnotationsFromProps = S.transform(
  S.Struct({ props: BasePropSchema }),
  EffectAnnotationsBase,
  {
    strict: true,
    decode: (i) => ({
      identifier: i.props.name,
      title: i.props.label,
    }),
    encode: (i) => ({
      props: {
        name: i.identifier,
        label: i.title,
      },
    }),
  },
);
