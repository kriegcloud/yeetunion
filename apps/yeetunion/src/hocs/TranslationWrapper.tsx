// Next Imports
import type { headers } from 'next/headers'

// Type Imports
import type { Locale } from '@/configs/AppConfig'
import type { ReactNode } from "react";

// Component Imports
import LangRedirect from '@/components/LangRedirect'

// Config Imports
import { AppConfig } from '@/configs/AppConfig'

// ℹ️ We've to create this array because next.js makes request with `_next` prefix for static/asset files
const invalidLangs = ['_next']

const TranslationWrapper = (params: { headersList: ReturnType<typeof headers>; lang: Locale, children: ReactNode }) => {
  const doesLangExist = AppConfig.locales.find((locale) => locale.id === params.lang)

  // ℹ️ This doesn't mean MISSING, it means INVALID
  const isInvalidLang = invalidLangs.includes(params.lang)

  return doesLangExist || isInvalidLang ? params.children : <LangRedirect />
}

export default TranslationWrapper
