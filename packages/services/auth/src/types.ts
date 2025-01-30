import type { auth } from "./auth";
import { authClient } from "./client";

export type Session = typeof auth.$Infer.Session;
export type ActiveOrg = typeof authClient.$Infer.ActiveOrganization;
export type Invitation = typeof authClient.$Infer.Invitation;
