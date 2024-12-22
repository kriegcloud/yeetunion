import * as S from "@effect/schema/Schema";
import { BaseUser, Tag$ } from "../schema";

export class DiscordUserResponse extends S.Class<DiscordUserResponse>(
  "DiscordUserResponse",
)({
  _tag: Tag$("DiscordUserResponse"),
  id: S.String.annotations({
    description: "The user's ID (snowflake).",
  }),
  username: S.String.annotations({
    description: "The user's username, not unique across the platform.",
  }),
  discriminator: S.String.annotations({
    description: "The user's Discord-tag.",
  }),
  global_name: S.optionalWith(S.String, {
    nullable: true,
  }).annotations({
    description:
      "The user's display name, if it is set. For bots, this is the application name.",
  }),
  avatar: S.optionalWith(S.String, { nullable: true }).annotations({
    description: "The user's avatar hash.",
  }),
  bot: S.optionalWith(S.Boolean, { nullable: true }).annotations({
    description: "Whether the user belongs to an OAuth2 application.",
  }),
  system: S.optionalWith(S.Boolean, { nullable: true }).annotations({
    description:
      "Whether the user is an Official Discord System user (part of the urgent message system).",
  }),
  mfa_enabled: S.optionalWith(S.Boolean, {
    nullable: true,
  }).annotations({
    description: "Whether the user has two factor enabled on their account.",
  }),
  banner: S.optionalWith(S.String, { nullable: true }).annotations({
    description: "The user's banner hash.",
  }),
  accent_color: S.optionalWith(S.Number, {
    nullable: true,
  }).annotations({
    description:
      "The user's banner color encoded as an integer representation of hexadecimal color code.",
  }),
  locale: S.optionalWith(S.String, { nullable: true }).annotations({
    description: "The user's chosen language option.",
  }),
  verified: S.optionalWith(S.Boolean, {
    nullable: true,
  }).annotations({
    description: "Whether the email on this account has been verified.",
  }),
  email: S.optionalWith(S.String, { nullable: true }).annotations({
    description: "The user's email.",
  }),
  flags: S.optionalWith(S.Number, { nullable: true }).annotations({
    description: "The flags on a user's account.",
  }),
  premium_type: S.optionalWith(S.Number, {
    nullable: true,
  }).annotations({
    description: "The type of Nitro subscription on a user's account.",
  }),
  public_flags: S.optionalWith(S.Number, {
    nullable: true,
  }).annotations({
    description: "The public flags on a user's account.",
  }),
}) {}

export class DiscordUser extends BaseUser.extend<DiscordUser>("DiscordUser")({
  _tag: Tag$("DiscordUser"),

  username: S.String.annotations({
    description: "The user's username.",
  }),
  discordTag: S.String.annotations({
    description: "The user's Discord-tag.",
  }),
  displayName: S.optionalWith(S.String, {
    nullable: true,
  }).annotations({
    description: "The user's display name.",
  }),
  bot: S.optionalWith(S.Boolean, { nullable: true }).annotations({
    description: "Whether the user belongs to an OAuth2 application.",
  }),
  system: S.optionalWith(S.Boolean, { nullable: true }).annotations({
    description: "Whether the user is an Official Discord System user.",
  }),
  locale: S.optionalWith(S.String, { nullable: true }).annotations({
    description: "The user's chosen language option.",
  }),
  emailVerified: S.optionalWith(S.Boolean, {
    nullable: true,
  }).annotations({
    description: "Whether the email on this account has been verified.",
  }),
}) {}
