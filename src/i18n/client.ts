import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import { getOptions } from "./settings";
import type { i18n as I18nType } from "i18next";

let isInitialized = false;

export async function initI18nClient(lng: string): Promise<I18nType> {
  if (!isInitialized) {
    await i18n
      .use(initReactI18next)
      .use(HttpBackend)
      .init({
        ...getOptions(lng, ["common"]),
        lng,
        fallbackLng: "he",
        backend: {
          loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
      });

    isInitialized = true;
  }

  return i18n;
}
