import createMiddleware from "next-intl/middleware";
import { SupportedLocalesEnum } from "./constants";
import { routing } from "./routing";

export default createMiddleware(routing);

export const matcher = [
  "/",
  `/(${Object.values(SupportedLocalesEnum).join("|")}/:path*`,
];
