import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/en/translation.json";
import translationDU from "./locales/du/translation.json";

const fallbackLng = ["du"];
const availableLanguages = ["en", "du"];

const resources = {
  en: {
    translation: translationEN,
  },
  du: {
    translation: translationDU,
  },
};
i18n
  .use(Backend) // load translations using http (default                                               public/assets/locals/en/translations)
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    resources,
    fallbackLng, // fallback language is english.

    detection: {
      checkWhitelist: true, // options for language detection
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false, // no need for react. it escapes by default
    },
  });

export default i18n;
