import { useTranslation, Trans } from 'react-i18next';
// import '../src/styles\index.css';
import '../../styles/index.css'; // Importación correcta del CSS global



function Home() {
  const { t } = useTranslation();

  return (
    <section id='home' className='relative '>
      <div className=' inset-0 -z-10 matrix-bg  dark:bg-black '>
        <div className="min-h-screen flex flex-col items-center justify-center ">
          {/* open to work */}
          <div className="bg-green-100 flex items-center justify-center p-2 py-2 px-4 rounded-xl dark:border-2 dark:bg-green-900/30">
            <span className="inline-block mr-2 h-2 w-2 rounded-full bg-emerald-500 relative ripple dark:bg-emerald-400"></span>
            <span className="text-green-600 dark:text-green-400">{t("home.status")}</span>
          </div>
          {/* End open to work */}

          <div className="text-center">
            {/* title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-3 leading-tight flex flex-col items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 glitch block">
                {t("home.title")}
              </span>
              <span>
                <span className="text-red-500">
                  {t("home.role.prefix")
                    .split("")
                    .map((char, idx) => (
                      <span className="letter" style={{ animationDelay: `${0.05 * idx}s` }} key={`soft-${idx}`}>
                        {char}
                      </span>
                    ))}
                </span>
                <span className=" text-gray-800 dark:text-gray-100">
                  {t("home.role.suffix")
                    .split("")
                    .map((char, idx) => (
                      <span className="letter" style={{ animationDelay: `${0.05 * (idx + 9)}s` }} key={`dev-${idx}`}>
                        {char}
                      </span>
                    ))}
                </span>
              </span>
            </h1>
            {/* title end */}

            {/* párrafo */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-3 max-w-3xl mx-auto leading-relaxed px-2 dark:text-gray-200">
              <Trans i18nKey="home.paragraph" components={[
                <span className="text-blue-500 font-semibold" />,
                <span className="text-green-400 font-semibold" />,
                <span className="text-purple-500 font-semibold" />,
                <span className="text-orange-400 font-semibold" />,
                <span className="text-pink-500 font-semibold" />,
                <span className="text-rose-500 font-semibold" />
              ]} />
            </p>
            {/*End párrafo */}


            <div className="flex flex-col items-center justify-center gap-1 mt-5 z-10">
              {/* Botones de redes */}
              <div className="flex items-center justify-center gap-6">
                {/* LinkedIn */}
                <div className='bg-white dark:bg-slate-950 rounded-full p-1.5 hover:scale-110 transition-transform shadow-md '>

                  <a href="https://www.linkedin.com/in/juan-f-36ba26260" title='LinkedIn' target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                      <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
                      <path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36z"></path>
                    </svg>
                  </a>
                </div>

                {/* GitHub */}
                <div className='bg-white dark:bg-slate-950 rounded-full p-1.5 hover:scale-110 transition-transform shadow-md '>

                  <a href="https://github.com/Juanma7882" target="_blank" title='GitHub' rel="noopener noreferrer" className="hover:scale-110 transition-transform cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" className='dark:fill-white'>
                      <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                    </svg>
                  </a>
                </div>

                {/* Email */}
                <div className='bg-white dark:bg-slate-950 rounded-full p-1.5 hover:scale-110 transition-transform shadow-md '>

                  <a href="mailto:juanmaf236@gmail.com" title='mail' className="hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                      <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Botón de CV */}

              <a
                href="/cv-juan-fernandez.pdf" // reemplazalo con la ruta correcta del archivo en tu proyecto
                download
                className="mt-5 py-2 px-6 rounded-lg flex items-center gap-2 text-sm font-semibold
             bg-white text-black border border-gray-300 hover:border-gray-500 hover:bg-gray-100 transition-colors
             dark:bg-transparent dark:text-green-400 dark:border-green-400 dark:hover:bg-green-600/20 dark:hover:border-green-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                  <path d="M7 11l5 5l5 -5" />
                  <path d="M12 4l0 12" />
                </svg>
                {t("home.download")}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section >
  );
}

export default Home;
