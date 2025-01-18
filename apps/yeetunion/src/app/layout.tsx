import "./global.css";

import type { Metadata, Viewport } from "next";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";

import { primary } from "@ye/ui/theme";
import { ThemeProvider, themeConfig } from "@ye/ui/theme";

import { routing } from "@ye/i18n";
import type { LocaleProp } from "@ye/i18n";
import { MotionLazy, ProgressBar, Snackbar } from "@ye/ui/components";
import { detectSettings } from "@ye/ui/server-theme";
import {
  SettingsDrawer,
  SettingsProvider,
  defaultSettings,
} from "@ye/ui/theme";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
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
  children: ReactNode;
  params: LocaleProp;
};

async function getAppConfig() {
  const settings = await detectSettings();

  return {
    cookieSettings: settings,
    dir: settings.direction,
  };
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const appConfig = await getAppConfig();
  if (!routing.locales.includes(params.locale)) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <html lang={params.locale} dir={appConfig.dir} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <InitColorSchemeScript
            defaultMode={themeConfig.defaultMode}
            modeStorageKey={themeConfig.modeStorageKey}
            attribute={themeConfig.cssVariables.colorSchemeSelector}
          />

          <SettingsProvider
            cookieSettings={appConfig.cookieSettings}
            defaultSettings={defaultSettings}
          >
            <AppRouterCacheProvider options={{ key: "css" }}>
              <ThemeProvider
                currentLang={{}}
                defaultMode={themeConfig.defaultMode}
                modeStorageKey={themeConfig.modeStorageKey}
              >
                <MotionLazy>
                  <Snackbar />
                  <ProgressBar />
                  <SettingsDrawer defaultSettings={defaultSettings} />
                  {children}
                </MotionLazy>
              </ThemeProvider>
            </AppRouterCacheProvider>
          </SettingsProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
