export const fallbackLng = "he";
export const defaultNS = "common";

export const languages = ["he", "en"];

export const namespaces = [defaultNS];

export const getOptions = (lng = fallbackLng, ns = defaultNS) => ({
  supportedLngs: languages,
  fallbackLng,
  lng,
  ns,
  defaultNS,
  fallbackNS: defaultNS,
  interpolation: {
    escapeValue: false,
  },
});
