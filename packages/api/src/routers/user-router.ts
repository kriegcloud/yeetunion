import { createRouter, publicProcedure } from "../trpc";
// import { TRPCError } from '@trpc/server'
import { eq } from "drizzle-orm";
// import { revalidatePath } from 'next/cache'
import { z } from "zod";

import * as schema from "@ye/db/schema";

export const userRouter = createRouter({
  getUserById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) =>
      ctx.db
        .select()
        .from(schema.user)
        .where(eq(schema.user.id, input.id))
        .limit(1)
        .then((rows) => rows[0] || null),
    ),
});
