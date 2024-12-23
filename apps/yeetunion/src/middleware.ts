import { NextResponse } from "next/server";

/**
 * Next.js middleware, which runs on every request. It will do rate limiting using unkey, no authentication redirects is handled here because it's done per page.
 * @param request The incoming request.
 * @returns The response which will either redirect or continue.
 */
export default async function middleware(): Promise<Response | undefined> {
  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico|blocked).*)",
};
