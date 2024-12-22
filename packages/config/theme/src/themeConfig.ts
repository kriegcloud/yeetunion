import type { Config } from "./types";

export const themeConfig: Config = {
  templateName: "Rocket Admin",
  homePageUrl: "/home",
  settingsCookieName: "e2-mui",
  mode: "system", // 'system', 'light', 'dark'
  skin: "default", // 'default', 'bordered'
  semiDark: false, // true, false
  layout: "vertical", // 'vertical', 'collapsed', 'horizontal'
  layoutPadding: 24, // Common padding for header, content, footer layout components (in px)
  compactContentWidth: 1440, // in px
  navbar: {
    type: "fixed", // 'fixed', 'static'
    contentWidth: "compact", // 'compact', 'wide'
    floating: false, //! true, false (This will not work in the Horizontal Layout)
    detached: true, //! true, false (This will not work in the Horizontal Layout or floating navbar is enabled)
    blur: true, // true, false
  },
  contentWidth: "compact", // 'compact', 'wide'
  footer: {
    type: "static", // 'fixed', 'static'
    contentWidth: "compact", // 'compact', 'wide'
    detached: true, //! true, false (This will not work in the Horizontal Layout)
  },
  disableRipple: false, // true, false
};
