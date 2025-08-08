import DarkModeToggle from './components/DarkModeToggle';
import '../src/styles/index.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="w-full py-4 px-6 bg-white shadow-md z-10 fixed top-0 dark:text-white dark:bg-black">
      <div className="flex items-center justify-between max-w-7xl mx-auto">

        {/* Menú izquierdo (desktop) */}
        <ul className="hidden sm:flex gap-6 text-gray-800 font-medium text-sm sm:text-base dark:text-gray-100">
          <li className="hover:text-blue-500 cursor-pointer"><a href="#home">{t("navbar.home")}</a></li>
          <li className="hover:text-blue-500 cursor-pointer"><a href="#about">{t("navbar.about")}</a></li>
          <li className="hover:text-blue-500 cursor-pointer"><a href="#projects">{t("navbar.projects")}</a></li>
          <li className="hover:text-blue-500 cursor-pointer"><a href="#technologies">{t("navbar.technology")}</a></li>
        </ul>

        {/* Menú derecho (desktop) */}
        <ul className="hidden sm:flex gap-4 items-center justify-center text-gray-800 font-medium text-sm sm:text-base dark:text-gray-100">
          <li className="hover:text-blue-500 cursor-pointer"><a href="#contact">{t("navbar.contact")}</a></li>
          <li className='flex items-center justify-center'><DarkModeToggle /></li>
          <li
            className="w-5 h-5 hover:scale-110 transition-transform cursor-pointer "
            onClick={toggleLanguage}
            title="change language"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              className="hover:text-blue-400 transition-colors duration-300">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 5h7" />
              <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
              <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
              <path d="M12 20l4 -9l4 9" />
              <path d="M19.1 18h-6.2" />
            </svg>
          </li>
        </ul>

        {/* Botón hamburguesa (mobile) */}
        <div className='flex  gap-1.5 justify-between items-center space-be w-full sm:hidden'>
          <button
            className="flex flex-col gap-1.5 "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="h-0.5 w-6 bg-black dark:bg-white"></div>
            <div className="h-0.5 w-6 bg-black dark:bg-white"></div>
            <div className="h-0.5 w-6 bg-black dark:bg-white"></div>

          </button>
          <div className="px-4 py-2 flex gap-4 items-center">
            <DarkModeToggle />
            <button onClick={toggleLanguage} title="change language" className="hover:text-blue-400 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              className="hover:text-blue-400 transition-colors duration-300">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 5h7" />
              <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
              <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
              <path d="M12 20l4 -9l4 9" />
              <path d="M19.1 18h-6.2" />
            </svg></button>
          </div>
        </div>
      </div>

      {/* Menú desplegable (mobile) */}
      {menuOpen && (
        <div className="sm:hidden mt-4 space-y-2">
          <a href="#home" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">{t("navbar.home")}</a>
          <a href="#about" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">{t("navbar.about")}</a>
          <a href="#projects" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">{t("navbar.projects")}</a>
          <a href="#technologies" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">{t("navbar.technology")}</a>
          <a href="#contact" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">{t("navbar.contact")}</a>
          {/* <div className="px-4 py-2 flex gap-4 items-center">
            <DarkModeToggle />
            <button onClick={toggleLanguage} title="change language" className="hover:text-blue-400 transition-colors">change lenguaje</button>
          </div> */}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
