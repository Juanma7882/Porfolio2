import '../../styles/index.css'; // Importación correcta del CSS global
import { proyectos } from '../../data/proyectos';
import ProyectoCard from '../../components/ProyectoCard';
import { LogoCarousel } from '../components/logo-carrusel/LogoCarrusel';
function Projects() {
    return (
        <>
            <div className='flex flex-col gap-5  bg-white dark:text-white dark:bg-black py-18'>
                <LogoCarousel duration={45} gap={20} cardSize={120} left={true}></LogoCarousel>
                <LogoCarousel duration={45} gap={20} cardSize={120} ></LogoCarousel>
            </div>
            <section id="projects" className='bg-white dark:bg-black dark:text-white min-h-screen flex items-center justify-center flex-col px-4 gap-10 scroll-mt-20 pt-11'>
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