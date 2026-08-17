import { useEffect, useMemo, useRef, useState } from 'react';
import '../../styles/index.css';
import { proyectos } from '../../data/proyectos';
import ProyectoCard from '../../components/ProyectoCard';
import TechFilter from '../../components/TechFilter';
import { LogoCarousel } from '../components/logo-carrusel/LogoCarrusel';

const gradientText = {
    background: 'linear-gradient(to right, #2563eb, #9333ea)',
    WebkitBackgroundClip: 'text' as const,
    WebkitTextFillColor: 'transparent' as const,
    backgroundClip: 'text' as const,
};

function Projects() {
    const sectionRef = useRef<HTMLElement>(null);
    const [inView, setInView] = useState(false);
    const [selectedTechs, setSelectedTechs] = useState<Set<string>>(new Set());

    const toggleTech = (tech: string) => {
        if (tech === '__all__') {
            setSelectedTechs(new Set());
            return;
        }
        setSelectedTechs(prev => {
            const next = new Set(prev);
            if (next.has(tech)) {
                next.delete(tech);
            } else {
                next.add(tech);
            }
            return next;
        });
    };

    const filteredProyectos = useMemo(() => {
        if (selectedTechs.size === 0) return proyectos;
        return proyectos.filter(p =>
            p.tecnologias.some(tec => selectedTechs.has(tec.nombre))
        );
    }, [selectedTechs]);

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
                <h2 className='w-full mb-4 text-4xl sm:text-3xl md:text-4xl lg:text-5xl px-4 text-center'>
                    <span style={gradientText}>Mis Proyectos</span>
                </h2>
                <TechFilter proyectos={proyectos} selected={selectedTechs} onToggle={toggleTech} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-55 lg:grid-flow-dense gap-6 lg:mx-10 xl:mx-20">
                    {filteredProyectos.map((proyecto, index) => {
                        const featured = proyecto.featured;
                        const variant = featured === 'hero' ? 'hero' : featured ? 'feature' : 'compact';
                        const wide = featured === 'feature-wide';
                        const spanClass =
                            featured === 'hero'
                                ? 'lg:col-span-2 lg:row-span-2'
                                : featured === 'feature-tall'
                                    ? 'lg:row-span-2'
                                    : featured === 'feature-wide'
                                        ? 'lg:col-span-2'
                                        : '';
                        return (
                            <div key={proyecto.slug} className={spanClass}>
                                <ProyectoCard proyecto={proyecto} index={index} inView={inView} variant={variant} wide={wide} />
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}

export default Projects;
