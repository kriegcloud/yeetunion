// MUI Imports
import Button from "@mui/material/Button";

import { Customizer } from "@/components/Customizer";
import Providers from "@/components/Providers";
import ScrollToTop from "@/components/ScrollToTop";
// Config Imports
import { AppConfig } from "@/configs/AppConfig";
import type { Locale } from "@/configs/AppConfig";
import { LayoutWrapper } from "@/layouts/LayoutWrapper";
import HorizontalFooter from "@/layouts/horizontal/Footer";
import Header from "@/layouts/horizontal/Header";
import HorizontalLayout from "@/layouts/horizontal/HorizontalLayout";
import VerticalFooter from "@/layouts/vertical/Footer";
import Navbar from "@/layouts/vertical/Navbar";
import Navigation from "@/layouts/vertical/Navigation";
import VerticalLayout from "@/layouts/vertical/VerticalLayout";
import { getDictionary } from "@/utils/getDictionary";
import { getMode, getSystemMode } from "@ye/theme/serverHelpers";
import type { ReactNode } from "react";

const Layout = async ({
  children,
  params,
}: { children: ReactNode; params: { lang: Locale } }) => {
  // Vars
  const direction =
    AppConfig.locales.find((locale) => locale.id === params.lang)?.direction ??
    "ltr";
  const dictionary = await getDictionary(params.lang);
  const mode = getMode();
  const systemMode = getSystemMode();

  return (
    <Providers direction={direction}>
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
    </Providers>
  );
};

export default Layout;
