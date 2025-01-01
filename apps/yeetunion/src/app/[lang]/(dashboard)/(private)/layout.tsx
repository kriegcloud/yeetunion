// MUI Imports
import Button from "@mui/material/Button";

import type { Locale } from "@/configs/i18n";
// Type Imports
import type { ReactNode } from "react";

// Layout Imports
import { LayoutWrapper } from "@/layouts/LayoutWrapper";
import HorizontalLayout from "@/layouts/horizontal/HorizontalLayout";
import VerticalLayout from "@/layouts/vertical/VerticalLayout";

import { Customizer } from "@/components/Customizer";
// Component Imports
import Providers from "@/components/Providers";
import ScrollToTop from "@/components/ScrollToTop";
import HorizontalFooter from "@/layouts/horizontal/Footer";
import Header from "@/layouts/horizontal/Header";
import VerticalFooter from "@/layouts/vertical/Footer";
import Navbar from "@/layouts/vertical/Navbar";
import Navigation from "@/layouts/vertical/Navigation";
// import AuthGuard from '@/hocs/AuthGuard'

// Config Imports
import { i18n } from "@/configs/i18n";

// Util Imports
import { getDictionary } from "@/utils/getDictionary";
import { getMode, getSystemMode } from "@ye/theme/serverHelpers";

const Layout = async ({
  children,
  params,
}: { children: ReactNode; params: { lang: Locale } }) => {
  // Vars
  const direction =
    i18n.langDirection[params.lang as keyof typeof i18n.langDirection];
  const dictionary = await getDictionary(params.lang);
  const mode = getMode();
  const systemMode = getSystemMode();

  return (
    <Providers direction={direction}>
      {/*<AuthGuard locale={params.lang}>*/}
      <LayoutWrapper
        systemMode={systemMode}
        verticalLayout={
          <VerticalLayout
            navigation={
              <Navigation
                dictionary={dictionary}
                mode={mode}
                systemMode={systemMode}
              />
            }
            navbar={<Navbar />}
            footer={<VerticalFooter />}
          >
            {children}
          </VerticalLayout>
        }
        horizontalLayout={
          <HorizontalLayout
            header={<Header dictionary={dictionary} />}
            footer={<HorizontalFooter />}
          >
            {children}
          </HorizontalLayout>
        }
      />
      <ScrollToTop className="mui-fixed">
        <Button
          variant="contained"
          className="is-10 bs-10 rounded-full p-0 min-is-0 flex items-center justify-center"
        >
          <i className="ri-arrow-up-line" />
        </Button>
      </ScrollToTop>
      <Customizer dir={direction} />
      {/*</AuthGuard>*/}
    </Providers>
  );
};

export default Layout;
