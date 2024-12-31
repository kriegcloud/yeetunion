// Type Imports
import type { ReactNode } from "react";
import type { Locale } from '@/configs/i18n'

// Component Imports
import Providers from '@/components/Providers'
import {BlankLayout} from '@/layouts/BlankLayout'

// Config Imports
import { i18n } from '@/configs/i18n'

// Util Imports
import { getSystemMode } from '@ye/theme/serverHelpers'

type Props = {
  params: { lang: Locale },
  children: ReactNode
}

const Layout = ({ children, params }: Props) => {
  // Vars
  const direction = i18n.langDirection[params.lang as keyof typeof i18n.langDirection]
  const systemMode = getSystemMode()

  return (
    <Providers direction={direction}>
      <BlankLayout systemMode={systemMode}>{children}</BlankLayout>
    </Providers>
  )
}

export default Layout
