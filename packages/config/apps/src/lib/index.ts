import { ThemeConfig } from "./theme";
import * as S from "@effect/schema/Schema";
import {yeNextPath} from "@ye/primitives";


export const AppConfig = S.Struct({
  name: S.String,
  metadata: S.Record({ key: S.String, value: S.String }), // TODO figure out metadata
  theme: ThemeConfig,
  paths: S.Struct({
    public: S.Array(yeNextPath),
    private: S.Array(yeNextPath),
    admin: S.Array(yeNextPath),
  }),
  // images: S.Struct
})
export type AppConfig = typeof AppConfig.Type;