import { createRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const userRouter = createRouter({
  getUserById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(() =>
      {
        return "beep"
      }
    ),
});
