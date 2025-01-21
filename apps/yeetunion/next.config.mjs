import { fileURLToPath } from "node:url";
import baseConfig from "@ye/next-config";
import createJiti from "jiti";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti("@ye/env/yeetunion/server");
jiti("@ye/env/yeetunion/client");

const config = {
  ...baseConfig,
  transpilePackages: ["@ye/ui"],
};

export default withNextIntl(config);
