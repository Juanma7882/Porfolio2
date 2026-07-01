import { useEffect, useRef } from "react";

const SPRITE_SIZE = 32;
const SPEED = 4;

// Cada entrada es [col, row] en la sprite sheet (multiplicado por 32px)
const spriteSets: Record<string, [number, number][]> = {
  idle: [[-3, -3]],
  N:   [[-1, -2], [-1, -3]],
  NE:  [[ 0, -2], [ 0, -3]],
  E:   [[-3,  0], [-3, -1]],
  SE:  [[-5, -1], [-5, -2]],
  S:   [[-6, -3], [-7, -2]],
  SW:  [[-5, -3], [-6, -1]],
  W:   [[-4, -2], [-4, -3]],
  NW:  [[-1,  0], [-1, -1]],
};

function getDirection(dx: number, dy: number): string {
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
  if (angle > -22.5  && angle <=  22.5)  return "E";
  if (angle >  22.5  && angle <=  67.5)  return "SE";
  if (angle >  67.5  && angle <= 112.5)  return "S";
  if (angle > 112.5  && angle <= 157.5)  return "SW";
  if (angle >  157.5 || angle <= -157.5) return "W";
  if (angle > -157.5 && angle <= -112.5) return "NW";
  if (angle > -112.5 && angle <=  -67.5) return "N";
  return "NE";
}

export function Oneko() {
  const divRef    = useRef<HTMLDivElement>(null);
  const pos       = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const mouse     = useRef({ x: pos.current.x, y: pos.current.y });
  const frame     = useRef(0);
  const tick      = useRef(0);
  // null = en rango (idle); número = timestamp desde el que se puede mover
  const waitUntil = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    let raf: number;
    const loop = () => {
      const dx   = mouse.current.x - pos.current.x;
      const dy   = mouse.current.y - pos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let key = "idle";

      if (dist <= 48) {
        // Dentro del rango: quedarse quieto y resetear el timer
        waitUntil.current = null;
      } else if (waitUntil.current === null) {
        // Acaba de salir del rango: arrancar el contador de 1 segundo
        waitUntil.current = performance.now() + 1000;
      } else if (performance.now() >= waitUntil.current) {
        // Pasó 1 segundo: moverse
        const step = Math.min(SPEED, dist);
        pos.current.x += (dx / dist) * step;
        pos.current.y += (dy / dist) * step;
        key = getDirection(dx, dy);
      }

      // Cambia de fotograma cada 8 ticks (~8fps a 60fps)
      tick.current++;
      if (tick.current % 8 === 0) {
        frame.current = (frame.current + 1) % spriteSets[key].length;
      }

      const [sx, sy] = spriteSets[key][frame.current % spriteSets[key].length];

      if (divRef.current) {
        divRef.current.style.left             = `${pos.current.x}px`;
        divRef.current.style.top              = `${pos.current.y}px`;
        divRef.current.style.backgroundPosition = `${sx * SPRITE_SIZE}px ${sy * SPRITE_SIZE}px`;
      }

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={divRef}
      style={{
        position:        "fixed",
        pointerEvents:   "none",
        zIndex:          9999,
        width:           SPRITE_SIZE,
        height:          SPRITE_SIZE,
        transform:       "translate(-50%, -50%)",
        backgroundImage: "url('/oneko.gif')",
        backgroundRepeat:"no-repeat",
        imageRendering:  "pixelated",
      }}
    />
  );
}
