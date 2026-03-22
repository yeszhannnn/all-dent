"use client";

import { TRUST_STATS } from "@/data/clinic";
import { AnimatedCounter } from "@/components/animated-counter";
import { AnimatedContent } from "@/components/ui/animated-content";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function TrustBar() {
  return (
    <section className="relative py-12 lg:py-16 bg-gradient-to-r from-clinic-charcoal via-steel-800 to-clinic-charcoal overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(91,141,184,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(91,141,184,0.1),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent animation="fade-up">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
            {TRUST_STATS.map((stat, i) => (
              <GlowingEffect key={i} color="rgba(91,141,184,0.25)" blur={30} spread={15}>
                <div className="text-center group p-4 rounded-xl">
                  <div className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white mb-1.5 tracking-tight">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      decimals={"decimals" in stat ? stat.decimals : 0}
                      duration={2000 + i * 200}
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-white/50 leading-tight group-hover:text-white/70 transition-colors">
                    {stat.label}
                  </p>
                </div>
              </GlowingEffect>
            ))}
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
