import * as S from "@effect/schema/Schema";

export class BaseUser extends S.Class<BaseUser>("BaseUser")({
  id: S.String.annotations({
    description: "The user ID.",
  }),
  email: S.optionalWith(S.String, { nullable: true }).annotations({
    description: "The user's email.",
  }),
  pictureUrl: S.optionalWith(S.String, {
    nullable: true,
  }).annotations({
    description: "The user's avatar URL.",
  }),
}) {}

export const Tag$ = <A extends string>(tag: A) =>
  S.optionalWith(S.Literal(tag), { default: () => tag });
