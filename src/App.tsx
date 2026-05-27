import '../src/styles/index.css'
import { useEffect, useState } from 'react';

import AboutMe from './pages/main/AboutMe.tsx';
import Home from './pages/main/Home.tsx';
import Navbar from './Navbar.tsx';
// import Projects from './Projects.tsx';
import './assets/language/changeLanguage.ts'
import Projects from './pages/main/Projects.tsx';
import Technology from './pages/main/Technology.tsx';
import ContactMe from './pages/main/ContactMe.tsx';




function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const localStorageTheme = localStorage.getItem('theme')
        if (!localStorageTheme) {
            const systemTheme = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches
                ? "dark"
                : "light";

            localStorage.setItem('theme', systemTheme)
            setTheme(theme)
        } else {
            setTheme(localStorageTheme)
            document.documentElement.setAttribute(
                "data-theme",
                localStorageTheme);
        }
    }, [theme]);

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                {/* <main className='relative'> */}
                <Home />
                <AboutMe />
                <Projects />
                <Technology />
                <ContactMe />
            </main>

        </>
    );
}

export default App;
