import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './english/translation.json';
import translationES from './spanish/translation.json';

const resources = {
  en: { translation: translationEN },
  es: { translation: translationES },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // elegimos el idioma por defecto
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
