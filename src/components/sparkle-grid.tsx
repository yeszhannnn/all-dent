"use client";

import { useEffect, useRef } from "react";

export function SparkleGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const particles: {
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
      phase: number;
    }[] = [];

    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: 1 + Math.random() * 2,
        opacity: 0.1 + Math.random() * 0.3,
        speed: 0.2 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const draw = () => {
      time += 0.01;
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        const currentOpacity =
          p.opacity * (0.5 + 0.5 * Math.sin(time * p.speed + p.phase));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(91, 141, 184, ${currentOpacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  );
}
