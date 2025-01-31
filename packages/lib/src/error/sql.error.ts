import { Data } from "effect";

export class EmptyQueryError extends Data.TaggedError("EmptyQueryError")<{
  message?: string;
}> {
  constructor(message = "No rows matching query") {
    super({ message });
  }
}