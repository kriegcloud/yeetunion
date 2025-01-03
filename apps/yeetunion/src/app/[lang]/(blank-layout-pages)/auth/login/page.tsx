import type { Locale } from "@/configs/AppConfig";
// Component Imports
import Login from "@/views/Login";
// Server Action Imports
import { getServerMode } from "@ye/theme/serverHelpers";
// Next Imports
import type { Metadata } from "next";
import { headers } from "next/headers";
export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

const LoginPage = () => {
  // Vars
  const mode = getServerMode();
  const locale = (headers().get("x-intl-locale") || "en") as Locale;

  console.log();
  return <Login mode={mode} locale={locale} />;
};

export default LoginPage;
