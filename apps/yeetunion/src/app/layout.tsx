import "react-perfect-scrollbar/dist/css/styles.css";
import type { ReactNode } from "react";
// import { ScrollToTop } from "@e2/ui";
// import { headers } from "next/headers";
import "@/app/globals.css";
import { getMode, getSystemMode } from "@ye/theme/serverHelpers";
// Generated Icon CSS Imports
import "@/assets/iconify-icons/generated-icons.css";
import Providers from "@/components/Providers";
import HorizontalFooter from "@/layouts/horizontal/Footer";
import Header from "@/layouts/horizontal/Header";
import VerticalFooter from "@/layouts/vertical/Footer";
import Navbar from "@/layouts/vertical/Navbar";
import Navigation from "@/layouts/vertical/Navigation";
import HorizontalLayout from "@/layouts/horizontal/HorizontalLayout";
import {LayoutWrapper} from "@/layouts/LayoutWrapper";
import { Customizer } from "@/components/Customizer";
import VerticalLayout from "@/layouts/vertical/VerticalLayout";

const RootLayout = async ({ children }: { children: ReactNode}) => {
  const direction = "ltr";
  const mode = getMode();
  const systemMode = getSystemMode();

  return (
    <html id="__next" lang="en" dir={direction}>
    <body className="flex is-full min-bs-full flex-auto flex-col">
      <Providers direction={direction}>
        <LayoutWrapper
          systemMode={systemMode}
          verticalLayout={
            <VerticalLayout
              navigation={
                <Navigation mode={mode} systemMode={systemMode} />
              }
              navbar={<Navbar />}
              footer={<VerticalFooter />}
            >
              {children}
            </VerticalLayout>
          }
          horizontalLayout={
            <HorizontalLayout
              header={<Header />}
              footer={<HorizontalFooter />}
            >
              {children}
            </HorizontalLayout>
          }
        />
        {/*<ScrollToTop className="mui-fixed">*/}
        {/*  <Button*/}
        {/*    variant="contained"*/}
        {/*    className="is-10 bs-10 rounded-full p-0 min-is-0 flex items-center justify-center"*/}
        {/*  >*/}
        {/*    <i className="ri-arrow-up-line" />*/}
        {/*  </Button>*/}
        {/*</ScrollToTop>*/}
        <Customizer dir={direction} />
      </Providers>
    </body>
    </html>
  );
};

export default RootLayout;
