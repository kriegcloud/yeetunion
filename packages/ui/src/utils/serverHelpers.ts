import { cookies } from "next/headers";
import "server-only";

import type { Settings, SystemMode } from "@dank/theme";
import { themeConfig } from "@dank/theme/themeConfig";

export const getSettingsFromCookie = (): Settings => {
  const cookieStore = cookies();

  const cookieName = themeConfig.settingsCookieName;

  return JSON.parse(cookieStore.get(cookieName)?.value || "{}");
};

export const getMode = () => {
  const settingsCookie = getSettingsFromCookie();

  return settingsCookie.mode || themeConfig.mode;
};

export const getSystemMode = (): SystemMode => {
  const cookieStore = cookies();
  const mode = getMode();

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
