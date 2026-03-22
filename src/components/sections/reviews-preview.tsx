"use client";

import { REVIEWS } from "@/data/clinic";
import { AnimatedContent } from "@/components/ui/animated-content";
import { AnimatedCounter } from "@/components/animated-counter";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Star, ExternalLink } from "lucide-react";
import { CLINIC } from "@/data/clinic";

export function ReviewsPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent animation="fade-up">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-clinic-charcoal mb-4">
              Отзывы пациентов
            </h2>
            <p className="text-steel-500 text-lg max-w-2xl mx-auto">
              Реальные отзывы из 2GIS — наша главная гарантия
            </p>
          </div>
        </AnimatedContent>

        {/* 2GIS Rating Block with GlowingEffect */}
        <AnimatedContent delay={100} animation="scale">
          <GlowingEffect className="rounded-2xl max-w-2xl mx-auto mb-12" color="rgba(91,141,184,0.12)" blur={50}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40">
              <div className="text-center">
                <div className="text-5xl font-bold text-clinic-charcoal">
                  <AnimatedCounter end={5.0} decimals={1} />
                </div>
                <div className="flex items-center justify-center gap-0.5 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-steel-500 mt-1">рейтинг в 2GIS</p>
              </div>
              <div className="hidden sm:block w-px h-16 bg-steel-200/50" />
              <div className="flex gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-clinic-charcoal">
                    <AnimatedCounter end={800} suffix="+" />
                  </div>
                  <p className="text-sm text-steel-500">оценок</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-clinic-charcoal">
                    <AnimatedCounter end={650} suffix="+" />
                  </div>
                  <p className="text-sm text-steel-500">отзывов</p>
                </div>
              </div>
              <a
                href={CLINIC.twoGis}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-clinic-blue hover:text-clinic-blue-light transition-colors"
              >
                Все отзывы
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </GlowingEffect>
        </AnimatedContent>

        {/* Stagger Testimonials */}
        <StaggerTestimonials testimonials={REVIEWS.map(r => ({ ...r }))} />
      </div>
    </section>
  );
}
