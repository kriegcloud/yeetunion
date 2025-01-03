import { inferRouterOutputs } from "@trpc/server";
import { createCallerFactory, createRouter } from "./trpc";
import {userRouter} from "@/routers/user-router";

export const appRouter = createRouter({
 users: userRouter,
});
export type AppRouter = typeof appRouter;

export type RouterOutputs = inferRouterOutputs<typeof appRouter>;

export const createCaller = createCallerFactory(appRouter);

export { createTRPCContext } from "./trpc";
