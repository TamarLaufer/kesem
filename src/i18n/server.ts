import { createInstance } from "i18next";
import { promises as fs } from "fs";
import path from "path";
import { getOptions } from "./settings";

export async function initI18nServer(lng: string, ns: string = "common") {
  const i18nInstance = createInstance();

  const translationFilePath = path.resolve(
    process.cwd(),
    `public/locales/${lng}/${ns}.json`
  );

  const fileContent = await fs.readFile(translationFilePath, "utf-8");

  await i18nInstance.init({
    ...getOptions(lng, [ns]),
    resources: {
      [lng]: {
        [ns]: JSON.parse(fileContent),
      },
    },
  });

  return {
    t: i18nInstance.getFixedT(lng, ns),
  };
}
