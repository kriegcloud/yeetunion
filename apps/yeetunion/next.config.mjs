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
  i18n: {
    locales: ["en-US", "fr-FR"],
    defaultLocale: "en-US",
  },
};

export default withBundleAnalyzer(nextConfig)