

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Proyecto } from '../types';
import "../../node_modules/swiper/swiper.css"
import "../../node_modules/swiper/modules/navigation.css"
import "../../node_modules/swiper/modules/pagination.css"
import { useTranslation } from 'react-i18next';


const ProyectoCard = ({ proyecto }: { proyecto: Proyecto }) => {
    const { t } = useTranslation();



    // console.log(t.map("projects" => key));
    return (
        <div className=" flex flex-col align-center text-center border-1  border-gray-500 dark:border-white border-solid m-3  rounded-2xl">
            <h3 className='text-2xl py-4.5'>{t(proyecto.titulo)}</h3>
            <div className='m-6 flex flex-col gap-2.5 '>

                <div className='w-auto  h-60 md:h-60 lg:h-86 xl:h-96'>

                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {proyecto.imagenes.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={img} alt={`slide-${index}`} className="swiper-slide " title={t(`projects.${proyecto.titulo}.images.${index}`)} />

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex justify-center items-center gap-2 my-2 flex-wrap">
                    {proyecto.tecnologias.map((tec, index) => (
                        <div className="flex items-center border-1 border-gray-300 dark:border-white border-solid  h-8 w-auto whitespace-nowrap  rounded-xl px-2 py-2" key={index}>
                            {tec.icono}
                            <p className="">{tec.nombre}</p>
                        </div>
                    ))}
                </div>
                <p>{t(proyecto.descripcion)}</p>
                <div className="  w-full  flex justify-center items-center ">
                    <a
                        href={proyecto.github}
                        className=" border-1  border-gray-500 hover:border-gray-600 hover:scale-102 dark:border-white dark:hover:border-gray-600 border-solid  rounded-xl my-2 px-6 p-2 "
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </div>
            </div>

        </div>
    );
};

export default ProyectoCard;