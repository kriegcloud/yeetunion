import { DashboardLayout } from "@ye/ui/layouts";
import type { ReactNode } from "react";

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
