import DarkModeToggle from './components/DarkModeToggle';
import LanguageToggle from './components/LanguageToggle';
import '../src/styles/index.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

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
          <li className='flex items-center justify-center'>
            <LanguageToggle />
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
            <LanguageToggle />
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
