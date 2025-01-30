import { createQueryFn } from "@/utils/run-query-fn";
import { api, type RouterOutputs } from "@/trpc/react";
import { Effect, flow, Schedule } from "effect";

import { useQuery as _useQuery } from "@tanstack/react-query";
import { type Result as _Result } from "@/utils/result";

export namespace LatestPostQuery {
  export const BASE_QUERY_KEY = "latestPost";

  export type QueryKey = [typeof BASE_QUERY_KEY];

  export type Result =
    RouterOutputs["users"]["me"] extends _Result<infer T, unknown>
      ? T
      : never;

  export const useQuery = () =>
    _useQuery({
      queryKey: [BASE_QUERY_KEY] satisfies QueryKey,
      queryFn: createQueryFn(
        () => api.users.me.query(),
        flow(
          Effect.retry({
            times: 10,
            schedule: Schedule.fixed("1 second").pipe(
              Schedule.tapOutput(() =>
                Effect.sync(() =>
                  console.log("Retrying...", {
                    icon: "🔁",
                  }),
                ),
              ),
            ),
          }),
          Effect.tap(() => console.info("Successfully fetched latest post")),
        ),
      ),
    });
}
