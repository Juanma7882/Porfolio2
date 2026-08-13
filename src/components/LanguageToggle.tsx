import { useTranslation } from 'react-i18next';

function LanguageToggle() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  const setLanguage = (lang: 'en' | 'es') => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      className="flex items-center gap-1 text-xs font-semibold border border-gray-300 dark:border-gray-600 rounded-full px-1 py-1 select-none"
      title="Change language / Cambiar idioma"
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={isEnglish}
        className={`px-1.5 py-0.5 rounded-full transition-colors ${isEnglish ? 'bg-blue-500 text-white' : 'text-gray-500 dark:text-gray-400 hover:text-blue-500'}`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('es')}
        aria-pressed={!isEnglish}
        className={`px-1.5 py-0.5 rounded-full transition-colors ${!isEnglish ? 'bg-blue-500 text-white' : 'text-gray-500 dark:text-gray-400 hover:text-blue-500'}`}
      >
        ES
      </button>
    </div>
  );
}

export default LanguageToggle;
