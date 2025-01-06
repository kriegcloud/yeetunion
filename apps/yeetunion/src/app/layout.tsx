import "src/global.css";

import type { Metadata, Viewport } from "next";

import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

// import { CONFIG } from "src/global-config";
import { primary } from "@ye/theme";
import { LocalizationProvider, I18nProvider } from "@ye/i18n";
import { detectLanguage } from "@ye/i18n/server";
import { themeConfig, ThemeProvider } from "@ye/theme";

import { Snackbar, ProgressBar, MotionLazy } from "@ye/ui/components";
import { detectSettings } from "@ye/theme/server";
import {
  SettingsDrawer,
  defaultSettings,
  SettingsProvider,
} from "@ye/theme";

// import { CheckoutProvider } from "src/sections/checkout/context";

// ----------------------------------------------------------------------

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: primary.main,
};

export const metadata: Metadata = {
  icons: [
    {
      rel: "icon",
      url: `/favicon.ico`,
    },
  ],
};

// ----------------------------------------------------------------------

type RootLayoutProps = {
  children: React.ReactNode;
};

async function getAppConfig() {
    const [lang, settings] = await Promise.all([
      detectLanguage(),
      detectSettings(),
    ]);

    return {
      lang: lang ?? "en",
      i18nLang: lang ?? "en",
      cookieSettings: settings,
      dir: settings.direction,
    };

}

export default async function RootLayout({ children }: RootLayoutProps) {
  const appConfig = await getAppConfig();

  return (
    <html lang={appConfig.lang} dir={appConfig.dir} suppressHydrationWarning>
      <body>
        <InitColorSchemeScript
          defaultMode={themeConfig.defaultMode}
          modeStorageKey={themeConfig.modeStorageKey}
          attribute={themeConfig.cssVariables.colorSchemeSelector}
        />

        <I18nProvider lang={appConfig.i18nLang}>
            <SettingsProvider
              cookieSettings={appConfig.cookieSettings}
              defaultSettings={defaultSettings}
            >
              <LocalizationProvider>
                <AppRouterCacheProvider options={{ key: "css" }}>
                  <ThemeProvider
                    currentLang={{

                    }}
                    defaultMode={themeConfig.defaultMode}
                    modeStorageKey={themeConfig.modeStorageKey}
                  >
                    <MotionLazy>
                      {/*<CheckoutProvider>*/}
                        <Snackbar />
                        <ProgressBar />
                        <SettingsDrawer defaultSettings={defaultSettings} />
                        {children}
                      {/*</CheckoutProvider>*/}
                    </MotionLazy>
                  </ThemeProvider>
                </AppRouterCacheProvider>
              </LocalizationProvider>
            </SettingsProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
