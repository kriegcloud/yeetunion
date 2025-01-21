import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { routing } from "./routing";
import type { LocaleProp } from "./types";

export type I18nLayoutProps = {
  children: ReactNode;
  dir: "ltr" | "rtl";
} & LocaleProp;

export const I18nLayout = async ({
  children,
  dir,
  locale,
}: I18nLayoutProps) => {
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};
