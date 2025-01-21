import { NextRequest } from 'next/server';
import { authMiddleware } from '@ye/auth/middleware';
import createMiddleware from "next-intl/middleware";
import { routing } from "@ye/i18n";
const i18nMiddleware = createMiddleware(routing);
export default async function middleware(request: NextRequest) {
  const response = i18nMiddleware(request);
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  response.headers.set('Cross-Origin-Embedder-Policy', 'same-origin');

  return authMiddleware(request, response);
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    `/(en)/:path*`,
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ]
};