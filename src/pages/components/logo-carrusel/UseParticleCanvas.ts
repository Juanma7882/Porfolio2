import { useRef, useCallback, useEffect, useState } from 'react';


function useDarkMode() {
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem("theme");

        // Si ya existe en localStorage
        if (savedTheme) {
            return savedTheme === "dark";
        }

        // Si no existe, usar el tema del sistema
        const systemDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        // Guardarlo automáticamente
        localStorage.setItem(
            "theme",
            systemDark ? "dark" : "light"
        );

        return systemDark;
    });

    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    const isDarkNow = document.documentElement.classList.contains('dark');
                    setIsDark(isDarkNow);
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });

        // También escuchar cambios en prefers-color-scheme
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            // Solo si no hay clase dark explícita
            if (!document.documentElement.classList.contains('dark') &&
                !document.documentElement.classList.contains('light')) {
                setIsDark(e.matches);
            }
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            observer.disconnect();
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return isDark;
}


interface Particle {
    x: number;
    y: number;
    size: number;
    baseAlpha: number;
    alpha: number;
    color: string;
    phase: number;
}

const IDLE_COLOR = '#334155';
const COLS = 27;
const ROWS = 27;

export function useParticleCanvas(colors: string[]) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rafRef = useRef<number>(0);
    const particlesRef = useRef<Particle[]>([]);
    const isHoveredRef = useRef(false);
    const hoverProgressRef = useRef(0);
    const isDarkMode = useDarkMode();
    const isDarkModeRef = useRef(isDarkMode);

    const init = useCallback(
        (width: number, height: number) => {
            const cellW = width / COLS;
            const cellH = height / ROWS;

            particlesRef.current = [];

            for (let row = 0; row < ROWS; row++) {
                for (let col = 0; col < COLS; col++) {
                    particlesRef.current.push({
                        // centro de cada celda → grilla perfecta
                        x: cellW * col + cellW / 2,
                        y: cellH * row + cellH / 2,
                        size: 0.5 + Math.random() * 0.2,
                        baseAlpha: 0.18 + Math.random() * 0.2,
                        alpha: 0,
                        color: colors[Math.floor(Math.random() * colors.length)],
                        phase: Math.random() * Math.PI * 2, // pulso desfasado por punto
                    });
                }
            }
        },
        [colors]
    );

    useEffect(() => {
        isDarkModeRef.current = isDarkMode;
        console.log(isDarkMode)
    }, [isDarkMode]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        init(canvas.width, canvas.height);

        const loop = (t: number) => {
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // const bgColor = isDarkMode ? '#0f1117' : '#ffffff';
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

                const idleAlpha = p.baseAlpha * pulse;
                const hoverAlpha = 0.5 + 0.5 * pulse;
                p.alpha = idleAlpha + (hoverAlpha - idleAlpha) * hp;

                const idleSize = p.size;
                const hoverSize = p.size * 1.6;
                const currentSize = idleSize + (hoverSize - idleSize) * hp;

                ctx.globalAlpha = p.alpha;

                // interpolación de color: gris → color del logo
                if (hp < 0.01) {
                    ctx.fillStyle = IDLE_COLOR;
                } else if (hp > 0.99) {
                    ctx.fillStyle = p.color;
                } else {
                    // dos capas superpuestas para simular lerp de color
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
            rafRef.current = requestAnimationFrame(loop);
        };

        rafRef.current = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(rafRef.current);
    }, [init]);

    const onMouseEnter = useCallback(() => {
        isHoveredRef.current = true;
    }, []);

    const onMouseLeave = useCallback(() => {
        isHoveredRef.current = false;
    }, []);

    return { canvasRef, onMouseEnter, onMouseLeave };
}