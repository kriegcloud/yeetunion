"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { getCookie, removeCookie, setCookie } from "../cookies";
export function useCookies(key, initialState, options) {
  const {
    initializeWithValue = true,
    ...cookieOptions
  } = options ?? {};
  const isObjectState = initialState && typeof initialState === "object";
  const [state, setState] = useState(initialState);
  useEffect(() => {
    const storedValue = getCookie(key);
    if (storedValue) {
      if (isObjectState) {
        setState(prevValue => ({
          ...prevValue,
          ...storedValue
        }));
      } else {
        setState(storedValue);
      }
    } else if (initialState && initializeWithValue) {
      setCookie(key, initialState, cookieOptions);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const updateState = useCallback(newState => {
    if (isObjectState) {
      setState(prevValue => {
        const updatedState = {
          ...prevValue,
          ...newState
        };
        setCookie(key, updatedState, cookieOptions);
        return updatedState;
      });
    } else {
      setCookie(key, newState, cookieOptions);
      setState(newState);
    }
  }, [cookieOptions, isObjectState, key]);
  const updateField = useCallback((fieldName, updateValue) => {
    if (isObjectState) {
      updateState({
        [fieldName]: updateValue
      });
    }
  }, [isObjectState, updateState]);
  const resetState = useCallback(defaultState => {
    setState(defaultState ?? initialState);
    removeCookie(key);
  }, [initialState, key]);
  return useMemo(() => ({
    state: state,
    setState: updateState,
    setField: updateField,
    resetState
  }), [resetState, updateField, updateState, state]);
}
//# sourceMappingURL=useCookies.js.map