import { Data } from "effect";

export namespace ClientErrors {
  export class BadRequestError extends Data.TaggedError("BadRequestError") {}

  export class InternalServerError extends Data.TaggedError(
    "InternalServerError",
  ) {}

  export class NotImplementedError extends Data.TaggedError(
    "NotImplementedError",
  ) {}

  export class BadGatewayError extends Data.TaggedError("BadGatewayError") {}

  export class ServiceUnavailableError extends Data.TaggedError(
    "ServiceUnavailableError",
  ) {}

  export class GatewayTimeoutError extends Data.TaggedError(
    "GatewayTimeoutError",
  ) {}

  export class UnauthorizedError extends Data.TaggedError(
    "UnauthorizedError",
  ) {}

  export class ForbiddenError extends Data.TaggedError("ForbiddenError") {}

  export class NotFoundError extends Data.TaggedError("NotFoundError") {}

  export class MethodNotSupportedError extends Data.TaggedError(
    "MethodNotSupportedError",
  ) {}

  export class TimeoutError extends Data.TaggedError("TimeoutError") {}

  export class ConflictError extends Data.TaggedError("ConflictError") {}

  export class PreconditionFailedError extends Data.TaggedError(
    "PreconditionFailedError",
  ) {}

  export class PayloadTooLargeError extends Data.TaggedError(
    "PayloadTooLargeError",
  ) {}

  export class UnsupportedMediaTypeError extends Data.TaggedError(
    "UnsupportedMediaTypeError",
  ) {}

  export class UnprocessableContentError extends Data.TaggedError(
    "UnprocessableContentError",
  ) {}

  export class TooManyRequestsError extends Data.TaggedError(
    "TooManyRequestsError",
  ) {}

  export class TRPCClientError extends Data.TaggedError("TRPCClientError") {}
}
