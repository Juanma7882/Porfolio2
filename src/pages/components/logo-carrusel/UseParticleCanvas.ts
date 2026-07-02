import { useRef, useCallback, useEffect, useState } from 'react';

function useDarkMode() {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        const system = window.matchMedia('(prefers-color-scheme: dark)').matches;
        localStorage.setItem('theme', system ? 'dark' : 'light');
        return system;
    });

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains('dark'));
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        const onChange = (e: MediaQueryListEvent) => {
            if (!document.documentElement.classList.contains('dark') &&
                !document.documentElement.classList.contains('light')) {
                setIsDark(e.matches);
            }
        };
        mq.addEventListener('change', onChange);
        return () => { observer.disconnect(); mq.removeEventListener('change', onChange); };
    }, []);

    return isDark;
}

interface Particle {
    x: number; y: number;
    size: number;
    baseAlpha: number; alpha: number;
    color: string;
    phase: number;
}

const IDLE_COLOR = '#334155';
const COLS = 27;
const ROWS = 27;

export function useParticleCanvas(colors: string[]) {
    const canvasRef       = useRef<HTMLCanvasElement>(null);
    const rafRef          = useRef<number>(0);
    const particlesRef    = useRef<Particle[]>([]);
    const isHoveredRef    = useRef(false);
    const hoverProgressRef = useRef(0);
    const isDarkMode      = useDarkMode();
    const isDarkModeRef   = useRef(isDarkMode);

    useEffect(() => { isDarkModeRef.current = isDarkMode; }, [isDarkMode]);

    const init = useCallback((width: number, height: number) => {
        const cellW = width / COLS;
        const cellH = height / ROWS;
        particlesRef.current = [];
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                particlesRef.current.push({
                    x: cellW * col + cellW / 2,
                    y: cellH * row + cellH / 2,
                    size: 0.5 + Math.random() * 0.2,
                    baseAlpha: 0.18 + Math.random() * 0.2,
                    alpha: 0,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    phase: Math.random() * Math.PI * 2,
                });
            }
        }
    }, [colors]);

    // Dibuja el estado idle de forma estática (sin loop)
    const drawIdle = useCallback((canvas: HTMLCanvasElement) => {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.fillStyle = isDarkModeRef.current ? '#0f1117' : '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (const p of particlesRef.current) {
            ctx.globalAlpha = p.baseAlpha * 0.7;
            ctx.fillStyle = IDLE_COLOR;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;
    }, []);

    // Arranca el rAF loop solo cuando es necesario (hover activo o fade-out en curso)
    const startLoop = useCallback(() => {
        if (rafRef.current) return;
        const canvas = canvasRef.current;
        if (!canvas) return;

        const loop = (t: number) => {
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            ctx.fillStyle = isDarkModeRef.current ? '#0f1117' : '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            if (isHoveredRef.current) {
                hoverProgressRef.current = Math.min(1, hoverProgressRef.current + 0.05);
            } else {
                hoverProgressRef.current = Math.max(0, hoverProgressRef.current - 0.04);
            }

            const hp = hoverProgressRef.current;

            for (const p of particlesRef.current) {
                const pulse = 0.5 + 0.5 * Math.sin(t * 0.0008 + p.phase);
                const idleAlpha  = p.baseAlpha * pulse;
                const hoverAlpha = 0.5 + 0.5 * pulse;
                p.alpha = idleAlpha + (hoverAlpha - idleAlpha) * hp;
                const currentSize = p.size + p.size * 0.6 * hp;

                ctx.globalAlpha = p.alpha;

                if (hp < 0.01) {
                    ctx.fillStyle = IDLE_COLOR;
                } else if (hp > 0.99) {
                    ctx.fillStyle = p.color;
                } else {
                    ctx.fillStyle = IDLE_COLOR;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.globalAlpha = p.alpha * hp;
                    ctx.fillStyle = p.color;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.globalAlpha = 1;

            if (hp > 0 || isHoveredRef.current) {
                rafRef.current = requestAnimationFrame(loop);
            } else {
                // Animación completada: volver al dibujo estático y detener el loop
                rafRef.current = 0;
                drawIdle(canvas);
            }
        };

        rafRef.current = requestAnimationFrame(loop);
    }, [drawIdle]);

    // Init + dibujo estático inicial. Sin loop.
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        init(canvas.width, canvas.height);
        drawIdle(canvas);
        return () => { cancelAnimationFrame(rafRef.current); rafRef.current = 0; };
    }, [init, drawIdle]);

    // Redibujar idle cuando cambia el modo oscuro (solo si no hay loop activo)
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || rafRef.current) return;
        drawIdle(canvas);
    }, [isDarkMode, drawIdle]);

    const onMouseEnter = useCallback(() => {
        isHoveredRef.current = true;
        startLoop();
    }, [startLoop]);

    const onMouseLeave = useCallback(() => {
        isHoveredRef.current = false;
        // El loop se detiene solo cuando hoverProgress llega a 0
    }, []);

    return { canvasRef, onMouseEnter, onMouseLeave };
}
