import { betterFetch } from "@better-fetch/fetch";
import { Session } from "better-auth";
import {
  NextResponse,
  type NextRequest,
} from "next/server";
import createMiddleware from "next-intl/middleware";
import { AppConfig, AllLocales } from "@/configs/AppConfig";

// Regex for public paths (e.g., /auth, /discover, or localized versions like /en/auth)
const publicPaths = new RegExp(
  `^/(?:${AllLocales.join('|')})?/auth(?:/.*)?$`
);
const publicMatcher = (pathname: string): boolean => {
  return publicPaths.test(pathname);
};

const intlMiddleware = createMiddleware({
  locales: AllLocales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
});

export default async function authMiddleware(
  request: NextRequest
) {
  const res = NextResponse.next();

  // Apply intl middleware first
  const intlResult = intlMiddleware(request);
  if (intlResult?.headers) {
    for (const [key, value] of intlResult.headers.entries()) {
      res.headers.set(key, value);
    }
  }

  const isPublicPath = publicMatcher(request.nextUrl.pathname);
  console.log('isPublicPath', request.nextUrl.pathname, isPublicPath);

  if (isPublicPath) {
    return res;
  }

  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: request.nextUrl.origin,
      headers: {
        // Get the cookie from the request
        cookie: request.headers.get("cookie") || "",
      },
    }
  );

  if (!session) {
    // Redirect to login page with locale prefix
    const url = request.nextUrl.clone();
    const redirect = request.nextUrl.pathname;
    const locale = intlResult?.headers.get("x-intl-locale") || AppConfig.defaultLocale;
    url.pathname = `/${locale}/auth/login`;
    url.searchParams.set("redirect", redirect);
    return NextResponse.redirect(url);
  }

  return res;
}

// Adjust the matcher to consider locale prefixes
export const config = {
  matcher: [
    "/((?!api|_next|.*\\.(?:png|ico|svg|jpeg|jpg|webp|md|cer)).*)", // Match paths excluding API, _next, and static assets
  ],
};
