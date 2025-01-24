"use client";
import {DashboardLayout} from '@ye/ui/layouts';
import React from "react";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({children}: Props) {


  return (
    <DashboardLayout>

      {children}
    </DashboardLayout>
  );
}
