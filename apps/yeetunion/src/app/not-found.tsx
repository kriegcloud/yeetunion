import type { Metadata } from 'next';


import { NotFoundView } from '@ye/ui/views';

// ----------------------------------------------------------------------

export const metadata: Metadata = { title: `404 page not found! | Error - Yeet Union` };

export default function Page() {
  return <NotFoundView />;
}
