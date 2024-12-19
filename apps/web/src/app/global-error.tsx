"use client";

import NextError from "next/error";

/**
 * A global error component that logs the error to Sentry.
 * @returns A Next.js RSC page.
 */
export default function GlobalError() {
  return (
    <html lang="en" dir="ltr">
      <body>
        <NextError statusCode={500} />
      </body>
    </html>
  );
}
