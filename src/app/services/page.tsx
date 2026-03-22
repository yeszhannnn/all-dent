"use client";

import { useState } from "react";
import { SERVICE_CATEGORIES } from "@/data/services";
import { CLINIC } from "@/data/clinic";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AnimatedContent } from "@/components/ui/animated-content";
import { AnimatedText } from "@/components/animated-text";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { LiquidGlassCard } from "@/components/ui/liquid-glass-card";
import { PricingCard } from "@/components/ui/pricing-card";
import { DisplayCard } from "@/components/ui/display-card";
import { GlareHover } from "@/components/ui/glare-hover";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Card } from "@/components/ui/card";
import {
  MessageCircle,
  Stethoscope,
  Shield,
  Scissors,
  Wrench,
  AlignCenter,
  Crown,
  Cloud,
  Search,
  Phone,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope,
  Shield,
  Scissors,
  Wrench,
  AlignCenter,
  Crown,
  Cloud,
};

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = searchQuery
    ? SERVICE_CATEGORIES.map((cat) => ({
        ...cat,
        items: cat.items.filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      })).filter((cat) => cat.items.length > 0)
    : SERVICE_CATEGORIES;

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const highlightedCategories = ["implantology", "orthodontics", "prosthetics"];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-clinic-pearl to-steel-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-clinic-blue/6 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedText
            text="Услуги и цены"
            as="h1"
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-clinic-charcoal mb-4"
            staggerDelay={60}
          />
          <AnimatedContent delay={300} animation="fade-up">
            <p className="text-lg text-steel-500 max-w-2xl mb-8">
              Полный каталог стоматологических услуг с прозрачными ценами. Без скрытых доплат.
            </p>
          </AnimatedContent>

          <AnimatedContent delay={400} animation="fade-up">
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-steel-400" />
              <input
                type="text"
                placeholder="Поиск по услугам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/70 backdrop-blur-sm border border-white/50 text-sm text-clinic-charcoal placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-clinic-blue/20 focus:border-clinic-blue/30 transition-all"
              />
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Sticky Category Nav */}
      <div className="sticky top-16 lg:top-20 z-40 bg-white/80 backdrop-blur-2xl border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-3 overflow-x-auto scrollbar-hide">
            {SERVICE_CATEGORIES.map((cat) => {
              const Icon = ICON_MAP[cat.icon];
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all",
                    activeCategory === cat.id
                      ? "bg-clinic-blue/10 text-clinic-blue"
                      : "text-steel-500 hover:text-clinic-charcoal hover:bg-steel-50"
                  )}
                >
                  {Icon && <Icon className="w-4 h-4 flex-shrink-0" />}
                  {cat.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Highlighted Premium Categories as Pricing Cards */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-transparent via-clinic-pearl/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedContent animation="fade-up">
            <h2 className="text-2xl font-display font-bold text-clinic-charcoal mb-8 text-center">
              Популярные направления
            </h2>
          </AnimatedContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICE_CATEGORIES.filter((c) => highlightedCategories.includes(c.id)).map((cat, i) => (
              <AnimatedContent key={cat.id} delay={i * 100} animation="fade-up">
                <GlareHover className="rounded-2xl h-full">
                  <PricingCard
                    title={cat.title}
                    description={cat.description}
                    items={cat.items.slice(0, 5)}
                    featured={i === 0}
                    badge={i === 0 ? "Популярное" : undefined}
                    ctaLabel="Записаться"
                    ctaHref={CLINIC.whatsapp}
                    className="h-full"
                  />
                </GlareHover>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* All Service Categories */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {filteredCategories.map((cat, catIdx) => {
              const Icon = ICON_MAP[cat.icon];
              return (
                <div key={cat.id} id={cat.id} className="scroll-mt-36">
                  <AnimatedContent animation="fade-up">
                    <div className="flex items-start gap-4 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-clinic-blue/10 to-steel-50 flex items-center justify-center flex-shrink-0">
                        {Icon && <Icon className="w-7 h-7 text-clinic-blue" />}
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-display font-bold text-clinic-charcoal">
                          {cat.title}
                        </h2>
                        <p className="text-steel-500 mt-1 text-sm sm:text-base">{cat.description}</p>
                      </div>
                    </div>
                  </AnimatedContent>

                  <AnimatedContent delay={100} animation="fade-up">
                    <div className="flex flex-wrap gap-2 mb-8">
                      {cat.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium"
                        >
                          <span className="w-1 h-1 bg-emerald-400 rounded-full" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </AnimatedContent>

                  {/* Card-based price list */}
                  <AnimatedContent delay={200} animation="fade-up">
                    <Card className="overflow-hidden border-white/50 bg-white/70 backdrop-blur-sm">
                      {cat.items.length <= 8 ? (
                        <div className="divide-y divide-steel-100/50">
                          {cat.items.map((item, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between px-5 py-4 hover:bg-clinic-blue/[0.02] transition-colors"
                            >
                              <span className="text-sm text-clinic-charcoal pr-4">{item.name}</span>
                              <span className="text-sm font-semibold text-clinic-blue whitespace-nowrap">{item.price}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <Accordion type="single" collapsible>
                          <AccordionItem value="prices" className="border-0">
                            <div className="divide-y divide-steel-100/50">
                              {cat.items.slice(0, 6).map((item, i) => (
                                <div
                                  key={i}
                                  className="flex items-center justify-between px-5 py-4 hover:bg-clinic-blue/[0.02] transition-colors"
                                >
                                  <span className="text-sm text-clinic-charcoal pr-4">{item.name}</span>
                                  <span className="text-sm font-semibold text-clinic-blue whitespace-nowrap">{item.price}</span>
                                </div>
                              ))}
                            </div>
                            <AccordionTrigger className="px-5 py-3 text-sm text-clinic-blue hover:no-underline border-t border-steel-100/50">
                              Показать все {cat.items.length} услуг
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="divide-y divide-steel-100/50">
                                {cat.items.slice(6).map((item, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center justify-between px-5 py-4 hover:bg-clinic-blue/[0.02] transition-colors"
                                  >
                                    <span className="text-sm text-clinic-charcoal pr-4">{item.name}</span>
                                    <span className="text-sm font-semibold text-clinic-blue whitespace-nowrap">{item.price}</span>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      )}
                    </Card>
                  </AnimatedContent>

                  {/* Category CTA */}
                  <AnimatedContent delay={300} animation="fade-up">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-6">
                      <LiquidGlassButton href={CLINIC.whatsapp} variant="whatsapp" size="default">
                        <MessageCircle className="w-4 h-4" />
                        Записаться
                      </LiquidGlassButton>
                      {catIdx === 0 && (
                        <Badge variant="success" className="text-xs">
                          Анализы на Севоран / ЭКГ / план лечения — бесплатно
                        </Badge>
                      )}
                      {/* Dialog for price info */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="flex items-center gap-1.5 text-sm text-steel-500 hover:text-clinic-blue transition-colors">
                            <Info className="w-4 h-4" />
                            Подробнее
                          </button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{cat.title}</DialogTitle>
                            <DialogDescription>{cat.description}</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-2 max-h-60 overflow-y-auto">
                            {cat.items.map((item, i) => (
                              <div key={i} className="flex justify-between text-sm py-1.5 border-b border-steel-50 last:border-0">
                                <span className="text-steel-600">{item.name}</span>
                                <span className="font-medium text-clinic-blue whitespace-nowrap ml-4">{item.price}</span>
                              </div>
                            ))}
                          </div>
                          <div className="pt-4">
                            <LiquidGlassButton href={CLINIC.whatsapp} variant="whatsapp" size="lg" className="w-full">
                              <MessageCircle className="w-5 h-5" />
                              Записаться в WhatsApp
                            </LiquidGlassButton>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </AnimatedContent>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-clinic-charcoal via-steel-800 to-clinic-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(91,141,184,0.15),transparent_70%)]" />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedContent animation="fade-up">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              Не нашли нужную услугу?
            </h2>
            <p className="text-white/60 mb-8">
              Напишите нам в WhatsApp — мы подберём оптимальный план лечения и расскажем о ценах
            </p>
          </AnimatedContent>
          <AnimatedContent delay={100} animation="scale">
            <LiquidGlassButton href={CLINIC.whatsapp} variant="whatsapp" size="xl">
              <MessageCircle className="w-5 h-5" />
              Написать в WhatsApp
            </LiquidGlassButton>
          </AnimatedContent>
        </div>
      </section>
    </>
  );
}
