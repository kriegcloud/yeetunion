import { Resend } from "resend";
import { env } from "@ye/env/yeetunion/server"

export const resend = new Resend(env.RESEND_API_KEY || "re_123");
