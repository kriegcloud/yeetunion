import fs from "node:fs";
import path from "node:path";
import { SupportedLocales } from "../src";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const localesPath = path.join(__dirname, "../src/langs");

const main = async () => {
  Object.values(SupportedLocales).map(async (locale) => {
    const filePath = `${localesPath}/${locale}.json`;
    const data = await import(`./langs/${locale}.ts`);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  });
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
