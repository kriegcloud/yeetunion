// import type { Metadata } from "next";

import { NotFound } from "@ye/ui/views";

// ----------------------------------------------------------------------

// export const metadata: Metadata = {
//   title: `404 page not found! | Error - ${CONFIG.name}`,
// };

export default function Page() {
  return <NotFound />;
}
