import type { Metadata } from "next";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Yee Bois",
  description: "For the Bois",
};

/**
 * The root layout of the entire application. This is where we wrap the entire application in the necessary providers.
 * @param props The props to the layout, which will be every page in this application.
 * @param props.children The children, which is the page the user is currently on.
 * @returns The layout of the application.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
