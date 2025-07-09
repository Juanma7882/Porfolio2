// import { useEffect, useState } from 'react'
import './index.css'

function Home() {


  return (
    <>
      <section className='absolute inset-0 matrix-bg'>
        <div className="min-h-screen flex flex-col items-center justify-center relative matrix-bg pt-20 lg:pt-0 dark:bg-black ">
          <div className="bg-green-100 flex items-center justify-center p-2 py-2 px-4 rounded-xl justify-evenly dark:border-2 dark:bg-green-900/30   ">
            <span className="inline-block mr-2 h-2 w-2 rounded-full bg-emerald-500 relative ripple dark:bg-emerald-400"></span>
            <span className="text-green-600 dark:text-green-400">Open to Work</span>
          </div>
          <div className="text-center">
            {/* title */}
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight flex flex-col items-center justify-center '>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 glitch block '>
                Fernandez juan
                {/* <span className="typewriter-text">{typedText}</span> */}
              </span>
              <span>

                <span className='text-red-500'>
                  {'Software '.split('').map((char, idx) => (
                    <span className='letter' style={{ animationDelay: `${0.05 * idx}s` }} key={`soft-${idx}`}>
                      {char}
                    </span>
                  ))}
                </span>
                <span className='text-black text-gray-800 dark:text-gray-100'>
                  {'Developer'.split('').map((char, idx) => (
                    <span className='letter' style={{ animationDelay: `${0.05 * (idx + 9)}s` }} key={`dev-${idx}`}>
                      {char}
                    </span>
                  ))}
                </span>
              </span>

            </h1>
            {/* title end */}
            {/* párrafo */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-8    max-w-3xl mx-auto leading-relaxed px-2 dark:text-gray-200">
              En búsqueda de nuevas <span className="text-blue-500 font-semibold">oportunidades profesionales</span> con proyectos <span className="text-green-400 font-semibold">desafiantes</span> que impulsen mi <span className="text-purple-500 font-semibold">crecimiento profesional</span>. Me interesa formar parte de <span className="text-orange-500 font-semibold">equipos de trabajo</span> donde pueda <span className="text-pink-500 font-semibold">aplicar</span> y <span className="text-pink-500 font-semibold">perfeccionar</span> mis habilidades como desarrollador.
            </p>
            {/*End párrafo */}

          </div>

        </div>
      </section>
    </>
  )
}

export default Home