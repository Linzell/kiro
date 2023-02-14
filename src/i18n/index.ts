import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import enUS from './en-US';
import esES from './es-ES';
import frFR from './fr-FR';
import jaJP from './ja-JP';
import zhCN from './zh-CN';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: enUS,
      es: esES,
      fr: frFR,
      ja: jaJP,
      zh: zhCN,
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
