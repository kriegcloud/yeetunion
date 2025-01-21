import ye from "@ye/primitives";
import { Schema as S } from "effect";
import { ThemeConfig } from "./theme";

export const AppConfig = S.Struct({
  name: S.String,
  metadata: S.Record({ key: S.String, value: S.String }), // TODO figure out metadata
  theme: ThemeConfig,
  paths: S.Struct({
    public: S.Array(ye.NextPath),
    private: S.Array(ye.NextPath),
    admin: S.Array(ye.NextPath),
  }),
  // images: S.Struct
});
export type AppConfig = typeof AppConfig.Type;
