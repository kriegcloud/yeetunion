import { fileURLToPath } from "node:url";

import bundleAnalyzerPlugin from "@next/bundle-analyzer";
import createJiti from "jiti";

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti("@ye/env/yeetunion/server");
jiti("@ye/env/yeetunion/client");

const withBundleAnalyzer = bundleAnalyzerPlugin({
  enabled: process.env["ANALYZE"] === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@ye/env"],
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    scrollRestoration: true,
    typedRoutes: true,
    serverActions: {
      bodySizeLimit: "20mb",
    },
  },
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
  i18n: {
    locales: ["en-US", "fr-FR"],
    defaultLocale: "en-US",
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/en/dashboard',
        permanent: true,
        locale: false
      },
      {
        source: '/:lang(en|fr)',
        destination: '/:lang/dashboard',
        permanent: true,
        locale: false
      },
      {
        source: '/((?!(?:en|fr|ar|front-pages|favicon.ico)\\b)):path',
        destination: '/en/:path',
        permanent: true,
        locale: false
      }
    ]
  }
};

export default withBundleAnalyzer(nextConfig);
