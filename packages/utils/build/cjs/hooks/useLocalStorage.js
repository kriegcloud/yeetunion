"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLocalStorage = useLocalStorage;
var _react = require("react");
var _localStorage = require("../local-storage");
function useLocalStorage(key, initialState, options) {
  const {
    initializeWithValue = true
  } = options ?? {};
  const isObjectState = initialState && typeof initialState === "object";
  const [state, setState] = (0, _react.useState)(initialState);
  (0, _react.useEffect)(() => {
    const storedValue = (0, _localStorage.getStorage)(key);
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
      (0, _localStorage.setStorage)(key, initialState);
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
        (0, _localStorage.setStorage)(key, updatedState);
        return updatedState;
      });
    } else {
      (0, _localStorage.setStorage)(key, newState);
      setState(newState);
    }
  }, [key, isObjectState]);
  const updateField = (0, _react.useCallback)((fieldName, updateValue) => {
    if (isObjectState) {
      updateState({
        [fieldName]: updateValue
      });
    }
  }, [isObjectState, updateState]);
  const resetState = (0, _react.useCallback)(defaultState => {
    setState(defaultState ?? initialState);
    (0, _localStorage.removeStorage)(key);
  }, [initialState, key]);
  return (0, _react.useMemo)(() => ({
    state: state,
    setState: updateState,
    setField: updateField,
    resetState
  }), [resetState, updateField, updateState, state]);
}
//# sourceMappingURL=useLocalStorage.js.map