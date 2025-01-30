import {createRouter, protectedProcedure, TRPCContext} from "../trpc";
import {Effect} from "effect";
import {Result} from "../result";
import {ServerRuntime} from "../runtime";

export const userRouter = createRouter({
  me: protectedProcedure.query(({ctx}) => {
    return Effect.gen(function* () {
      const context = yield* TRPCContext;

      return Result.ok(context.session?.user ?? null);
    }).pipe(
      Effect.withSpan("userRouter.me"),
      TRPCContext.provide(ctx),
      ServerRuntime.runPromise,
    );
  }),
});
