import { useTranslation } from 'react-i18next';
import '../src/styles/index.css'

function AboutMe() {
    // const { t } = useTranslation();
    const { t } = useTranslation();
    return (

        <section className="dark:text-white dark:bg-black min-h-screen flex items-star justify-center flex-col px-4">
            <h2 className="w-full mb-4 text-4xl sm:text-4xl md:text-5xl lg:text-6xl px-4 text-center">{t("about.title")}</h2>

            <div className='flex items-center justify-center px-4 '>

                <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">

                    {/* Imagen */}
                    <div className="h-auto w-auto max-w-xs  lg:max-w-md xl:max-w-lg flex items-center justify-center flex-col md:max-w-sm xl:h-130">
                        <img
                            className="h-auto w-auto object-contain rounded-xl shadow-lg md:h-auto lg:h-full"
                            src="/JuanFernandez.png"
                            alt="Fernandez Juan"
                            title="Fernandez Juan"
                        />
                    </div>

                    {/* Texto */}
                    <div className="max-w-xl text-center md:text-left text-base sm:text-lg md:text-xl lg:text-2xl ">
                        <p className="mb-4 ">
                            {t("about.intro")}
                        </p>

                        <p className='mb-4 '>
                            {t("about.skillsIntro")}
                        </p>

                        <p>
                            {t("about.experience")}
                        </p>
                    </div>
                </div>
            </div>
        </section>


    );
} export default AboutMe