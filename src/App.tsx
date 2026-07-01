import '../src/styles/index.css'
import { useEffect, useState, lazy, Suspense } from 'react';
import Navbar from './Navbar.tsx';
import './assets/language/changeLanguage.ts'
import { Oneko } from './components/Oneko.tsx'

const Home = lazy(() => import("./pages/main/Home.tsx"))
const AboutMe = lazy(() => import("./pages/main/AboutMe.tsx"))
const Projects = lazy(() => import("./pages/main/Projects.tsx"))
const Technology = lazy(() => import("./pages/main/Technology.tsx"))
const ContactMe = lazy(() => import("./pages/main/ContactMe.tsx"))

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
            setTheme(systemTheme)
        } else {
            setTheme(localStorageTheme)
            document.documentElement.setAttribute(
                "data-theme",
                localStorageTheme);
        }
    }, [theme]);

    return (
        <>
            <Oneko />
            <header>
                <Navbar />
            </header>
            <main>
                <Suspense fallback={<div className='min-h-screen' />}>
                    <Home />
                    <AboutMe />
                    <Projects />
                    <Technology />
                    <ContactMe />
                </Suspense>
            </main>
        </>
    );
}

export default App;
