import { SimpleLayout } from '@ye/ui/layouts';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <SimpleLayout>{children}</SimpleLayout>;
}
