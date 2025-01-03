"use client";
import type { Locale } from "@/configs/AppConfig";
import { useVerticalNav } from "@/layouts/vertical/Provider";
// import VerticalNav, { NavHeader, NavCollapseIcons } from "@/layouts/vertical/menu/vertical-menu";
import {
  NavCollapseIcons,
  NavHeader,
  VerticalNav,
} from "@/layouts/vertical/menu";
import navigationCustomStyles from "@/layouts/vertical/styles/navigationCustomStyles";
import type { getDictionary } from "@/utils/getDictionary";
import { getLocalizedUrl } from "@/utils/i18n";
import { styled, useColorScheme, useTheme } from "@mui/material/styles";
// import { Logo } from "@e2/ui";
import type { Mode, SystemMode } from "@ye/theme";
import { useSettings } from "@ye/theme/ThemeSettingsProvider";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef } from "react";
import VerticalMenu from "./VerticalMenu";
type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
  mode: Mode;
  systemMode: SystemMode;
};

const StyledBoxForShadow = styled("div")(({ theme }) => ({
  top: 60,
  left: -8,
  zIndex: 2,
  opacity: 0,
  position: "absolute",
  pointerEvents: "none",
  width: "calc(100% + 15px)",
  height: theme.mixins.toolbar.minHeight,
  transition: "opacity .15s ease-in-out",
  background: `linear-gradient(var(--mui-palette-background-default) ${
    theme.direction === "rtl" ? "95%" : "5%"
  }, rgb(var(--mui-palette-background-defaultChannel) / 0.85) 30%, rgb(var(--mui-palette-background-defaultChannel) / 0.5) 65%, rgb(var(--mui-palette-background-defaultChannel) / 0.3) 75%, transparent)`,
  "&.scrolled": {
    opacity: 1,
  },
}));

const Navigation = (props: Props) => {
  // Props
  const { dictionary, mode, systemMode } = props;

  // Hooks
  const verticalNavOptions = useVerticalNav();
  const { updateSettings, settings } = useSettings();
  const { lang: locale } = useParams();
  const { mode: muiMode, systemMode: muiSystemMode } = useColorScheme();
  const theme = useTheme();

  // Refs
  const shadowRef = useRef(null);

  // Vars
  const { isCollapsed, isHovered, collapseVerticalNav, isBreakpointReached } =
    verticalNavOptions;
  const isServer = typeof window === "undefined";
  const isSemiDark = settings.semiDark;
  let isDark: boolean;

  if (isServer) {
    isDark = mode === "system" ? systemMode === "dark" : mode === "dark";
  } else {
    isDark =
      muiMode === "system" ? muiSystemMode === "dark" : muiMode === "dark";
  }

  const scrollMenu = (container: any, isPerfectScrollbar: boolean) => {
    container =
      isBreakpointReached || !isPerfectScrollbar ? container.target : container;

    if (shadowRef && container.scrollTop > 0) {
      // @ts-ignore
      if (!shadowRef.current.classList.contains("scrolled")) {
        // @ts-ignore
        shadowRef.current.classList.add("scrolled");
      }
    } else {
      // @ts-ignore
      shadowRef.current.classList.remove("scrolled");
    }
  };

  useEffect(() => {
    if (settings.layout === "collapsed") {
      collapseVerticalNav(true);
    } else {
      collapseVerticalNav(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.layout]);

  return (
    // eslint-disable-next-line lines-around-comment
    // Sidebar Vertical Menu
    <VerticalNav
      customStyles={navigationCustomStyles(verticalNavOptions, theme)}
      collapsedWidth={68}
      backgroundColor="var(--mui-palette-background-default)"
      // eslint-disable-next-line lines-around-comment
      // The following condition adds the data-mui-color-scheme='dark' attribute to the VerticalNav component
      // when semiDark is enabled and the mode or systemMode is light
      {...(isSemiDark &&
        !isDark && {
          "data-mui-color-scheme": "dark",
        })}
    >
      {/* Nav Header including Logo & nav toggle icons  */}
      <NavHeader>
        <Link href={getLocalizedUrl("/", locale as Locale)}>
          {/*<Logo />*/}
        </Link>
        {!(isCollapsed && !isHovered) && (
          <NavCollapseIcons
            lockedIcon={<i className="ri-radio-button-line text-xl" />}
            unlockedIcon={
              <i className="ri-checkbox-blank-circle-line text-xl" />
            }
            closeIcon={<i className="ri-close-line text-xl" />}
            className="text-textSecondary"
            onClick={() =>
              updateSettings({
                layout: !isCollapsed ? "collapsed" : "vertical",
              })
            }
          />
        )}
      </NavHeader>
      <StyledBoxForShadow ref={shadowRef} />
      <VerticalMenu dictionary={dictionary} scrollMenu={scrollMenu} />
    </VerticalNav>
  );
};

export default Navigation;
