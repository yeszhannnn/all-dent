"use client";
import { cn } from "@/lib/utils";

interface WebGLShaderProps {
  children: React.ReactNode;
  className?: string;
}

export function WebGLShader({ children, className }: WebGLShaderProps) {
  return (
    <div className={cn("relative overflow-hidden bg-clinic-charcoal", className)}>
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-clinic-blue/10 blur-[120px] -top-[200px] -left-[100px] animate-[webgl-float-1_15s_ease-in-out_infinite]" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-steel-600/8 blur-[100px] -bottom-[150px] -right-[50px] animate-[webgl-float-2_20s_ease-in-out_infinite]" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-clinic-blue/5 blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[webgl-float-3_12s_ease-in-out_infinite]" />
      </div>
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
      }} />
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(91,141,184,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(91,141,184,0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
