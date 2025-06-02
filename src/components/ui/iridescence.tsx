import React, { useEffect, useRef } from 'react';

interface IridescenceProps {
  className?: string;
  color?: [number, number, number];
  mouseReact?: boolean;
  amplitude?: number;
  speed?: number;
}

export const Iridescence: React.FC<IridescenceProps> = ({
  className = '',
  color = [1.0, 1.0, 1.0],
  mouseReact = true,
  amplitude = 0.1,
  speed = 1.0,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseReact) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dégradé linéaire vertical (haut vers bas)
      const linearGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      linearGradient.addColorStop(0, `rgba(${color[0] * 255}, ${color[1] * 255}, ${color[2] * 255}, 0.97)`);
      linearGradient.addColorStop(0.4, `rgba(${color[0] * 255}, ${color[1] * 255}, ${color[2] * 255}, 0.75)`);
      linearGradient.addColorStop(0.8, `rgba(${color[0] * 255}, ${color[1] * 255}, ${color[2] * 255}, 0.45)`);
      linearGradient.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = linearGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Reflets métalliques animés sur la largeur (plus larges et plus nombreux)
      const time = Date.now() * speed * 0.001;
      for (let i = 0; i < 10; i++) {
        const x = (canvas.width / 10) * i + Math.sin(time + i) * canvas.width * amplitude * 0.7;
        const y = canvas.height * (0.12 + 0.25 * Math.abs(Math.cos(time + i)));
        const grad = ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          canvas.width * 0.28
        );
        grad.addColorStop(0, 'rgba(255,255,255,0.32)');
        grad.addColorStop(0.5, 'rgba(255,255,255,0.16)');
        grad.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.globalAlpha = 0.95;
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1.0;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [color, mouseReact, amplitude, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}; 