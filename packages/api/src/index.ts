import { authRouter } from "./routers/auth";
import { createCallerFactory, createRouter } from "./trpc";
import { inferRouterOutputs} from "@trpc/server";
import {postRouter} from "@/routers/post";

export const appRouter = createRouter({
  // auth: authRouter,
  post: postRouter,
});

export type RouterOutputs = inferRouterOutputs<typeof appRouter>;

type F = RouterOutputs["post"]["list"][""]






export const createCaller = createCallerFactory(appRouter);



export { createTRPCContext } from "./trpc";
