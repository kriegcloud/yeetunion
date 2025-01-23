"use client";
import { createCtx } from "@ye/utils/createCtx";
import type { ReactNode } from "react";

type AuthCtx = {
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithDiscord: () => Promise<void>;
  signInWithTwitter: () => Promise<void>;
  signInWithLinkedIn: () => Promise<void>;
  signUpWithEmail: (name: string, email: string, password: string) => Promise<void>;
}

const [useAuthCtx, Provider] = createCtx<AuthCtx>();

export const AuthProvider = ({ children, ...rest }: AuthCtx & { children: ReactNode }) => {
  return <Provider value={{ ...rest }} >{children}</Provider>;
}
export { useAuthCtx }