import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { SupportedLocalesEnum } from "./constants";

export const routing = defineRouting({
  locales: Object.values(SupportedLocalesEnum),
  defaultLocale: SupportedLocalesEnum.EN,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
