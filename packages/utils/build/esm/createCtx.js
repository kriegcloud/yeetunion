import { createContext, useContext } from "react";
export const createCtx = () => {
  const ctx = createContext(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (c === undefined) throw new Error("useCtx must be inside a Provider with a value");
    return c;
  }
  return [useCtx, ctx.Provider]; // 'as const' makes TypeScript infer a tuple
};
//# sourceMappingURL=createCtx.js.map