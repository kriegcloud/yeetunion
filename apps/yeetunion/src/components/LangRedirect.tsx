'use client'

// Next Imports
import { redirect, usePathname } from 'next/navigation'

// Config Imports
import { AppConfig } from '@/configs/AppConfig'

const LangRedirect = () => {
  const pathname = usePathname()

  const redirectUrl = `/${AppConfig.defaultLocale}${pathname}`

  redirect(redirectUrl)
}

export default LangRedirect
