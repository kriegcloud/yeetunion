// import type { Metadata } from 'next';
//
// import { CONFIG } from '@ye/core/yeetunion';

import { AboutView } from '@ye/ui/views';

// ----------------------------------------------------------------------

// export const metadata: Metadata = { title: `About us - ${CONFIG.name}` };

export default function Page() {
  return <AboutView />;
}
