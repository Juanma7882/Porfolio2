function ContactMe() {
    return (
        <section id="contact" className="py-12 px-4 bg-white dark:bg-black text-black dark:text-white">
            <div className="max-w-5xl mx-auto ">
                <h2>Contact me</h2>
                {/* Redes Sociales */}
                <div className="flex flex-col gap-4 p-6 border border-cyan-300 dark:border-cyan-500 rounded-xl">
                    <h3 className="text-xl font-semibold">Redes Sociales</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <a
                            href="https://www.linkedin.com/in/juan-f-36ba26260/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center p-4 border border-gray-400 rounded-lg hover:bg-cyan-100 dark:hover:bg-cyan-900 transition"
                        >
                            <img src="/img/icons/icons8-linkedin-100.png" alt="LinkedIn" className="w-12 h-12" />
                        </a>
                        <a
                            href="https://github.com/Juanma7882"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center p-4 border border-gray-400 rounded-lg hover:bg-cyan-100 dark:hover:bg-cyan-900 transition"
                        >
                            <img src="/img/icons/icons8-github-100.png" alt="GitHub" className="w-12 h-12" />
                        </a>
                        <div className="flex items-center justify-center p-4 border border-gray-400 rounded-lg cursor-pointer hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">
                            <img
                                src="https://img.icons8.com/?size=100&id=37949&format=png&color=FFFFFF"
                                alt="Copiar email"
                                className="w-12 h-12"
                            />
                        </div>
                    </div>
                </div>

                {/* Descargar resumen */}
                <div className="flex flex-col gap-4 p-6 border border-cyan-300 dark:border-cyan-500 rounded-xl" id="contacto-resumen-pdf">
                    <h3 className="text-xl font-semibold">Resumen</h3>
                    <button
                        className="bg-cyan-300 dark:bg-cyan-500 text-black dark:text-white py-2 rounded-lg hover:bg-white hover:text-black dark:hover:bg-transparent dark:hover:border dark:border-white transition"
                    >
                        Descargar CV
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ContactMe;
