import type { Locale } from "@/configs/i18n";
// Type Imports
import type { ReactNode } from "react";

// HOC Imports
// import GuestOnlyRoute from '@/hocs/GuestOnlyRoute'

const Layout = ({
  children,
  params: _,
}: { params: { lang: Locale }; children: ReactNode }) => {
  // return <GuestOnlyRoute lang={params.lang}>{children}</GuestOnlyRoute>
  return <>{children}</>;
};

export default Layout;
