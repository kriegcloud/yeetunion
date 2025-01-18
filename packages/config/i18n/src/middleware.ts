import createMiddleware from "next-intl/middleware";
import { SupportedLocalesEnum } from "./constants";
import { routing } from "./routing";

export const i18nMiddleware =  createMiddleware(routing);

export const matcher = [
  "/",
  `/(${Object.values(SupportedLocalesEnum).join("|")}/:path*`,
];
