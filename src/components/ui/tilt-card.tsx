"use client";

import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glareColor?: string;
  tiltAmount?: number;
  perspective?: number;
  scale?: number;
}

export function TiltCard({
  children,
  className,
  glareColor = "rgba(255,255,255,0.12)",
  tiltAmount = 12,
  perspective = 1000,
  scale = 1.03,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`
  );
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * tiltAmount * 2;
    const rotateX = (0.5 - y) * tiltAmount * 2;
    setTransform(
      `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
    );
    setGlare({ x: x * 100, y: y * 100, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setTransform(
      `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`
    );
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative rounded-[inherit]", className)}
      style={{
        transform,
        transition: "transform 0.15s ease-out",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, ${glareColor}, transparent 55%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: glare.opacity * 0.45,
          boxShadow:
            "inset 0 0 24px rgba(255,255,255,0.06), 0 0 28px rgba(91,141,184,0.06)",
        }}
      />
    </div>
  );
}
