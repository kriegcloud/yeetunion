import { inferRouterOutputs } from "@trpc/server";
import { authRouter } from "./routers/auth";
import { createCallerFactory, createRouter } from "./trpc";

export const appRouter = createRouter({
  auth: authRouter,
});
export type AppRouter = typeof appRouter;

export type RouterOutputs = inferRouterOutputs<typeof appRouter>;

export const createCaller = createCallerFactory(appRouter);

export { createTRPCContext } from "./trpc";
