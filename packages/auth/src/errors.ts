import * as S from "@effect/schema/Schema";
import type { UnknownException } from "effect/Cause";

export class NetworkError extends S.TaggedError<NetworkError>()(
  "@dank/auth/error/NetworkError",
  {
    cause: S.instanceOf(Error),
  },
) {}

export class InvalidResponseError extends S.TaggedError<InvalidResponseError>()(
  "@dank/auth/error/InvalidResponseError",
  {
    cause: S.instanceOf(Error),
  },
) {}

export class OauthRequestError extends S.TaggedError<OauthRequestError>()(
  "@dank/auth/error/OauthRequestError",
  {
    message: S.String,
    name: S.String,
    code: S.String,
    description: S.optionalWith(S.String, { nullable: true }),
    uri: S.optionalWith(S.String, { nullable: true }),
    state: S.optionalWith(S.String, { nullable: true }),
    cause: S.instanceOf(Error),
  },
) {}
export type OauthCodeValidationError =
  | NetworkError
  | InvalidResponseError
  | OauthRequestError
  | UnknownException;

export class LoginTimeout extends S.TaggedError<LoginTimeout>()(
  "@dank/auth/error/LoginTimeout",
  {
    message: S.optionalWith(S.String, {
      default: () => "Login Timeout. Please try logging in again.",
    }),
  },
) {}

export class InvalidState extends S.TaggedError<InvalidState>()(
  "@dank/auth/error/InvalidState",
  {
    message: S.optionalWith(S.String, {
      default: () => "Invalid state, please try to login again.",
    }),
  },
) {}
