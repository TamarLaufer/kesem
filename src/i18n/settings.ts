export const fallbackLng = "he";
export const defaultNS = "common";

export function getOptions(
  lng: string = fallbackLng,
  ns: string[] = [defaultNS]
) {
  return {
    debug: false,
    supportedLngs: ["he", "en"],
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    interpolation: {
      escapeValue: false,
    },
  };
}
