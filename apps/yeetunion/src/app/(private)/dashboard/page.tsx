import React from "react";
import { HydrateClient } from "@/trpc/server";
import {YeComp} from "@/app/_features/ye";
const Page = () => {
  return (
    <HydrateClient>
      <React.Suspense>
        <YeComp />
      </React.Suspense>
    </HydrateClient>
  );
};

export default Page;
