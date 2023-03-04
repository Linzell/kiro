import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    fallbackLng: 'en-US',
    supportedLngs: ['en-US', 'es-ES', 'fr-FR', 'ja-JP', 'zh-CN'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'path', 'cookie', 'htmlTag', 'subdomain'],
      caches: ['localStorage'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
  });

export default i18n;
