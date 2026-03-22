"use client";

import { CLINIC } from "@/data/clinic";
import { AnimatedText } from "@/components/animated-text";
import { AnimatedContent } from "@/components/ui/animated-content";
import { HeroPill } from "@/components/ui/hero-pill";
import { ShinyText } from "@/components/ui/shiny-text";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { FluidGlass } from "@/components/ui/fluid-glass";
import { SparkleGrid } from "@/components/sparkle-grid";
import { MessageCircle, ArrowDown, Sparkles, Star, Shield } from "lucide-react";
import Link from "next/link";
import { ClinicLogo } from "@/components/clinic-logo";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-clinic-pearl to-steel-50" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-clinic-blue/8 via-transparent to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-steel-100/40 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="absolute top-1/4 right-[15%] w-64 h-64 border border-clinic-blue/10 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-1/3 right-[25%] w-32 h-32 border border-steel-200/30 rounded-2xl rotate-45 animate-float hidden lg:block" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[40%] right-[10%] w-3 h-3 bg-clinic-blue/20 rounded-full animate-pulse-soft hidden lg:block" />
      <div className="absolute top-1/3 right-[18%] w-48 h-48 bg-clinic-blue/5 rounded-full blur-2xl animate-glow hidden lg:block" />

      <SparkleGrid />

      {/* Fluid Glass floating cards - right side */}
      <div className="absolute top-[25%] right-[5%] hidden xl:block z-[5]">
        <div className="relative">
          <FluidGlass className="w-56 p-5 animate-float premium-shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="relative h-10 w-10 shrink-0">
                <ClinicLogo alt="ALL DENT" sizes="40px" />
              </div>
              <div>
                <p className="text-sm font-semibold text-clinic-charcoal">ALL DENT</p>
                <p className="text-[10px] text-steel-400">Астана</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-clinic-charcoal">5.0</span>
              </div>
              <p className="text-[11px] text-steel-500">800+ оценок в 2GIS</p>
            </div>
          </FluidGlass>

          <FluidGlass className="absolute -bottom-16 -left-12 w-44 p-4 animate-float premium-shadow" style={{ animationDelay: "2s" }}>
            <p className="text-xs font-semibold text-clinic-blue mb-1">10 000+</p>
            <p className="text-[10px] text-steel-500">установленных имплантов</p>
          </FluidGlass>

          <FluidGlass className="absolute -top-8 -left-6 px-3 py-1.5 animate-float" style={{ animationDelay: "4s" }}>
            <span className="text-[10px] font-medium text-emerald-600">Анализы — бесплатно</span>
          </FluidGlass>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
        <div className="max-w-3xl">
          {/* Hero Pill */}
          <AnimatedContent delay={0} animation="fade-up">
            <HeroPill
              icon={<Sparkles className="w-4 h-4 text-clinic-blue" />}
              className="mb-6"
            >
              <ShinyText speed={4} className="text-sm">
                Анализы на Севоран / ЭКГ / план лечения — бесплатно
              </ShinyText>
            </HeroPill>
          </AnimatedContent>

          <AnimatedText
            text="Современная стоматология для взрослых и детей"
            as="h1"
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-clinic-charcoal leading-[1.1] mb-6"
            delay={200}
            staggerDelay={50}
          />

          <AnimatedContent delay={600} animation="fade-up">
            <p className="text-lg sm:text-xl text-steel-600 leading-relaxed mb-4 max-w-2xl">
              Имплантация, брекеты, лечение, протезирование и{" "}
              <ShinyText speed={5} className="text-lg sm:text-xl font-medium">
                лечение во сне
              </ShinyText>{" "}
              — в одной клинике
            </p>
          </AnimatedContent>

          <AnimatedContent delay={800} animation="fade-up">
            <p className="text-base text-steel-500 leading-relaxed mb-8 max-w-xl">
              Понятные цены, сильные врачи, удобная запись в WhatsApp.
              Комфортное лечение без лишнего стресса.
            </p>
          </AnimatedContent>

          {/* Liquid Glass Button + Interactive Hover Button */}
          <AnimatedContent delay={1000} animation="fade-up">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <LiquidGlassButton
                href={CLINIC.whatsapp}
                variant="whatsapp"
                size="xl"
              >
                <MessageCircle className="w-5 h-5" />
                Записаться в WhatsApp
              </LiquidGlassButton>
              <InteractiveHoverButton href="/services">
                <ArrowDown className="w-4 h-4" />
                Смотреть цены
              </InteractiveHoverButton>
            </div>
          </AnimatedContent>

          <AnimatedContent delay={1200} animation="fade-up">
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-steel-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                Анализы на Севоран — бесплатно
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-clinic-blue rounded-full" />
                10 000+ имплантов
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                5.0 в 2GIS
              </span>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
