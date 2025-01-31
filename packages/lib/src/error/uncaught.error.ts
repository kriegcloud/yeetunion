import {Data} from "effect";

export class UncaughtError extends Data.TaggedError("UncaughtError")<{
  message: string;
}> {
}