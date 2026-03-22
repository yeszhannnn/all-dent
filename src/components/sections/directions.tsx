"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Stethoscope,
  Shield,
  Scissors,
  Wrench,
  AlignCenter,
  Crown,
  Baby,
  Cloud,
} from "lucide-react";
import { DIRECTIONS } from "@/data/clinic";
import { cn } from "@/lib/utils";
import { AnimatedContent } from "@/components/ui/animated-content";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { TiltCard } from "@/components/ui/tilt-card";

const ICON_MAP: Record<string, LucideIcon> = {
  Stethoscope,
  Shield,
  Scissors,
  Wrench,
  AlignCenter,
  Crown,
  Baby,
  Cloud,
};

/** Визуал как у блока «Направления работ»: градиенты, бейджи, подписи — тексты = направления клиники */
const DIRECTION_VISUAL = [
  {
    gradient: "from-[#1e3a5f] via-[#2a5480] to-[#1a3050]",
    accentGradient: "from-sky-400 to-clinic-blue",
    badge: "ОТ 17 000",
    keywords: "Кариес · Реставрация · Каналы",
    footerLabel: "тг",
    floatingElements: [
      { x: "78%", y: "12%", size: 6, delay: 0 },
      { x: "88%", y: "52%", size: 4, delay: 1.4 },
      { x: "18%", y: "72%", size: 5, delay: 2.8 },
    ],
  },
  {
    gradient: "from-[#0d3d35] via-[#145a4d] to-[#0a2e28]",
    accentGradient: "from-emerald-400 to-teal-300",
    badge: "ОТ 25 000",
    keywords: "Дёсны · Гигиена · Vector",
    footerLabel: "гигиена",
    floatingElements: [
      { x: "80%", y: "20%", size: 5, delay: 0.6 },
      { x: "12%", y: "58%", size: 6, delay: 2 },
      { x: "70%", y: "76%", size: 4, delay: 3.2 },
    ],
  },
  {
    gradient: "from-[#1a2744] via-[#243556] to-[#121c2e]",
    accentGradient: "from-indigo-300 to-clinic-blue-light",
    badge: "ОТ 25 000",
    keywords: "Удаление · Резекции · Френулопластика",
    footerLabel: "хирургия",
    floatingElements: [
      { x: "76%", y: "16%", size: 5, delay: 0.3 },
      { x: "20%", y: "62%", size: 5, delay: 1.8 },
      { x: "82%", y: "68%", size: 4, delay: 2.9 },
    ],
  },
  {
    gradient: "from-[#1e3a5f] via-[#2a5480] to-[#1a3050]",
    accentGradient: "from-clinic-blue to-cyan-400",
    badge: "10 000+",
    keywords: "Straumann · Osstem · ALL ON 4/6",
    footerLabel: "имплантов",
    floatingElements: [
      { x: "75%", y: "15%", size: 6, delay: 0 },
      { x: "85%", y: "55%", size: 4, delay: 1.5 },
      { x: "20%", y: "70%", size: 5, delay: 3 },
    ],
  },
  {
    gradient: "from-[#2d1854] via-[#3d2670] to-[#251248]",
    accentGradient: "from-violet-400 to-fuchsia-400",
    badge: "ДО −50%",
    keywords: "Damon Q · Керамика · Капы · Ретейнеры",
    footerLabel: "брекеты",
    floatingElements: [
      { x: "80%", y: "20%", size: 5, delay: 0.5 },
      { x: "15%", y: "60%", size: 7, delay: 2 },
      { x: "70%", y: "70%", size: 4, delay: 3.5 },
    ],
  },
  {
    gradient: "from-[#3b2a10] via-[#55400e] to-[#2e2008]",
    accentGradient: "from-amber-400 to-orange-300",
    badge: "ОТ 60 000",
    keywords: "Коронки · Виниры · E-max · Протезы",
    footerLabel: "коронка",
    floatingElements: [
      { x: "78%", y: "18%", size: 5, delay: 0.8 },
      { x: "25%", y: "55%", size: 6, delay: 2.2 },
      { x: "60%", y: "80%", size: 4, delay: 3.2 },
    ],
  },
  {
    gradient: "from-[#1f3d4d] via-[#2d5a6e] to-[#1a3040]",
    accentGradient: "from-sky-300 to-cyan-200",
    badge: "ДЛЯ ДЕТЕЙ",
    keywords: "Бережно · Комфорт · Семья",
    footerLabel: "педиатрия",
    floatingElements: [
      { x: "82%", y: "22%", size: 4, delay: 1 },
      { x: "14%", y: "48%", size: 6, delay: 0 },
      { x: "68%", y: "74%", size: 5, delay: 2.5 },
    ],
  },
  {
    gradient: "from-[#0d3b3b] via-[#155050] to-[#0a2e2e]",
    accentGradient: "from-emerald-400 to-teal-300",
    badge: "15 000",
    keywords: "Севоран · Анализы бесплатно · ЭКГ",
    footerLabel: "тг / час",
    floatingElements: [
      { x: "82%", y: "25%", size: 6, delay: 1 },
      { x: "10%", y: "45%", size: 4, delay: 2.5 },
      { x: "65%", y: "75%", size: 5, delay: 0 },
    ],
  },
] as const;

export function DirectionsSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#eef1f6]" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-clinic-blue/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-steel-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedContent animation="fade-up">
          <header className="mb-12 text-center lg:mb-14">
            <h2 className="font-display text-3xl font-bold tracking-tight text-clinic-charcoal sm:text-4xl lg:text-[2.25rem]">
              Направления клиники
            </h2>
            <p className="mx-auto mt-3 max-w-2xl font-sans text-base text-steel-500 sm:text-lg">
              Полный спектр стоматологических услуг для всей семьи
            </p>
          </header>
        </AnimatedContent>

        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7"
          style={{ perspective: "1200px" }}
        >
          {DIRECTIONS.map((dir, i) => {
            const Icon = ICON_MAP[dir.icon];
            const visual = DIRECTION_VISUAL[i];
            if (!visual) return null;

            return (
              <AnimatedContent
                key={dir.title}
                delay={i * 100}
                animation={i % 2 === 0 ? "fade-up" : "scale"}
              >
                <GlowingEffect
                  className="rounded-[1.5rem] h-full"
                  blur={32}
                  spread={12}
                  color="rgba(91,141,184,0.2)"
                >
                  <Link href="/services" className="block h-full rounded-[1.5rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-clinic-blue/40 focus-visible:ring-offset-2">
                    <TiltCard
                      className="h-full rounded-[1.5rem]"
                      tiltAmount={11}
                      perspective={1000}
                      scale={1.025}
                    >
                      <div
                        className={cn(
                          "relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-[1.5rem] p-6 lg:min-h-[280px] lg:p-7",
                          "bg-gradient-to-br",
                          visual.gradient
                        )}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        {visual.floatingElements.map((el, j) => (
                          <div
                            key={j}
                            className="absolute rounded-full bg-white/10 animate-float"
                            style={{
                              left: el.x,
                              top: el.y,
                              width: el.size,
                              height: el.size,
                              animationDelay: `${el.delay}s`,
                              animationDuration: "5s",
                              transform: "translateZ(18px)",
                            }}
                          />
                        ))}

                        <div
                          className="absolute inset-0 opacity-[0.05]"
                          style={{
                            backgroundImage:
                              "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
                            backgroundSize: "28px 28px",
                          }}
                        />
                        <div className="absolute -right-1/4 -top-1/4 h-2/3 w-2/3 rounded-full bg-white/[0.06] blur-3xl" />

                        <div
                          className="relative flex flex-1 flex-col"
                          style={{ transform: "translateZ(24px)", transformStyle: "preserve-3d" }}
                        >
                          <div className="mb-5 flex items-start justify-between gap-3">
                            <div
                              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm"
                              style={{ transform: "translateZ(12px)" }}
                            >
                              {Icon && (
                                <Icon className="h-6 w-6 text-white/90" strokeWidth={1.6} />
                              )}
                            </div>
                            <span
                              className={cn(
                                "shrink-0 rounded-full bg-gradient-to-r px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm",
                                visual.accentGradient
                              )}
                              style={{ transform: "translateZ(16px)" }}
                            >
                              {visual.badge}
                            </span>
                          </div>

                          <h3 className="font-sans text-xl font-bold text-white lg:text-[1.35rem]">
                            {dir.title}
                          </h3>
                          <p className="mt-1.5 font-sans text-xs font-medium tracking-wide text-white/45">
                            {visual.keywords}
                          </p>
                          <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-white/65">
                            {dir.description}
                          </p>

                          <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                            <span className="text-[11px] text-white/35">{visual.footerLabel}</span>
                            <span className="group/cta flex items-center gap-1 text-xs font-medium text-white/55 transition-colors hover:text-white">
                              Записаться
                              <svg
                                className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                          </div>
                        </div>

                        <div
                          className={cn(
                            "absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r opacity-50",
                            visual.accentGradient
                          )}
                        />
                      </div>
                    </TiltCard>
                  </Link>
                </GlowingEffect>
              </AnimatedContent>
            );
          })}
        </div>
      </div>
    </section>
  );
}
