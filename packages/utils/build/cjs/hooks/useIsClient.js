"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIsClient = useIsClient;
var _react = require("react");
function useIsClient() {
  const [isClient, setClient] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    setClient(true);
  }, []);
  return isClient;
}
//# sourceMappingURL=useIsClient.js.map