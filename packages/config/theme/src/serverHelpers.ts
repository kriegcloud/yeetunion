// Next Imports
import { cookies } from "next/headers";

// Third-party Imports
import "server-only";

// Type Imports
import type { Settings, SystemMode } from "./types";

// Config Imports
import { themeConfig } from "./configs/themeConfig";

export const getSettingsFromCookie = (): Settings => {
  const cookieStore = cookies();

  const cookieName = themeConfig.settingsCookieName;

  return JSON.parse(cookieStore.get(cookieName)?.value || "{}");
};

export const getMode = () => {
  const settingsCookie = getSettingsFromCookie();
  console.log(settingsCookie.mode);
  console.log(themeConfig.mode);
  // Get mode from cookie or fallback to theme config
  return settingsCookie.mode || themeConfig.mode;
};

export const getSystemMode = (): SystemMode => {
  const cookieStore = cookies();
  const mode = getMode();

  console.log(cookieStore.get("colorPref")?.value);
  console.log(mode);
  const colorPrefCookie = (cookieStore.get("colorPref")?.value ||
    "light") as SystemMode;

  return (mode === "system" ? colorPrefCookie : mode) || "light";
};

export const getServerMode = () => {
  const mode = getMode();
  const systemMode = getSystemMode();

  return mode === "system" ? systemMode : mode;
};

export const getSkin = () => {
  const settingsCookie = getSettingsFromCookie();

  return settingsCookie.skin || "default";
};
