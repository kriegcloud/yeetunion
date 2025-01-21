"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { getStorage, removeStorage, setStorage } from "../local-storage";
export function useLocalStorage(key, initialState, options) {
  const {
    initializeWithValue = true
  } = options ?? {};
  const isObjectState = initialState && typeof initialState === "object";
  const [state, setState] = useState(initialState);
  useEffect(() => {
    const storedValue = getStorage(key);
    if (storedValue) {
      if (isObjectState) {
        setState(prevState => ({
          ...prevState,
          ...storedValue
        }));
      } else {
        setState(storedValue);
      }
    } else if (initialState && initializeWithValue) {
      setStorage(key, initialState);
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
        setStorage(key, updatedState);
        return updatedState;
      });
    } else {
      setStorage(key, newState);
      setState(newState);
    }
  }, [key, isObjectState]);
  const updateField = useCallback((fieldName, updateValue) => {
    if (isObjectState) {
      updateState({
        [fieldName]: updateValue
      });
    }
  }, [isObjectState, updateState]);
  const resetState = useCallback(defaultState => {
    setState(defaultState ?? initialState);
    removeStorage(key);
  }, [initialState, key]);
  return useMemo(() => ({
    state: state,
    setState: updateState,
    setField: updateField,
    resetState
  }), [resetState, updateField, updateState, state]);
}
//# sourceMappingURL=useLocalStorage.js.map