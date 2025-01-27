import { betterFetch } from "@better-fetch/fetch";
import type { Session } from "@ye/auth/types";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: request.nextUrl.origin,
      headers: {
        //get the cookie from the request
        cookie: request.headers.get("cookie") || "",
      },
    },
  );

  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (
    session && (
    request.nextUrl.pathname === "/sign-in" ||
    request.nextUrl.pathname === "/sign-up"
  )) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (
    session.user.role !== "admin" &&
    request.nextUrl.pathname.startsWith("/admin")
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/account"],
};
