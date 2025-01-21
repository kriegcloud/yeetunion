import {AuthCenteredLayout} from "@ye/ui/layouts";
import type {ReactNode} from "react";

type Props = {
  children: ReactNode;
}

export default function Layout({children}: Props) {
  return (
    <AuthCenteredLayout>{children}</AuthCenteredLayout>
  )
}