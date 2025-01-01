"use client";

import { useObjectCookie } from "@ye/utils/hooks";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { createContext, useContext } from "react";
import type { Mode, Settings } from "../types";

const createCtx = <A extends NonNullable<unknown> | null>() => {
  const ctx = createContext<A | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (c === undefined)
      throw new Error("useCtx must be inside a Provider with a value");
    return c;
  }
  return [useCtx, ctx.Provider] as const; // 'as const' makes TypeScript infer a tuple
};
// UpdateSettingsOptions type
type UpdateSettingsOptions = {
  updateCookie?: boolean;
};

export type ThemeSettingsCtx = {
  settings: Settings;
  updateSettings: (
    settings: Partial<Settings>,
    options?: UpdateSettingsOptions,
  ) => void;
  isSettingsChanged: boolean;
  resetSettings: () => void;
  updatePageSettings: (settings: Partial<Settings>) => () => void;
};

type ThemeSettingsProviderProps = {
  children: ReactNode;
  settingsCookieObj: Settings | null;
  mode?: Mode;
  initialSettings: Settings;
};

const [useSettings, Provider] = createCtx<ThemeSettingsCtx>();

const ThemeSettingsProvider = ({
  children,
  settingsCookieObj,
  mode,
  initialSettings,
}: ThemeSettingsProviderProps) => {
  const updatedInitialSettings = {
    ...initialSettings,
    mode: mode || "light",
  };

  // Cookies
  const [settingsCookie, updateSettingsCookie] = useObjectCookie<Settings>(
    "e2-mui",
    JSON.stringify(settingsCookieObj) !== "{}"
      ? settingsCookieObj
      : updatedInitialSettings,
  );

  // State
  const [_settingsState, _updateSettingsState] = useState<Settings>(
    JSON.stringify(settingsCookie) !== "{}"
      ? settingsCookie
      : updatedInitialSettings,
  );

  const updateSettings = (
    settings: Partial<Settings>,
    options?: UpdateSettingsOptions,
  ) => {
    const { updateCookie = true } = options || {};

    _updateSettingsState((prev) => {
      const newSettings = { ...prev, ...settings };

      // Update cookie if needed
      if (updateCookie) updateSettingsCookie(newSettings);

      return newSettings;
    });
  };

  /**
   * Updates the settings for page with the provided settings object.
   * Updated settings won't be saved to cookie hence will be reverted once navigating away from the page.
   *
   * @param settings - The partial settings object containing the properties to update.
   * @returns A function to reset the page settings.
   *
   * @example
   * useEffect(() => {
   *     return updatePageSettings({ theme: 'dark' });
   * }, []);
   */
  const updatePageSettings = (settings: Partial<Settings>): (() => void) => {
    updateSettings(settings, { updateCookie: false });

    // Returns a function to reset the page settings
    return () => updateSettings(settingsCookie, { updateCookie: false });
  };

  const resetSettings = () => {
    updateSettings(initialSettings);
  };

  const isSettingsChanged = useMemo(
    () => JSON.stringify(initialSettings) !== JSON.stringify(_settingsState),
    [_settingsState],
  );

  return (
    <Provider
      value={{
        settings: _settingsState,
        updateSettings,
        isSettingsChanged,
        resetSettings,
        updatePageSettings,
      }}
    >
      {children}
    </Provider>
  );
};

export { ThemeSettingsProvider, useSettings };
