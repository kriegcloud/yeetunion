"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCookies = useCookies;
var _react = require("react");
var _cookies = require("../cookies");
function useCookies(key, initialState, options) {
  const {
    initializeWithValue = true,
    ...cookieOptions
  } = options ?? {};
  const isObjectState = initialState && typeof initialState === "object";
  const [state, setState] = (0, _react.useState)(initialState);
  (0, _react.useEffect)(() => {
    const storedValue = (0, _cookies.getCookie)(key);
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
      (0, _cookies.setCookie)(key, initialState, cookieOptions);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const updateState = (0, _react.useCallback)(newState => {
    if (isObjectState) {
      setState(prevValue => {
        const updatedState = {
          ...prevValue,
          ...newState
        };
        (0, _cookies.setCookie)(key, updatedState, cookieOptions);
        return updatedState;
      });
    } else {
      (0, _cookies.setCookie)(key, newState, cookieOptions);
      setState(newState);
    }
  }, [cookieOptions, isObjectState, key]);
  const updateField = (0, _react.useCallback)((fieldName, updateValue) => {
    if (isObjectState) {
      updateState({
        [fieldName]: updateValue
      });
    }
  }, [isObjectState, updateState]);
  const resetState = (0, _react.useCallback)(defaultState => {
    setState(defaultState ?? initialState);
    (0, _cookies.removeCookie)(key);
  }, [initialState, key]);
  return (0, _react.useMemo)(() => ({
    state: state,
    setState: updateState,
    setField: updateField,
    resetState
  }), [resetState, updateField, updateState, state]);
}
//# sourceMappingURL=useCookies.js.map