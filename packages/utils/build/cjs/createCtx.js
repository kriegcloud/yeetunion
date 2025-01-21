"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCtx = void 0;
var _react = require("react");
const createCtx = () => {
  const ctx = (0, _react.createContext)(undefined);
  function useCtx() {
    const c = (0, _react.useContext)(ctx);
    if (c === undefined) throw new Error("useCtx must be inside a Provider with a value");
    return c;
  }
  return [useCtx, ctx.Provider]; // 'as const' makes TypeScript infer a tuple
};
exports.createCtx = createCtx;
//# sourceMappingURL=createCtx.js.map