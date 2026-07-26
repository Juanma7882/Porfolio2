import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import "../../../node_modules/swiper/swiper.css";
import "../../../node_modules/swiper/modules/navigation.css";
import "../../../node_modules/swiper/modules/pagination.css";
import { proyectos } from '../../data/proyectos';
import { technologyIcons } from '../../data/icons';
import DarkModeToggle from '../../components/DarkModeToggle';

function StoryBeat({
    align,
    eyebrow,
    text,
    glowColor,
    imagen,
}: {
    align: 'left' | 'right';
    eyebrow: string;
    text: string;
    glowColor: string;
    imagen?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    const isRight = align === 'right';

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setInView(true);
            },
            { threshold: 0.35 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const card = (
        <div
            ref={ref}
            className="p-6 rounded-2xl border transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none"
            style={{
                borderColor: `${glowColor}40`,
                backgroundColor: `${glowColor}0d`,
                opacity: inView ? 1 : 0,
                transform: inView
                    ? 'translate(0, 0)'
                    : `translate(${isRight ? '32px' : '-32px'}, 16px)`,
            }}
        >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: glowColor }}>
                {eyebrow}
            </span>
            <p className="mt-2 leading-relaxed">{text}</p>
        </div>
    );

    return (
        <div className="relative">
            <span
                className="absolute top-7 left-4 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 z-10 transition-colors duration-500 motion-reduce:transition-none"
                style={{
                    borderColor: glowColor,
                    backgroundColor: inView ? glowColor : 'transparent',
                    boxShadow: inView ? `0 0 14px ${glowColor}aa` : 'none',
                }}
                aria-hidden="true"
            />
            {imagen ? (
                <div
                    className={`pl-10 md:pl-0 flex flex-col gap-4 md:flex-row md:items-center md:gap-[8%] ${isRight ? 'md:flex-row-reverse' : ''
                        }`}
                >
                    <div className="md:w-[46%]">{card}</div>
                    <div
                        className="md:w-[46%] rounded-2xl overflow-hidden border aspect-video"
                        style={{ borderColor: `${glowColor}40`, backgroundColor: `${glowColor}0d` }}
                    >
                        <img
                            src={imagen}
                            alt={eyebrow}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            ) : (
                <div className={`pl-10 md:pl-0 md:w-[46%] ${isRight ? 'md:ml-auto' : ''}`}>{card}</div>
            )}
        </div>
    );
}

function ProyectoDetalle() {
    const { slug } = useParams<{ slug: string }>();
    const { t } = useTranslation();
    const proyecto = proyectos.find(p => p.slug === slug);

    if (!proyecto) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-white dark:bg-black dark:text-white px-4">
                <p className="text-xl text-center">{t('projectDetail.notFound')}</p>
                <Link to="/" className="underline hover:text-blue-500 transition-colors">
                    {t('projectDetail.back')}
                </Link>
            </div>
        );
    }

    const glowColor = technologyIcons.find(
        t => t.nombre.toLowerCase() === proyecto.tecnologias[0]?.nombre.toLowerCase()
    )?.colors?.[0] ?? '#6b7280';

    const detalleSecciones = proyecto.detalle
        ? ([
            ['participacion', proyecto.detalle.participacion],
            ['diseno', proyecto.detalle.diseno],
            ['alcance', proyecto.detalle.alcance],
            ['solucion', proyecto.detalle.solucion],
        ] as const)
        : [];

    return (
        <div className="min-h-screen bg-white dark:bg-black dark:text-white">
            <header className="w-full py-4 px-6 flex items-center justify-between border-b border-gray-500/20">
                <Link to="/" className="flex items-center gap-2 font-semibold hover:text-blue-500 transition-colors">
                    <span aria-hidden="true">←</span>
                    {t('projectDetail.back')}
                </Link>
                <DarkModeToggle />
            </header>

            <main className="max-w-4xl mx-auto px-4 py-10 flex flex-col gap-8">
                <div className="relative flex items-center justify-center">
                    <div
                        className="absolute w-64 h-64 rounded-full blur-3xl -z-10"
                        style={{ backgroundColor: `${glowColor}33` }}
                        aria-hidden="true"
                    />
                    <h1 className="text-3xl sm:text-4xl font-bold text-center">{t(proyecto.titulo)}</h1>
                </div>

                <div className="w-full h-72 md:h-96">
                    {proyecto.imagenes.length > 0 ? (
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            pagination={{ clickable: true }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper h-full"
                        >
                            {proyecto.imagenes.map((img, i) => (
                                <SwiperSlide key={i}>
                                    <img
                                        src={img}
                                        alt={`slide-${i}`}
                                        className="swiper-slide"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className="h-full flex items-center justify-center border border-dashed border-gray-500/40 rounded-2xl text-gray-500 dark:text-gray-400 text-center px-6">
                            {t('projectDetail.noImages')}
                        </div>
                    )}
                </div>

                <div className="flex justify-center items-center gap-2 flex-wrap">
                    {proyecto.tecnologias.map((tec, i) => {
                        const color = technologyIcons.find(
                            t => t.nombre.toLowerCase() === tec.nombre.toLowerCase()
                        )?.colors?.[0];
                        return (
                            <div
                                key={i}
                                className="flex items-center gap-1 h-8 w-auto whitespace-nowrap rounded-xl px-2 py-1 border border-solid"
                                style={{
                                    backgroundColor: color ? `${color}18` : 'transparent',
                                    borderColor: color ? `${color}55` : 'rgba(156,163,175,0.4)',
                                }}
                            >
                                <span className="w-4 h-4 shrink-0">{tec.icono}</span>
                                <p className="text-sm">{tec.nombre}</p>
                            </div>
                        );
                    })}
                </div>

                <p className="text-lg leading-relaxed">{t(proyecto.descripcion)}</p>

                {detalleSecciones.length > 0 && (
                    <div className="relative py-4">
                        <div
                            className="absolute top-0 bottom-0 w-px left-4 md:left-1/2 md:-translate-x-1/2"
                            style={{ background: `linear-gradient(to bottom, transparent, ${glowColor}66, transparent)` }}
                            aria-hidden="true"
                        />
                        <div className="flex flex-col gap-12 md:gap-16">
                            {detalleSecciones.map(([key, seccion], i) => (
                                <StoryBeat
                                    key={key}
                                    align={i % 2 === 0 ? 'left' : 'right'}
                                    eyebrow={t(`projectDetail.sections.${key}`)}
                                    text={t(seccion.texto)}
                                    imagen={seccion.imagen}
                                    glowColor={glowColor}
                                />
                            ))}
                        </div>
                    </div>
                )}

                <div className="w-full flex gap-2">
                    {proyecto.github && (
                        <a
                            href={proyecto.github}
                            className="shimmer-btn flex-1 py-3 px-6 rounded-xl border border-gray-500/40 dark:text-white font-semibold text-center active:scale-95 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    )}
                    {proyecto.pagina && (
                        <a
                            href={proyecto.pagina}
                            className="flex-1 py-3 px-6 rounded-xl font-semibold text-center active:scale-95 transition-all text-white"
                            style={{ background: `linear-gradient(135deg, ${glowColor}cc, ${glowColor}88)` }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </main>
        </div>
    );
}

export default ProyectoDetalle;
