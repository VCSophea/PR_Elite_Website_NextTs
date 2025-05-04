import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "../../public/locales/en-US.json";
import km from "../../public/locales/km-KH.json";

const resources = {
  en: { translation: en },
  km: { translation: km },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "km",
    lng: typeof window !== "undefined" ? localStorage.getItem("i18nextLng") || "km" : "km",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"],
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
    },
  });

export default i18next;
