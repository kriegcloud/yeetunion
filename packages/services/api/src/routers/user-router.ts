import { createRouter, publicProcedure } from "../trpc";

export const userRouter = createRouter({
  getUserById: publicProcedure.query(() => {
    return "beep";
  }),
});
