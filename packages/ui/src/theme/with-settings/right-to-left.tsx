import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { useEffect } from "react";
import rtlPlugin from "stylis-plugin-rtl";

import type { ThemeDirection } from "../types";

// ----------------------------------------------------------------------

type RtlProps = {
  children: React.ReactNode;
  direction: ThemeDirection;
};

export function Rtl({ children, direction }: RtlProps) {
  const cacheRtl = createCache({
    key: "rtl",
    prepend: true,
    stylisPlugins: [rtlPlugin],
  });

  useEffect(() => {
    document.dir = direction;
  }, [direction]);

  if (direction === "rtl") {
    return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
  }

  return <>{children}</>;
}
