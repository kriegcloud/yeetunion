// Component Imports
import Providers from "@/components/Providers";
import { BlankLayout } from "@/layouts/BlankLayout";
import NotFound from "@/views/NotFound";
import { headers } from "next/headers";

// Config Imports
import { AppConfig } from "@/configs/AppConfig";
import type { Locale } from "@/configs/AppConfig";

// Util Imports
import { getServerMode, getSystemMode } from "@ye/theme/serverHelpers";

const NotFoundPage = ({ params }: { params: { lang: Locale } }) => {
  // Vars
  const direction =
    AppConfig.locales.find((locale) => locale.id === params.lang)?.direction ??
    "ltr";
  const systemMode = getSystemMode();
  const mode = getServerMode();
  const locale = (headers().get("x-intl-locale") || "en") as Locale;
  return (
    <Providers direction={direction}>
      <BlankLayout systemMode={systemMode}>
        <NotFound mode={mode} locale={locale} />
      </BlankLayout>
    </Providers>
  );
};

export default NotFoundPage;
