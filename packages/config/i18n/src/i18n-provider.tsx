'use client';

import i18next from 'i18next';
import { useMemo } from 'react';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, I18nextProvider as Provider } from 'react-i18next';
import type { ReactNode } from "react";
import { i18nOptions } from './locales-config';

import type { LanguageValue } from './locales-config';

void i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(resourcesToBackend((lang: string, ns: string) => import(`./langs/${lang}/${ns}.json`)))
  .init({ ...i18nOptions(), detection: { caches: ['cookie'] } });

// ----------------------------------------------------------------------

type Props = {
  lang?: LanguageValue | undefined;
  children: ReactNode;
};

export function I18nProvider({ lang, children }: Props) {
  useMemo(() => {
    if (lang) {
      i18next.changeLanguage(lang);
    }
  }, []);

  return <Provider i18n={i18next}>{children}</Provider>;
}
