"use client";
import { cn } from "@/lib/utils";

interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function LiquidGlassCard({ children, className }: LiquidGlassCardProps) {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-2xl border border-white/25 bg-white/50 backdrop-blur-2xl transition-all duration-300 hover:bg-white/60 hover:border-white/35 hover:shadow-lg hover:shadow-clinic-blue/5",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-clinic-blue/[0.03] pointer-events-none" />
      <div className="relative">{children}</div>
    </div>
  );
}
