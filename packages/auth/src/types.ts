import type { auth } from "./auth";
import { client } from "./client";

export type Session = typeof auth.$Infer.Session;
export type ActiveOrg = typeof client.$Infer.ActiveOrganization;
export type Invitation = typeof client.$Infer.Invitation;
