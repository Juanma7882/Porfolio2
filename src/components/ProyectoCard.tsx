
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';



type Tecnologia = {
    nombre: string;
    icono: string;
};

type Proyecto = {
    titulo: string;
    descripcion: string;
    imagenes: string[];
    tecnologias: Tecnologia[];
    github: string;
};

const ProyectoCard = ({ proyecto }: { proyecto: Proyecto }) => {
    console.log(proyecto.tecnologias.map((tec) => tec.nombre));
    return (
        <div className=" flex flex-col align-center text-center">
            <h3 className='text-lg font-bold'>{proyecto.titulo}</h3>
            <div>

                <div className='w-auto h-32'>

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
                        className="mySwiper w-full h-36"
                    >
                        {proyecto.imagenes.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={img} alt={`slide-${index}`} className="swiper-slide w-full h-36" />

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex justify-center items-center gap-2 my-2 ">
                    {proyecto.tecnologias.map((tec, index) => (
                        <div className="flex items-center border-2 border-amber-300 border-solid  h-5 w-auto whitespace-nowrap rounded-md" key={index}>
                            {tec.icono}
                            <p className="">{tec.nombre}</p>
                        </div>
                    ))}
                </div>
                <p>{proyecto.descripcion}</p>
                <div className="">
                    <a
                        href={proyecto.github}
                        className=""
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