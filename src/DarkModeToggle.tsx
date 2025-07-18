import { useEffect, useState } from 'react';

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Leer la preferencia al cargar
  useEffect(() => {
    const darkPreference = localStorage.getItem('theme') === 'dark';
    setIsDark(darkPreference);
    if (darkPreference) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Alternar tema
  const toggleDarkMode = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="hover:text-yellow-400 dark:hover:text-purple-400 transition"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        // 🌞 Modo claro
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
        </svg>
      ) : (
        // 🌙 Modo oscuro
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
        </svg>
      )}
    </button>
  );
}

export default DarkModeToggle;
