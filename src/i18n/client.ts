"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { getOptions } from "./settings";

let isInitialized = false;

export const initI18n = async (lng: string) => {
  if (!isInitialized) {
    await i18n
      .use(initReactI18next)
      .use(
        resourcesToBackend(
          (language: string, namespace: string) =>
            import(`../locales/${language}/${namespace}.json`)
        )
      )
      .init(getOptions(lng));
    isInitialized = true;
  }

  return i18n;
};
