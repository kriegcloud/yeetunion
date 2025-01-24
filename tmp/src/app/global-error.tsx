'use client'

import NextError from 'next/error'

/**
 * A global error component that logs the error to Sentry.
 * @param params the parameters being passed to the page.
 * @param params.error the error instance that was thrown.
 * @returns A Next.js RSC page.
 */
export default function GlobalError({ error: _ }: { error: Error }) {

  return (
    <html lang='en' dir='ltr'>
      <body>
        <NextError statusCode={500} />
      </body>
    </html>
  )
}
