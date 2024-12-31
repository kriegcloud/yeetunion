import {createRouter, publicProcedure, TRPCContext} from "@/trpc";
import {Effect} from "effect";
import {Db} from "@ye/db/client";
import {ServerRuntime} from "@/runtime";


export const postRouter = createRouter({
  list: publicProcedure.query(({ ctx }) => {
    return Effect.gen(function* (_) {
      const { db } = yield* Db;
      return yield* db.use({
        fn: async (client) => {
          return await client.query.Session.findFirst({
            where: (session, { eq, and }) =>
              and(
                eq(session.sessionToken, "beep"),
              ),
          });
        },
        spanName: "getSession",
      })
    }).pipe(
      Effect.withSpan("auth.list"),
      TRPCContext.provide(ctx),

      ServerRuntime.runPromise
    )
  }),
});

