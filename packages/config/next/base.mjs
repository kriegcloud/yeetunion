import bundleAnalyzerPlugin from "@next/bundle-analyzer";


const CSP_DIRECTIVES = {
  "default-src": ["'self'"],
  "base-uri": ["'self'"],
  "form-action": ["'self'"],
  "script-src": [
    "'self'",
    "https://www.google.com",
    "https://maps.googleapis.com",
    "https://www.gstatic.com",
    "https://api.simplesvg.com",
    "https://api.iconify.design",
    "https://api.unisvg.com",
    "blob:",
  ],
  "worker-src": ["'self'", "blob:"],
  "style-src": ["'self'", "https://fonts.googleapis.com", "'unsafe-inline'"],
  "font-src": [
    "'self'",
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
  ],
  "style-src-elem": [
    "'self'",
    "https://fonts.googleapis.com",
    "'unsafe-inline'",
  ],
  "script-src-elem": [
    "'self'",
    "blob:",
    "https://www.google.com",
    "https://www.gstatic.com",
    "https://vercel.live",
    "'unsafe-inline'",
  ],
  "connect-src": [
    "'self'",
    "https://vercel.live/",
    "https://vercel.com",
  ],
  "media-src": ["'self'", "data:"],
  "frame-ancestors": ["'self'", "https://vercel.live", "https://vercel.com"],
  "img-src": [
    "'self'",
    "https://www.google-analytics.com",
    "data:",
  ],
  "frame-src": [
    "'self'",
    "https://google-analytics.com",
    "https://vercel.live",
    "https://vercel.com",
  ],
};

const ENABLE_CSP =
  process.env.VERCEL_ENV === "preview" ||
  process.env.VERCEL_ENV === "production";

const genCSP = () => {
  let csp = "";
  for (const key in CSP_DIRECTIVES) {
    // @ts-ignore
    csp += `${key} ${CSP_DIRECTIVES[key].join(" ")}; `;
  }
  return csp;
};

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "same-origin",
  },
  {
    key: "Content-Security-Policy",
    value: ENABLE_CSP
      ? genCSP()
        .replace(/\s{2,}/g, " ")
        .trim()
      : "",
  },
];

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
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*?)",
        headers: securityHeaders,
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
