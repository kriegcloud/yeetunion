import { auth } from "@ye/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { NextRequest } from "next/server";

export const { GET } = toNextJsHandler(auth);

export const POST = async (req: NextRequest) => auth.handler(req);