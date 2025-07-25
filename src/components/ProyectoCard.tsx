
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Proyecto } from '../types';

const ProyectoCard = ({ proyecto }: { proyecto: Proyecto }) => {
    console.log(proyecto.tecnologias.map((tec) => tec.nombre));
    return (
        <div className=" flex flex-col align-center text-center border-1 border-white border-solid m-3">
            <h3 className='text-lg font-bold py-4.5'>{proyecto.titulo}</h3>
            <div className='m-6 flex flex-col gap-2.5 '>

                <div className='w-auto h-96  '>

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
                                <img src={img} alt={`slide-${index}`} className="swiper-slide " />

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex justify-center items-center gap-2 my-2 ">
                    {proyecto.tecnologias.map((tec, index) => (
                        <div className="flex items-center border-1 border-white border-solid  h-8 w-auto whitespace-nowrap  rounded-xl px-2 py-2" key={index}>
                            {tec.icono}
                            <p className="">{tec.nombre}</p>
                        </div>
                    ))}
                </div>
                <p>{proyecto.descripcion}</p>
                <div className="  w-full  flex justify-center items-center ">
                    <a
                        href={proyecto.github}
                        className=" border-1 border-white border-solid  rounded-xl my-2 px-6 p-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ir a GitHub
                    </a>
                </div>
            </div>

        </div>
    );
};

export default ProyectoCard;