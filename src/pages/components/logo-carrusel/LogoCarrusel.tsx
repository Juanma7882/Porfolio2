import { LOGOS } from './logos';
import { LogoCard } from './LogoCard';
import './logoCarrusel.css';

interface LogoCarouselProps {
    /**
     * Velocidad de la animación en segundos. Default: 20.
     */
    duration?: number;
    /**
     * Gap entre logos en px. Default: 48.
     */
    gap?: number;
    /**
     * Tamaño de cada card en px. Default: 80.
     */
    cardSize?: number;
    /**
     * Pausa la animación al hacer hover sobre el carrusel. Default: true.
     */
    pauseOnHover?: boolean;
    left?: boolean;
}

/**
 * Carrusel infinito de logos con efecto de partículas canvas en hover.
 *
 * Uso:
 *   <LogoCarousel />
 *   <LogoCarousel duration={15} gap={64} cardSize={96} />
 */
export function LogoCarousel({
    duration = 20,
    gap = 48,
    cardSize = 120,
    pauseOnHover = true,
    left = false,
}: LogoCarouselProps) {
    // Duplicamos para el loop infinito sin saltos
    const allLogos = [...LOGOS, ...LOGOS];

    return (
        <div className="logo-carousel-wrap bg-white dark:bg-black">
            {left ? (
                <div
                    className={`logo-carousel-track  ${pauseOnHover ? 'pause-on-hover' : ''}`}
                    style={
                        {
                            gap: `${gap}px`,
                            '--duration': `${duration}s`,
                        } as React.CSSProperties
                    }
                >
                    {allLogos.map((logo, i) => (
                        <LogoCard key={`${logo.name}-${i}`} logo={logo} size={cardSize} />
                    ))}
                </div>
            ) :
                <div
                    className={`logo-carousel-track logo-carousel-track-right  ${pauseOnHover ? 'pause-on-hover' : ''}`}
                    style={
                        {
                            gap: `${gap}px`,
                            '--duration': `${duration}s`,
                        } as React.CSSProperties
                    }
                >
                    {allLogos.map((logo, i) => (
                        <LogoCard key={`${logo.name}-${i}`} logo={logo} size={cardSize} />
                    ))}
                </div>
            }
        </div>
    );
}