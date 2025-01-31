import { userRouter } from "./routers/user-router";
import { createCallerFactory, createRouter } from "./trpc";

export const appRouter = createRouter({
  users: userRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);

export { createTRPCContext } from "./trpc";
