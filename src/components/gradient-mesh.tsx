"use client";

import { cn } from "@/lib/utils";

interface GradientMeshProps {
  className?: string;
  variant?: "hero" | "section" | "cta";
}

export function GradientMesh({ className, variant = "hero" }: GradientMeshProps) {
  if (variant === "hero") {
    return (
      <div className={cn("absolute inset-0 overflow-hidden", className)}>
        <div className="absolute -top-[40%] -right-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-bl from-clinic-blue/[0.07] via-steel-200/[0.05] to-transparent blur-3xl animate-gradient" />
        <div className="absolute -bottom-[30%] -left-[15%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-steel-100/[0.08] via-clinic-blue/[0.03] to-transparent blur-3xl animate-gradient" style={{ animationDelay: "4s" }} />
        <div className="absolute top-[20%] left-[30%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-clinic-pearl/[0.1] to-transparent blur-2xl animate-glow" />

        {/* Subtle noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
    );
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-bl from-clinic-blue/[0.04] to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-steel-100/[0.06] to-transparent rounded-full blur-3xl" />
    </div>
  );
}
