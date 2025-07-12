import '../src/styles/index.css'

function AboutMe() {
    return (

        <section className="dark:text-white dark:bg-black min-h-screen ">
            <h2 className=" mb-4 text-2xl sm:text-4xl md:text-5xl lg:text-7xl">About Me</h2>
            <div className='flex items-center justify-center px-4 '>

                <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">

                    {/* Imagen */}
                    <div className="w-auto h-auto relative">
                        <img
                            className="w-full h-full object-cover rounded-xl shadow-lg"
                            src="/JuanFernandez.png"
                            alt="Fernandez Juan"
                            title="Fernandez Juan"
                        />
                    </div>

                    {/* Texto */}
                    <div className="max-w-xl text-center md:text-left text-base sm:text-lg md:text-xl lg:text-2xl ">
                        <p className="mb-4 ">
                            Soy Juan Fernández, tengo 22 años y soy un desarrollador full stack de Buenos Aires, Argentina.
                            Actualmente estoy cursando el último año de la Tecnicatura en Programación en la Universidad Tecnológica Nacional.
                        </p>
                        <p className="mb-4">
                            Estoy en busca de nuevas oportunidades que me permitan seguir creciendo profesionalmente.
                            Mis lenguajes favoritos son <span className="text-red-500 font-semibold">Python</span>, <span className="text-blue-500 font-semibold">C#</span> y <span className="text-yellow-500 font-semibold">JavaScript</span>.
                        </p>
                        <p>
                            Actualmente tengo un nivel B2 en inglés y estoy en constante mejora. Trabajo como desarrollador independiente, relevando requerimientos y diseñando soluciones con sistemas que sean intuitivos y fáciles de usar para el usuario.
                        </p>
                    </div>

                </div>
            </div>

        </section>


    );
} export default AboutMe