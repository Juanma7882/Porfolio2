import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Proyecto } from '../types';
import "../../node_modules/swiper/swiper.css";
import "../../node_modules/swiper/modules/navigation.css";
import "../../node_modules/swiper/modules/pagination.css";
import { useTranslation } from 'react-i18next';
import { technologyIcons } from '../data/icons';

const ProyectoCard = ({ proyecto, index, inView }: { proyecto: Proyecto; index: number; inView: boolean }) => {
    const { t } = useTranslation();
    const [hovered, setHovered] = useState(false);

    const glowColor = technologyIcons.find(
        t => t.nombre.toLowerCase() === proyecto.tecnologias[0]?.nombre.toLowerCase()
    )?.colors?.[0] ?? '#6b7280';

    // stagger: rows separated by 120ms, columns by 60ms
    const delay = Math.floor(index / 2) * 120 + (index % 2) * 60;

    return (
        // outer div: handles scroll reveal (opacity + translateY)
        <div
            className={`m-3 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* inner div: handles hover (lift + glow border) */}
            <div
                className="h-full bg-gray-200 dark:bg-[#09090c] flex flex-col align-center text-center border border-solid rounded-2xl transition-all duration-300"
                style={{
                    borderColor: hovered ? `${glowColor}99` : 'rgba(107,114,128,0.3)',
                    boxShadow: hovered ? `0 8px 32px ${glowColor}33, 0 0 0 1px ${glowColor}44` : 'none',
                    transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <h3 className='text-2xl py-4.5'>{t(proyecto.titulo)}</h3>
                <div className='m-6 flex flex-col gap-2.5'>

                    <div className='w-auto h-60 md:h-60 lg:h-86 xl:h-96'>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {proyecto.imagenes.map((img, i) => (
                                <SwiperSlide key={i}>
                                    <img src={img} alt={`slide-${i}`} className="swiper-slide" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="flex justify-center items-center gap-2 my-2 flex-wrap">
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

                    <p>{t(proyecto.descripcion)}</p>

                    <div className="w-full flex justify-center items-center">
                        <a
                            href={proyecto.github}
                            className="shimmer-btn w-full py-3 px-6 rounded-xl border border-gray-500/40 dark:text-white font-semibold text-center active:scale-95 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProyectoCard;
