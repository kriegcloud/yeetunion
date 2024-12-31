"use client";

import { createCtx } from "@ye/utils/createCtx";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { useCookie } from "react-use";
import type { Mode, Settings } from "../index";

// UpdateSettingsOptions type
type UpdateSettingsOptions = {
  updateCookie?: boolean;
};

function useObjectCookie<T>(
  key: string,
  fallback?: T | null,
): [T, (newVal: T) => void] {
  const [valStr, updateCookie] = useCookie(key);

  const value = useMemo<T>(
    () => (valStr ? JSON.parse(valStr) : fallback),
    [valStr],
  );

  const updateValue = (newVal: T) => {
    updateCookie(JSON.stringify(newVal));
  };

  return [value, updateValue];
}

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
