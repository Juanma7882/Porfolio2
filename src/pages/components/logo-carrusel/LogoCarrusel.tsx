import { useEffect, useRef, useState } from 'react';
import { LOGOS } from './logos';
import { LogoCard } from './LogoCard';
import './logoCarrusel.css';

interface LogoCarouselProps {
    duration?: number;
    gap?: number;
    cardSize?: number;
    pauseOnHover?: boolean;
    left?: boolean;
}

export function LogoCarousel({
    duration = 20,
    gap = 48,
    cardSize = 120,
    pauseOnHover = true,
    left = false,
}: LogoCarouselProps) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const el = wrapRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => setPaused(!entry.isIntersecting),
            { threshold: 0 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const allLogos = [...LOGOS, ...LOGOS];
    const trackClass = [
        'logo-carousel-track',
        left ? '' : 'logo-carousel-track-right',
        pauseOnHover ? 'pause-on-hover' : '',
        paused ? 'paused' : '',
    ].filter(Boolean).join(' ');

    const trackStyle = { gap: `${gap}px`, '--duration': `${duration}s` } as React.CSSProperties;

    return (
        <div ref={wrapRef} className="logo-carousel-wrap bg-white dark:bg-black">
            <div className={trackClass} style={trackStyle}>
                {allLogos.map((logo, i) => (
                    <LogoCard key={`${logo.name}-${i}`} logo={logo} size={cardSize} />
                ))}
            </div>
        </div>
    );
}
