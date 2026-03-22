"use client";
import { cn } from "@/lib/utils";

interface GlowingEffectProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  blur?: number;
  spread?: number;
}

export function GlowingEffect({ children, className, color = "rgba(91,141,184,0.15)", blur = 40, spread = 20 }: GlowingEffectProps) {
  return (
    <div className={cn("relative group", className)}>
      <div
        className="absolute -inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          filter: `blur(${blur}px)`,
          margin: `-${spread}px`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
