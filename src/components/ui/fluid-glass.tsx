"use client";
import { cn } from "@/lib/utils";

interface FluidGlassProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function FluidGlass({ children, className, style }: FluidGlassProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/20 bg-white/40 backdrop-blur-2xl",
        className
      )}
      style={style}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-clinic-blue/5 animate-gradient pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(91,141,184,0.06),transparent_50%)] pointer-events-none" />
      <div className="relative">{children}</div>
    </div>
  );
}
