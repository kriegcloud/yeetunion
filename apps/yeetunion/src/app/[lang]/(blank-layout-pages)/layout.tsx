// Type Imports
import type { ReactNode } from "react";

// Component Imports
import Providers from "@/components/Providers";
import { BlankLayout } from "@/layouts/BlankLayout";

// Config Imports
import { AppConfig } from "@/configs/AppConfig";
import type { Locale } from "@/configs/AppConfig";

// Util Imports
import { getSystemMode } from "@ye/theme/serverHelpers";

type Props = {
  params: { lang: Locale };
  children: ReactNode;
};

const Layout = ({ children, params }: Props) => {
  // Vars
  const direction =
    AppConfig.locales.find((locale) => locale.id === params.lang)?.direction ??
    "ltr";
  const systemMode = getSystemMode();

  return (
    <Providers direction={direction}>
      <BlankLayout systemMode={systemMode}>{children}</BlankLayout>
    </Providers>
  );
};

export default Layout;
