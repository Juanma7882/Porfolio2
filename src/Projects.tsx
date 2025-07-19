// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';


import { proyectos } from './data/proyectos';
import ProyectoCard from './components/ProyectoCard';

import "../node_modules/swiper/swiper.css"
import "../node_modules/swiper/modules/navigation.css"
import "../node_modules/swiper/modules/pagination.css"

import '../src/styles/index.css'




function Projects() {
    return (
        <>
            <section id="proyectos" className='bg-white dark:bg-black dark:text-white min-h-screen flex items-center justify-center flex-col px-4'>
                <h2>Mis Proyectos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {proyectos.map((proyecto, index) => (
                        <ProyectoCard proyecto={proyecto} key={index} />
                    ))}
                </div>
            </section>
        </>

    )
}

export default Projects