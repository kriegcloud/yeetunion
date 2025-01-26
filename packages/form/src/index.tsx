export * from "./core";
export * from "./fields";
export * from "./mui";
import Button from "@mui/material/Button";
import { Effect, Layer, Logger, pipe } from "effect";
import { MuiFields } from "./mui";
import { layer } from "./react-hook-form";
export const MuiReactHookFormLive = pipe(
  MuiFields.layer,
  Layer.provideMerge(layer(Button)),
);

export const simulateSubmit = (values: unknown) =>
  pipe(
    Effect.log("submitting", { values }),
    Effect.andThen(Effect.sleep(1000)),
    Effect.provide(Logger.pretty),
    Effect.runPromise,
  );

export const reportError = (error: unknown) =>
  pipe(
    Effect.log("failed to submit", { error }),
    Effect.provide(Logger.pretty),
    Effect.runPromise,
  );
