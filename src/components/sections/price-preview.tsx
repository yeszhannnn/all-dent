"use client";

import Link from "next/link";
import { PRICE_PREVIEW } from "@/data/clinic";
import { Badge } from "@/components/ui/badge";
import { AnimatedContent } from "@/components/ui/animated-content";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { GlareHover } from "@/components/ui/glare-hover";
import { LiquidGlassCard } from "@/components/ui/liquid-glass-card";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function PricePreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent animation="fade-up">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-clinic-charcoal mb-4">
              Прозрачные цены
            </h2>
            <p className="text-steel-500 text-lg max-w-2xl mx-auto">
              Без скрытых доплат — вы знаете стоимость до начала лечения
            </p>
          </div>
        </AnimatedContent>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {PRICE_PREVIEW.map((item, i) => {
            const isPremium = "premium" in item && item.premium;
            const isHighlight = "highlight" in item && item.highlight;

            return (
              <AnimatedContent key={i} delay={i * 60} animation="fade-up">
                <GlareHover className="rounded-2xl h-full">
                  {isPremium ? (
                    <div className="p-5 lg:p-6 rounded-2xl bg-gradient-to-br from-clinic-charcoal to-steel-800 text-white h-full">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <Badge variant="secondary" className="mb-2.5 text-[10px]">
                            {item.category}
                          </Badge>
                          <h3 className="font-medium text-sm lg:text-base mb-1 leading-snug text-white">
                            {item.name}
                          </h3>
                        </div>
                        <span className="text-lg lg:text-xl font-bold whitespace-nowrap text-clinic-blue-light">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <LiquidGlassCard className={cn("p-5 lg:p-6 h-full", isHighlight && "ring-2 ring-clinic-blue/20")}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <Badge variant="premium" className="mb-2.5 text-[10px]">
                            {item.category}
                          </Badge>
                          <h3 className="font-medium text-sm lg:text-base mb-1 leading-snug text-clinic-charcoal">
                            {item.name}
                          </h3>
                        </div>
                        <span className="text-lg lg:text-xl font-bold whitespace-nowrap text-clinic-blue">
                          {item.price}
                        </span>
                      </div>
                    </LiquidGlassCard>
                  )}
                </GlareHover>
              </AnimatedContent>
            );
          })}
        </div>

        <AnimatedContent delay={600} animation="fade-up">
          <div className="text-center mt-10">
            <InteractiveHoverButton href="/services">
              Открыть полный прайс
              <ArrowRight className="w-4 h-4" />
            </InteractiveHoverButton>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
