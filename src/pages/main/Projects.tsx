// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';


import '../../styles/index.css'; // Importación correcta del CSS global

// import "../../node_modules/swiper/swiper.css"
// import "../../node_modules/swiper/modules/navigation.css"
// import "../../node_modules/swiper/modules/pagination.css"

// import '../src/styles/index.css'
import { proyectos } from '../../data/proyectos';
import ProyectoCard from '../../components/ProyectoCard';




function Projects() {
    return (
        <>
            <section id="proyectos" className='bg-white dark:bg-black dark:text-white min-h-screen flex items-center justify-center flex-col px-4'>
                <h2 className='w-full mb-4 text-4xl sm:text-3xl md:text-4xl lg:text-5xl px-4 text-center'>Mis Proyectos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:mx-10 xl:mx-20">
                    {proyectos.map((proyecto, index) => (
                        <ProyectoCard proyecto={proyecto} key={index} />
                    ))}
                </div>
            </section>
        </>

    )
}

export default Projects