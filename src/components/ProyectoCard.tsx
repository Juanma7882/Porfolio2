import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Proyecto } from '../types';
import { useTranslation } from 'react-i18next';
import { technologyIcons } from '../data/icons';

const ProyectoCard = ({
    proyecto,
    index,
    inView,
    variant = 'compact',
    wide = false,
}: {
    proyecto: Proyecto;
    index: number;
    inView: boolean;
    variant?: 'hero' | 'feature' | 'compact';
    wide?: boolean;
}) => {
    const { t } = useTranslation();
    const [hovered, setHovered] = useState(false);

    const glowColor = technologyIcons.find(
        t => t.nombre.toLowerCase() === proyecto.tecnologias[0]?.nombre.toLowerCase()
    )?.colors?.[0] ?? '#6b7280';

    const delay = Math.floor(index / 2) * 120 + (index % 2) * 60;
    const cover = proyecto.imagenes[0];
    const titulo = t(proyecto.titulo);

    const TechRow = ({ count }: { count: number }) => (
        <div className="flex items-center gap-1.5 flex-wrap justify-center">
            {proyecto.tecnologias.slice(0, count).map((tec, i) => (
                <span key={i} className="w-5 h-5 shrink-0" title={tec.nombre}>
                    {tec.icono}
                </span>
            ))}
        </div>
    );

    let content;

    if (variant === 'hero') {
        content = (
            <div
                className="h-full flex flex-col gap-3 p-4"
                style={{ background: `radial-gradient(circle at 30% 15%, ${glowColor}33, transparent 65%)` }}
            >
                <h3 className="text-xl font-bold">{titulo}</h3>
                {cover && (
                    <div className="w-full h-60 rounded-xl overflow-hidden shrink-0">
                        <img
                            src={cover}
                            alt={titulo}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                )}
                <TechRow count={6} />
            </div>
        );
    } else if (variant === 'feature') {
        content = (
            <div className={`relative h-full flex ${wide ? 'flex-row items-center gap-4' : 'flex-col justify-center gap-3'} p-4`}>
                <div
                    className="absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${glowColor}2a, transparent 70%)` }}
                />
                <span className="w-10 h-10 shrink-0 relative">{proyecto.tecnologias[0]?.icono}</span>
                <div className="flex flex-col gap-2 relative text-left">
                    <h3 className="text-lg font-bold text-center sm:text-left">{titulo}</h3>
                    <p className={`text-sm text-gray-600 dark:text-gray-400 ${wide ? 'line-clamp-2' : 'line-clamp-3'}`}>
                        {t(proyecto.descripcion)}
                    </p>
                    <TechRow count={4} />
                </div>
            </div>
        );
    } else {
        content = (
            <div className="h-full flex flex-col">
                <div className="w-full h-24 shrink-0 flex items-center justify-center bg-black/5 dark:bg-white/5">
                    {cover ? (
                        <img
                            src={cover}
                            alt={titulo}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                    ) : (
                        <span className="w-12 h-12">{proyecto.tecnologias[0]?.icono}</span>
                    )}
                </div>
                <div className="flex flex-col gap-1.5 p-2.5">
                    <h3 className="text-base font-semibold line-clamp-1">{titulo}</h3>
                    <TechRow count={3} />
                </div>
            </div>
        );
    }

    return (
        <div
            className={`h-full transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <Link
                to={`/proyectos/${proyecto.slug}`}
                className="h-full block text-center bg-gray-200 dark:bg-[#09090c] border border-solid rounded-2xl transition-all duration-300 overflow-hidden"
                style={{
                    borderColor: hovered ? `${glowColor}99` : 'rgba(107,114,128,0.3)',
                    boxShadow: hovered ? `0 8px 32px ${glowColor}33, 0 0 0 1px ${glowColor}44` : 'none',
                    transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {content}
            </Link>
        </div>
    );
};

export default ProyectoCard;
