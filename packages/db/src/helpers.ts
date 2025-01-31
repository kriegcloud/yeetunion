import { Array, Effect, Option } from "effect";
import { EmptyQueryError } from "@ye/lib/error";


export const takeFirstOrThrow =
  <A extends ReadonlyArray<unknown>, E>(msg?: string) =>
    (effect: Effect.Effect<A, E>): Effect.Effect<A[number], E> =>
      effect.pipe(
        Effect.map(Array.head),
        Effect.map(
          Option.getOrThrowWith(() => new EmptyQueryError(msg)),
        ),
      );