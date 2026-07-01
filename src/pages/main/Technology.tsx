import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { technologyIcons } from "../../data/icons";

function Technology() {
    const { t } = useTranslation();
    const sectionRef = useRef<HTMLElement>(null);
    const [inView, setInView] = useState(false);
    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

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
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => { observer.disconnect(); clearTimeout(timeout); };
    }, []);

    const colorMap = useMemo(
        () => Object.fromEntries(technologyIcons.map(t => [t.nombre.toLowerCase(), t.colors?.[0]])),
        []
    );

    const nameAliases: Record<string, string> = { 'node': 'node.js', 'nosql': 'mongodb' };
    const getColor = (nombre: string) => {
        const key = nombre.toLowerCase();
        return colorMap[key] ?? colorMap[nameAliases[key] ?? ''];
    };

    const tecnologiasPorCategoria = useMemo(() => {
        const icon = Object.fromEntries(technologyIcons.map(t => [t.nombre, t.icono]));
        return [
            {
                titulo: "technologies.fronted",
                tecnologias: [
                    { nombre: "HTML5", icono: icon["HTML5"] },
                    { nombre: "CSS3", icono: icon["CSS3"] },
                    { nombre: "JavaScript", icono: icon["JavaScript"] },
                    { nombre: "React", icono: icon["React"] },
                    { nombre: "Angular", icono: icon["Angular"] },
                ]
            },
            {
                titulo: "technologies.backend",
                tecnologias: [
                    { nombre: "C#", icono: icon["C#"] },
                    { nombre: ".NET", icono: icon[".NET"] },
                    { nombre: "Node", icono: icon["Node.js"] },
                    { nombre: "Python", icono: icon["Python"] },
                    { nombre: "NestJS", icono: icon["NestJS"] },
                ]
            },
            {
                titulo: "technologies.tools",
                tecnologias: [
                    { nombre: "Git", icono: icon["Git"] },
                    { nombre: "GitHub", icono: icon["GitHub"] },
                    { nombre: "SQL", icono: icon["SQL"] },
                    { nombre: "NoSQL", icono: icon["MongoDB"] },
                    { nombre: "Postman", icono: icon["Postman"] },
                ]
            },
            {
                titulo: "technologies.others",
                tecnologias: [
                    { nombre: "Docker", icono: icon["Docker"] },
                    { nombre: "TypeScript", icono: icon["TypeScript"] },
                    { nombre: "Linux", icono: icon["Linux"] },
                ]
            }
        ];
    }, []);

    return (
        <section ref={sectionRef} className="dark:text-white dark:bg-black min-h-screen flex items-center justify-center flex-col px-4" id="technologies">
            <h2
                className={`w-full mb-4 text-4xl sm:text-3xl md:text-4xl lg:text-5xl px-4 text-center transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}
                style={{ transitionDelay: '0ms' }}
            >
                {t("technologies.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {tecnologiasPorCategoria.map((categoria, i) => {
                    const accentColor = getColor(categoria.tecnologias[0]?.nombre) ?? '#6b7280';
                    return (
                        <div
                            key={i}
                            className={`flex flex-col items-center justify-center gap-4 mx-4 my-6 p-4 rounded-lg border border-gray-500/40 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{
                                transitionDelay: `${i * 120 + 100}ms`,
                                borderTop: `2px solid ${accentColor}88`
                            }}
                        >
                            <h3 className="text-2xl py-4.5">{t(categoria.titulo)}</h3>
                            <div className="flex justify-center gap-4 flex-wrap">
                                {categoria.tecnologias.map((tec, j) => {
                                    const color = getColor(tec.nombre);
                                    const isHovered = hoveredIcon === `${i}-${j}`;
                                    return (
                                        <div
                                            key={j}
                                            className="flex flex-col items-center w-20 gap-2 cursor-default"
                                            onMouseEnter={() => setHoveredIcon(`${i}-${j}`)}
                                            onMouseLeave={() => setHoveredIcon(null)}
                                        >
                                            <div
                                                className="w-14 h-14 flex items-center justify-center"
                                                style={{
                                                    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                                                    filter: isHovered && color ? `drop-shadow(0 0 8px ${color}bb)` : 'none',
                                                    transition: 'transform 0.2s ease, filter 0.2s ease',
                                                }}
                                            >
                                                {tec.icono}
                                            </div>
                                            <span
                                                className="text-center text-sm transition-colors duration-200"
                                                style={{ color: isHovered && color ? color : undefined }}
                                            >
                                                {tec.nombre}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Technology;
