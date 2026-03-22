"use client";

import { AnimatedContent } from "@/components/ui/animated-content";
import { TiltCard } from "@/components/ui/tilt-card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ShinyText } from "@/components/ui/shiny-text";
import { CLINIC } from "@/data/clinic";
import { cn } from "@/lib/utils";

const CASES = [
  {
    title: "Имплантация",
    subtitle: "Straumann · Osstem · AnyOne",
    description: "Восстановление зубного ряда — от одного зуба до полной челюсти",
    stat: "10 000+",
    statLabel: "имплантов",
    gradient: "from-[#1e3a5f] via-[#2a5480] to-[#1a3050]",
    accentGradient: "from-clinic-blue to-cyan-400",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
    floatingElements: [
      { x: "75%", y: "15%", size: 6, delay: 0 },
      { x: "85%", y: "55%", size: 4, delay: 1.5 },
      { x: "20%", y: "70%", size: 5, delay: 3 },
    ],
  },
  {
    title: "Ортодонтия",
    subtitle: "Damon Q · Керамика · Сапфир",
    description: "Брекеты и капы для идеального прикуса — взрослым и детям",
    stat: "-50%",
    statLabel: "американские брекеты",
    gradient: "from-[#2d1854] via-[#3d2670] to-[#251248]",
    accentGradient: "from-violet-400 to-fuchsia-400",
    iconPath: "M7 10l5 5 5-5H7zm0-4h10l-5 5-5-5zm5 14c-5.52 0-10-4.48-10-10S6.48 0 12 0s10 4.48 10 10-4.48 10-10 10z",
    floatingElements: [
      { x: "80%", y: "20%", size: 5, delay: 0.5 },
      { x: "15%", y: "60%", size: 7, delay: 2 },
      { x: "70%", y: "70%", size: 4, delay: 3.5 },
    ],
  },
  {
    title: "Лечение во сне",
    subtitle: "Севоран · Анализы бесплатно",
    description: "Комфортное лечение для детей и взрослых без стресса и боли",
    stat: "15 000",
    statLabel: "тг / час",
    gradient: "from-[#0d3b3b] via-[#155050] to-[#0a2e2e]",
    accentGradient: "from-emerald-400 to-teal-300",
    iconPath: "M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31A7.98 7.98 0 0012 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z",
    floatingElements: [
      { x: "82%", y: "25%", size: 6, delay: 1 },
      { x: "10%", y: "45%", size: 4, delay: 2.5 },
      { x: "65%", y: "75%", size: 5, delay: 0 },
    ],
  },
  {
    title: "Протезирование",
    subtitle: "E-max · Цирконий · ALL ON 4",
    description: "Коронки, виниры и полные конструкции — от эстетики до функции",
    stat: "от 60 000",
    statLabel: "тг за коронку",
    gradient: "from-[#3b2a10] via-[#55400e] to-[#2e2008]",
    accentGradient: "from-amber-400 to-orange-300",
    iconPath: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",
    floatingElements: [
      { x: "78%", y: "18%", size: 5, delay: 0.8 },
      { x: "25%", y: "55%", size: 6, delay: 2.2 },
      { x: "60%", y: "80%", size: 4, delay: 3.2 },
    ],
  },
  {
    title: "Терапия",
    subtitle: "Кариес · Реставрация · Каналы",
    description: "Лечение и восстановление зубов с понятным прайсом",
    stat: "от 17 000",
    statLabel: "тг",
    gradient: "from-[#1a2a4a] via-[#253d65] to-[#15233e]",
    accentGradient: "from-sky-400 to-blue-300",
    iconPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5 0 1.93-1.57 3.5-3.5 3.5S8.5 11.43 8.5 9.5 10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z",
    floatingElements: [
      { x: "85%", y: "30%", size: 4, delay: 1.2 },
      { x: "18%", y: "65%", size: 6, delay: 0 },
      { x: "72%", y: "65%", size: 5, delay: 2.8 },
    ],
  },
  {
    title: "ALL ON 4 / 6",
    subtitle: "Полная реабилитация",
    description: "Полное восстановление челюсти на 4–6 имплантах за один этап",
    stat: "от 1.3 млн",
    statLabel: "тг",
    gradient: "from-[#1a1a2e] via-[#2d2d50] to-[#141428]",
    accentGradient: "from-clinic-blue-light to-steel-300",
    iconPath: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    floatingElements: [
      { x: "80%", y: "22%", size: 7, delay: 0.3 },
      { x: "12%", y: "50%", size: 4, delay: 1.8 },
      { x: "55%", y: "78%", size: 5, delay: 3 },
    ],
  },
];

export function CasesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-transparent via-clinic-pearl/30 to-transparent relative overflow-hidden">
      {/* Background ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-clinic-blue/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-steel-300/[0.04] rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedContent animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-clinic-charcoal mb-4">
              Направления работ
            </h2>
            <p className="text-steel-500 text-lg max-w-2xl mx-auto">
              Реальные направления лечения в ALL DENT
            </p>
          </div>
        </AnimatedContent>

        {/* 3D Card Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          style={{ perspective: "1200px" }}
        >
          {CASES.map((item, i) => (
            <AnimatedContent
              key={i}
              delay={i * 120}
              animation={i % 2 === 0 ? "fade-up" : "scale"}
            >
              <GlowingEffect className="rounded-2xl" blur={35} spread={15}>
                <TiltCard
                  className="rounded-2xl"
                  tiltAmount={12}
                  perspective={1000}
                  scale={1.03}
                  glareColor="rgba(255,255,255,0.15)"
                >
                  <div
                    className={cn(
                      "relative h-full rounded-2xl overflow-hidden bg-gradient-to-br p-6 lg:p-7",
                      item.gradient
                    )}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Animated floating particles */}
                    {item.floatingElements.map((el, j) => (
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
                          transform: "translateZ(20px)",
                        }}
                      />
                    ))}

                    {/* Grid pattern overlay */}
                    <div
                      className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    />

                    {/* Radial glow */}
                    <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 rounded-full bg-white/[0.04] blur-3xl" />

                    {/* Content with Z-depth layers */}
                    <div className="relative" style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
                      {/* Icon + Badge row */}
                      <div className="flex items-start justify-between mb-5">
                        <div
                          className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center"
                          style={{ transform: "translateZ(15px)" }}
                        >
                          <svg className="w-7 h-7 text-white/90" viewBox="0 0 24 24" fill="currentColor">
                            <path d={item.iconPath} />
                          </svg>
                        </div>
                        <div
                          className={cn(
                            "px-3 py-1 rounded-full bg-gradient-to-r text-[10px] font-bold uppercase tracking-wider text-white/90",
                            item.accentGradient
                          )}
                          style={{ transform: "translateZ(20px)" }}
                        >
                          {item.stat}
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-xl font-bold text-white mb-1"
                        style={{ transform: "translateZ(25px)" }}
                      >
                        {item.title}
                      </h3>

                      {/* Subtitle */}
                      <p
                        className="text-xs text-white/40 font-medium tracking-wide mb-3"
                        style={{ transform: "translateZ(18px)" }}
                      >
                        {item.subtitle}
                      </p>

                      {/* Description */}
                      <p
                        className="text-sm text-white/60 leading-relaxed mb-5"
                        style={{ transform: "translateZ(12px)" }}
                      >
                        {item.description}
                      </p>

                      {/* Bottom bar */}
                      <div
                        className="flex items-center justify-between pt-4 border-t border-white/10"
                        style={{ transform: "translateZ(30px)" }}
                      >
                        <div>
                          <span className="text-xs text-white/30">{item.statLabel}</span>
                        </div>
                        <a
                          href={CLINIC.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-1.5 text-xs font-medium text-white/60 hover:text-white transition-colors"
                        >
                          Записаться
                          <svg
                            className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Accent line at bottom */}
                    <div
                      className={cn(
                        "absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r opacity-40",
                        item.accentGradient
                      )}
                    />
                  </div>
                </TiltCard>
              </GlowingEffect>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
