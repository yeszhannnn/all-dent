"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureSpotlightProps {
  features: Feature[];
  className?: string;
}

export function FeatureSpotlight({ features, className }: FeatureSpotlightProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", className)}>
      {features.map((feature, i) => (
        <div
          key={i}
          onMouseEnter={() => setActiveIndex(i)}
          onMouseLeave={() => setActiveIndex(null)}
          className={cn(
            "relative p-6 lg:p-8 rounded-2xl border transition-all duration-500 cursor-default",
            activeIndex === i
              ? "bg-white border-clinic-blue/20 premium-shadow-hover scale-[1.02]"
              : activeIndex !== null
              ? "bg-white/40 border-white/20 opacity-60 scale-[0.98]"
              : "bg-white/60 border-white/30 hover:bg-white hover:border-clinic-blue/10"
          )}
        >
          {activeIndex === i && (
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-clinic-blue/10 via-transparent to-steel-200/10 pointer-events-none" />
          )}
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-clinic-blue/10 to-steel-50 flex items-center justify-center mb-4 transition-transform duration-300" style={{ transform: activeIndex === i ? "scale(1.1)" : "scale(1)" }}>
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-clinic-charcoal mb-2">{feature.title}</h3>
            <p className="text-sm text-steel-500 leading-relaxed">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
