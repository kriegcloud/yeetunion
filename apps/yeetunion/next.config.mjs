import baseConfig from "@ye/next-config";
import { fileURLToPath } from "node:url";
import createJiti from "jiti";

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti("@ye/env/yeetunion/server");
jiti("@ye/env/yeetunion/client");

export default {
  ...baseConfig,
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
