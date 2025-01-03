// Third-party Imports
import "react-perfect-scrollbar/dist/css/styles.css";

// Type Imports
import type { ReactNode } from "react";

// Component Imports

// Config Imports
import { AppConfig } from "@/configs/AppConfig";
import type { Locale } from "@/configs/AppConfig";
// Style Imports
import "@/app/globals.css";

// Generated Icon CSS Imports
import "@/assets/iconify-icons/generated-icons.css";

export const metadata = {
  title: AppConfig.name,
  description: AppConfig.description,
};

const RootLayout = ({
  children,
  params,
}: { params: { lang: Locale }; children: ReactNode }) => {
  const direction =
    AppConfig.locales.find((locale) => locale.id === params.lang)?.direction ??
    "ltr";

  return (
    <html
      id="__next"
      lang={params.lang}
      dir={direction}
      suppressHydrationWarning
    >
      <body className="flex is-full min-bs-full flex-auto flex-col">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
