import { useEffect, useRef, useState } from 'react';
import '../../styles/index.css';
import { proyectos } from '../../data/proyectos';
import ProyectoCard from '../../components/ProyectoCard';
import { LogoCarousel } from '../components/logo-carrusel/LogoCarrusel';

function Projects() {
    const sectionRef = useRef<HTMLElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        let timeout: ReturnType<typeof setTimeout>;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    timeout = setTimeout(() => {
                        setInView(true);
                        observer.disconnect();
                    }, 200);
                }
            },
            { threshold: 0.05 }
        );
        observer.observe(el);
        return () => { observer.disconnect(); clearTimeout(timeout); };
    }, []);

    return (
        <>
            <div className='flex flex-col gap-5 bg-white dark:text-white dark:bg-black py-18'>
                <LogoCarousel duration={45} gap={20} cardSize={120} left={true} />
                <LogoCarousel duration={45} gap={20} cardSize={120} />
            </div>
            <section ref={sectionRef} id="projects" className='bg-white dark:bg-black dark:text-white min-h-screen flex items-center justify-center flex-col px-4 gap-10 scroll-mt-20 pt-11'>
                <h2 className='w-full mb-4 text-4xl sm:text-3xl md:text-4xl lg:text-5xl px-4 text-center'>Mis Proyectos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:mx-10 xl:mx-20">
                    {proyectos.map((proyecto, index) => (
                        <ProyectoCard proyecto={proyecto} key={index} index={index} inView={inView} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Projects;
