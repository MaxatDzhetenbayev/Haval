import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import kzTranslation from "@/assets/locales/kz/translation.js";
import ruTranslation from "@/assets/locales/ru/translation.js";
const resources = {
    ru: {
      translation: ruTranslation,
    },
    kz: {
      translation: kzTranslation,
    },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
