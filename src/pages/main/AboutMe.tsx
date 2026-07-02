import { useEffect, useRef, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import '../../styles/index.css';

const gradientText = {
  background: 'linear-gradient(to right, #2563eb, #9333ea)',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  backgroundClip: 'text' as const,
};

function AboutMe() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let timeout: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeout = setTimeout(() => setInView(true), 500);
        } else {
          clearTimeout(timeout);
        }
      },
      { threshold: 0.17 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  const base = 'transition-all duration-900 ease-out';

  return (
    <section
      ref={sectionRef}
      id='about'
      className="dark:text-white dark:bg-black min-h-screen flex items-star justify-center flex-col px-4 pt-11"
    >
      {/* Título */}
      <h2
        className={`w-full mb-4 text-4xl sm:text-3xl md:text-4xl lg:text-5xl px-4 text-center ${base} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}
        style={{ transitionDelay: '0ms' }}
      >
        <span style={gradientText}>{t("about.title")}</span>
      </h2>

      <div className='flex items-center justify-center px-4'>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">

          {/* Imagen */}
          <div
            className={`h-auto w-auto max-w-xs lg:max-w-md xl:max-w-lg flex items-center justify-center flex-col md:max-w-sm xl:h-130 ${base} ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <img
              className="h-auto w-auto object-contain rounded-xl shadow-lg md:h-auto lg:h-full transition-transform duration-300"
              src="/img/FernandezJuan optimization.webp"
              alt="Img Fernandez Juan"
              title="Fernandez Juan"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          {/* Texto */}
          <div className="max-w-xl text-center md:text-left text-base sm:text-lg md:text-xl lg:text-2xl">

            <p
              className={`mb-4 ${base} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <Trans
                i18nKey="about.intro"
                components={[
                  <span key="name" style={gradientText} />,
                  <span key="role" style={{ color: '#61dafb' }} />,
                ]}
              />
            </p>

            <p
              className={`mb-4 ${base} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '450ms' }}
            >
              <Trans
                i18nKey="about.skillsIntro"
                components={[
                  <span key="python" style={{ color: '#FFD43B' }} />,
                  <span key="csharp" style={{ color: '#a179dc' }} />,
                  <span key="js" style={{ color: '#F7DF1E' }} />,
                ]}
              />
            </p>

            <p
              className={`${base} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '600ms' }}
            >
              <Trans
                i18nKey="about.experience"
                components={[
                  <span key="graduated" style={{ color: '#4ade80' }} />,
                  <span key="english" style={{ color: '#4ade80' }} />,
                ]}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
