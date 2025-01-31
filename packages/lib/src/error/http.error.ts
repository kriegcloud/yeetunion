import { Data } from "effect";
import { StatusCodes } from "http-status-codes";

export namespace HttpErrors {
  export class BadRequestError extends Data.TaggedError("BadRequestError")<{
    message: string
  }> {
    readonly status = StatusCodes.BAD_REQUEST;
  }

  export class InternalServerError extends Data.TaggedError(
    "InternalServerError",
  )<{
    message: string
  }> {
    readonly status = StatusCodes.BAD_REQUEST;
  }

  export class NotImplementedError extends Data.TaggedError(
    "NotImplementedError",
  )<{
    message: string
  }> {
    readonly status = StatusCodes.BAD_REQUEST;
  }

  export class BadGatewayError extends Data.TaggedError("BadGatewayError") {
    readonly status = StatusCodes.BAD_REQUEST;
  }

  export class ServiceUnavailableError extends Data.TaggedError(
    "ServiceUnavailableError",
  )<{
    message: string
  }> {
    readonly status = StatusCodes.BAD_REQUEST;
  }

  export class GatewayTimeoutError extends Data.TaggedError(
    "GatewayTimeoutError",
  )<{
    message: string
  }> {
    readonly status = StatusCodes.BAD_REQUEST;
  }

  export class UnauthorizedError extends Data.TaggedError(
    "UnauthorizedError",
  )<{
    message: string
  }> {
    readonly status = StatusCodes.BAD_REQUEST;
  }

  export class ForbiddenError extends Data.TaggedError("ForbiddenError")<{
    message: string
  }> {
    readonly status = StatusCodes.BAD_REQUEST;
  }

  export class NotFoundError extends Data.TaggedError("NotFoundError")<{
    message: string
  }> {
    readonly status = StatusCodes.BAD_REQUEST;
  }

  export class MethodNotSupportedError extends Data.TaggedError(
    "MethodNotSupportedError",
  )<{
    message: string
  }> {
    readonly status = StatusCodes.BAD_REQUEST;
  }

  export class TimeoutError extends Data.TaggedError("TimeoutError")<{
    message: string
  }> {
    readonly status = StatusCodes.BAD_REQUEST;
  }

  export class ConflictError extends Data.TaggedError("ConflictError")<{
    message: string
  }> {
    readonly status = StatusCodes.BAD_REQUEST;
  }

  export class PreconditionFailedError extends Data.TaggedError(
    "PreconditionFailedError",
  )<{
    message: string
  }> {
    readonly status = StatusCodes.BAD_REQUEST;
  }

  export class PayloadTooLargeError extends Data.TaggedError(
    "PayloadTooLargeError",
  )<{
    message: string
  }> {
    readonly status = StatusCodes.BAD_REQUEST;
  }

  export class UnsupportedMediaTypeError extends Data.TaggedError(
    "UnsupportedMediaTypeError",
  )<{
    message: string
  }> {
    readonly status = StatusCodes.BAD_REQUEST;
  }

  export class UnprocessableContentError extends Data.TaggedError(
    "UnprocessableContentError",
  )<{
    message: string
  }> {
    readonly status = StatusCodes.BAD_REQUEST;
  }

  export class TooManyRequestsError extends Data.TaggedError(
    "TooManyRequestsError",
  )<{
    message: string
  }> {
    readonly status = StatusCodes.BAD_REQUEST;
  }

  export class TRPCClientError extends Data.TaggedError("TRPCClientError")<{
    message: string
  }> {
    readonly status = StatusCodes.BAD_REQUEST;
  }
}