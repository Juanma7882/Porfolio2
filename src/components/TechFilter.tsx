import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { Proyecto } from '../types';
import { technologyIcons } from '../data/icons';

const TechFilter = ({
    proyectos,
    selected,
    onToggle,
}: {
    proyectos: Proyecto[];
    selected: Set<string>;
    onToggle: (tech: string) => void;
}) => {
    const { t } = useTranslation();

    const techs = useMemo(() => {
        const counts = new Map<string, number>();
        proyectos.forEach(p => {
            p.tecnologias.forEach(tec => {
                counts.set(tec.nombre, (counts.get(tec.nombre) ?? 0) + 1);
            });
        });
        return [...counts.entries()]
            .sort((a, b) => b[1] - a[1])
            .map(([nombre]) => nombre);
    }, [proyectos]);

    return (
        <div className="flex flex-wrap justify-center gap-2 px-4">
            <button
                type="button"
                onClick={() => onToggle('__all__')}
                className="flex items-center h-8 whitespace-nowrap rounded-xl px-3 border border-solid transition-all"
                style={{
                    backgroundColor: selected.size === 0 ? 'rgba(107,114,128,0.18)' : 'transparent',
                    borderColor: selected.size === 0 ? 'rgba(107,114,128,0.7)' : 'rgba(156,163,175,0.4)',
                }}
            >
                <p className="text-sm">{t('projects.filters.all')}</p>
            </button>
            {techs.map(nombre => {
                const meta = technologyIcons.find(
                    t => t.nombre.toLowerCase() === nombre.toLowerCase()
                );
                const color = meta?.colors?.[0];
                const active = selected.has(nombre);
                return (
                    <button
                        type="button"
                        key={nombre}
                        onClick={() => onToggle(nombre)}
                        className="flex items-center gap-1.5 h-8 whitespace-nowrap rounded-xl px-3 border border-solid transition-all"
                        style={{
                            backgroundColor: active ? `${color ?? '#6b7280'}30` : 'transparent',
                            borderColor: active ? `${color ?? '#6b7280'}99` : 'rgba(156,163,175,0.4)',
                        }}
                    >
                        {meta?.icono && <span className="w-4 h-4 shrink-0">{meta.icono}</span>}
                        <p className="text-sm">{nombre}</p>
                    </button>
                );
            })}
        </div>
    );
};

export default TechFilter;
