import { useParticleCanvas } from './UseParticleCanvas';
import type { LogoItem } from './logos';

interface LogoCardProps {
    logo: LogoItem;
    size?: number;
}

export function LogoCard({ logo, size = 88 }: LogoCardProps) {
    const { canvasRef, onMouseEnter, onMouseLeave } = useParticleCanvas(logo.colors);

    return (
        <div
            className="relative flex-shrink-0 flex items-center justify-center cursor-pointer group"
            style={{ width: size, height: size }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {/* Canvas: siempre visible, ocupa todo el card */}
            <canvas
                ref={canvasRef}
                width={size}
                height={size}
                className="absolute inset-0 rounded-xl pointer-events-none"
            />

            {/* Borde sutil, se ilumina en hover */}
            {/* <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-white/25 transition-colors duration-500 pointer-events-none z-10 " /> */}
            <div className="absolute inset-0 rounded-xl border border-black/10 dark:border-white/10 group-hover:border-white/25 transition-colors duration-500 pointer-events-none z-10 " />

            {/* Logo SVG */}
            <div
                className="relative z-20 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg rounded-full bg-gray-300/10"
                style={{ width: size * 0.52, height: size * 0.52 }}
                dangerouslySetInnerHTML={{ __html: logo.svg }}
            />
        </div>
    );
}