
import {primaryColorConfig} from "@ye/theme/colorConfig";
import {themeConfig} from "@ye/theme/themeConfig";
// import { getServerAuthSession } from "@/server/auth";
import {ThemeProvider} from "@ye/theme/ThemeProvider";
import { ThemeSettingsProvider } from "@ye/theme/ThemeSettingsProvider";
// Util Imports
import {
  getMode,
  getSettingsFromCookie,
  getSystemMode,
} from "@ye/theme/serverHelpers";
import type { Direction } from "@ye/theme";
import type { ReactNode } from "react";
import { VerticalNavProvider } from "@/layouts/vertical/Provider";

type Props = {
  children: ReactNode;
  direction: Direction;
};




const Providers = async (props: Props) => {
  // Props
  const { children, direction } = props;

  // Vars
  const mode = getMode();
  const settingsCookie = getSettingsFromCookie();
  const systemMode = getSystemMode();
  return (
      <VerticalNavProvider>
        <ThemeSettingsProvider
          settingsCookieObj={settingsCookie}
          mode={mode}
          initialSettings={{
            mode: themeConfig.mode,
            skin: themeConfig.skin,
            semiDark: themeConfig.semiDark,
            layout: themeConfig.layout,
            navbarContentWidth: themeConfig.navbar.contentWidth,
            contentWidth: themeConfig.contentWidth,
            footerContentWidth: themeConfig.footer.contentWidth,
            primaryColor: primaryColorConfig[0].main,
          }}
        >
          <ThemeProvider direction={direction} systemMode={systemMode}>
            {children}
          </ThemeProvider>
        </ThemeSettingsProvider>
      </VerticalNavProvider>
  );
};

export default Providers;
