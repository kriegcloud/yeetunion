import type { TRPCRouterRecord } from "@trpc/server";

import { invalidateSessionToken } from "@ye/auth";
import { Db } from "@ye/db/client";
import { protectedProcedure, TRPCContext } from "@/trpc";

import {Effect, Layer} from "effect";
import {ServerRuntime} from "@/runtime";
export const authRouter = {
  // getSession: publicProcedure.query(({ ctx }) => {
  //
  //   const fn = Effect.gen(function* () {
  //     const {db} = yield* ctx.Db;
  //
  //     return yield* db.use({
  //       fn: async (client) => {
  //         return await client.query.Session.findFirst({
  //           where: (session, { eq, and }) =>
  //             and(
  //               eq(session.sessionToken, "beep"),
  //             ),
  //         });
  //       },
  //       spanName: "getSession",
  //     });
  //   });
  //
  //
  //   return ctx.session;
  // }),
  list: protectedProcedure.query(() => {
    return Effect.gen(function* () {
      const { db } = yield* Db;
      return db.use({
        fn: async (client) => {
          return await client.query.Session.findFirst({
            where: (session, { eq, and }) =>
              and(
                eq(session.sessionToken, "beep"),
              ),
          });
        },
        spanName: "getSession",
      }).pipe(
        Effect.withSpan("auth.list"),
        ServerRuntime.runPromise
      )
    })
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return "you can see this secret message!";
  }),
  signOut: protectedProcedure.mutation(async (opts) => {
    if (!opts.ctx.token) {
      return { success: false };
    }
    await invalidateSessionToken(opts.ctx.token);
    return { success: true };
  }),
} satisfies TRPCRouterRecord;
