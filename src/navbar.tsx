import DarkModeToggle from '../src/darkModeToggle';
// import './index.css'
import '../src/styles/index.css'
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };
  return (
    <nav className="w-full py-4 px-6 bg-white shadow-md z-10 fixed top-0 dark:text-white dark:bg-black">
      <div className="flex items-center justify-between max-w-7xl mx-auto">

        {/* Menú Izquierdo */}
        <ul className="flex gap-6 text-gray-800 font-medium text-sm sm:text-base dark:text-gray-100">
          <li className="hover:text-blue-500 cursor-pointer">{t("navbar.home")}</li>
          <li className="hover:text-blue-500 cursor-pointer">{t("navbar.about")}</li>
          <li className="hover:text-blue-500 cursor-pointer">{t("navbar.projects")}</li>
          <li className="hover:text-blue-500 cursor-pointer">{t("navbar.technology")}</li>
        </ul>

        {/* Menú Derecho */}
        <ul className="flex gap-4 items-center justify-center text-gray-800 font-medium text-sm sm:text-base  dark:text-gray-100">
          <li className="hover:text-blue-500 cursor-pointer">{t("navbar.contact")}</li>

          <li className='flex items-center justify-center'><DarkModeToggle /></li>

          {/* Idioma */}
          <li className="w-5 h-5 hover:scale-110 transition-transform cursor-pointer"
            onClick={toggleLanguage}
            title='change language'
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icon-tabler-language hover:text-blue-400 transition-colors duration-300 "
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 5h7" />
              <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
              <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
              <path d="M12 20l4 -9l4 9" />
              <path d="M19.1 18h-6.2" />
            </svg>

          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
