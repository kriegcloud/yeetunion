"use client";
import { DashboardLayout } from "@ye/ui/layouts";
import React from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@ye/auth/client";
// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const router = useRouter();
  return <DashboardLayout handleSignOut={async () => {
    await authClient.signOut();
    router.refresh();
  }}>{children}</DashboardLayout>;
}
