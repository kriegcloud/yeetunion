import type { ReactNode } from "react";

export type Layout = "vertical" | "collapsed" | "horizontal";

export type Skin = "default" | "bordered";

export type Mode = "system" | "light" | "dark";

export type SystemMode = "light" | "dark";

export type Direction = "ltr" | "rtl";

export type LayoutComponentWidth = "compact" | "wide";

export type LayoutComponentPosition = "fixed" | "static";

export type ChildrenType = {
  children: ReactNode;
};

export type ThemeColor =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";

// Settings type
export type Settings = {
  mode?: Mode;
  skin?: Skin;
  semiDark?: boolean;
  layout?: Layout;
  navbarContentWidth?: LayoutComponentWidth;
  contentWidth?: LayoutComponentWidth;
  footerContentWidth?: LayoutComponentWidth;
  primaryColor?: string;
};

export type Navbar = {
  type: LayoutComponentPosition;
  contentWidth: LayoutComponentWidth;
  floating: boolean;
  detached: boolean;
  blur: boolean;
};

export type Footer = {
  type: LayoutComponentPosition;
  contentWidth: LayoutComponentWidth;
  detached: boolean;
};

export type Config = {
  templateName: string;
  homePageUrl: string;
  settingsCookieName: string;
  mode: Mode;
  skin: Skin;
  semiDark: boolean;
  layout: Layout;
  layoutPadding: number;
  navbar: Navbar;
  contentWidth: LayoutComponentWidth;
  compactContentWidth: number;
  footer: Footer;
  disableRipple: boolean;
};
