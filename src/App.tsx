import '../src/styles/index.css'
import { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar.tsx';
import './assets/language/changeLanguage.ts'
import { Oneko } from './components/Oneko.tsx'

const Home = lazy(() => import("./pages/main/Home.tsx"))
const AboutMe = lazy(() => import("./pages/main/AboutMe.tsx"))
const Projects = lazy(() => import("./pages/main/Projects.tsx"))
const Technology = lazy(() => import("./pages/main/Technology.tsx"))
const ContactMe = lazy(() => import("./pages/main/ContactMe.tsx"))
const ProyectoDetalle = lazy(() => import("./pages/proyectos/ProyectoDetalle.tsx"))

function ScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;

        const id = hash.slice(1);
        let attempts = 0;

        const tryScroll = () => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'auto', block: 'start' });
            } else if (attempts < 20) {
                attempts += 1;
                requestAnimationFrame(tryScroll);
            }
        };

        tryScroll();
    }, [hash]);

    return null;
}

function HomePage() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Suspense fallback={<div className='min-h-screen bg-white dark:bg-black' />}>
                    <ScrollToHash />
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
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/proyectos/:slug"
                    element={
                        <Suspense fallback={<div className='min-h-screen bg-white dark:bg-black' />}>
                            <ProyectoDetalle />
                        </Suspense>
                    }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    );
}

export default App;
