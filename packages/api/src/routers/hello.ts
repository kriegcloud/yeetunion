import { createRouter, publicProcedure } from "@/trpc";

export const helloRouter = createRouter({
  protected: publicProcedure.query(() => {
    return {
      message: `Hello from tRPC!`,
    };
  }),
});
