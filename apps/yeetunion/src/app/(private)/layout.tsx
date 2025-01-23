import {DashboardLayout} from '@ye/ui/layouts';


// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({children}: Props) {


  return (
    <DashboardLayout>{children}</DashboardLayout>
  );
}
