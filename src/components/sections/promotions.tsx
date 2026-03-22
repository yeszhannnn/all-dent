"use client";

import { PROMOTIONS, PAYMENT_METHODS, CLINIC } from "@/data/clinic";
import { AnimatedContent } from "@/components/ui/animated-content";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { StarBorder } from "@/components/ui/star-border";
import { Marquee } from "@/components/ui/marquee";
import { GlareHover } from "@/components/ui/glare-hover";
import {
  MessageCircle,
  Percent,
  CreditCard,
  CheckCircle2,
  Star,
  Shield,
  Clock,
  Award,
} from "lucide-react";

const MARQUEE_ITEMS = [
  { icon: <Star className="w-4 h-4 text-amber-500" />, text: "5.0 в 2GIS" },
  { icon: <Shield className="w-4 h-4 text-clinic-blue" />, text: "10 000+ имплантов" },
  { icon: <Clock className="w-4 h-4 text-emerald-500" />, text: "Врачи с опытом 10+ лет" },
  { icon: <Award className="w-4 h-4 text-clinic-blue" />, text: "800+ оценок" },
  { icon: <CreditCard className="w-4 h-4 text-steel-500" />, text: "Kaspi · QR · Карта · Наличные" },
  { icon: <MessageCircle className="w-4 h-4 text-[#25D366]" />, text: "Запись через WhatsApp" },
  { icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" />, text: "Анализы на Севоран — бесплатно" },
];

export function PromotionsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-transparent via-clinic-pearl/40 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent animation="fade-up">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-clinic-charcoal mb-4">
              Акции и удобная оплата
            </h2>
            <p className="text-steel-500 text-lg max-w-2xl mx-auto">
              Выгодные предложения и все способы оплаты
            </p>
          </div>
        </AnimatedContent>

        {/* Marquee trust strip */}
        <AnimatedContent animation="fade-up" delay={50}>
          <Marquee speed={50} className="mb-12">
            {MARQUEE_ITEMS.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 text-sm font-medium text-steel-600 whitespace-nowrap"
              >
                {item.icon}
                {item.text}
              </div>
            ))}
          </Marquee>
        </AnimatedContent>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {PROMOTIONS.map((promo, i) => (
            <AnimatedContent key={i} delay={i * 100} animation="fade-up">
              {/* StarBorder on first promo card only */}
              {i === 0 ? (
                <StarBorder className="rounded-2xl">
                  <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-clinic-charcoal to-steel-800 text-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-clinic-blue/20 to-transparent rounded-full blur-2xl" />
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                          <Percent className="w-6 h-6 text-clinic-blue-light" />
                        </div>
                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-clinic-blue/20 text-clinic-blue-light border border-clinic-blue/30 rounded-full">
                          Акция
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                      <p className="text-3xl font-bold text-clinic-blue-light mb-2">{promo.discount}</p>
                      <p className="text-white/60 text-sm">{promo.description}</p>
                    </div>
                  </div>
                </StarBorder>
              ) : (
                <GlareHover className="rounded-2xl">
                  <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-clinic-charcoal to-steel-800 text-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-clinic-blue/20 to-transparent rounded-full blur-2xl" />
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                          <Percent className="w-6 h-6 text-clinic-blue-light" />
                        </div>
                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-clinic-blue/20 text-clinic-blue-light border border-clinic-blue/30 rounded-full">
                          Акция
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                      <p className="text-3xl font-bold text-clinic-blue-light mb-2">{promo.discount}</p>
                      <p className="text-white/60 text-sm">{promo.description}</p>
                    </div>
                  </div>
                </GlareHover>
              )}
            </AnimatedContent>
          ))}
        </div>

        <AnimatedContent delay={200} animation="fade-up">
          <div className="p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-clinic-blue/10 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-clinic-blue" />
              </div>
              <h3 className="text-lg font-semibold text-clinic-charcoal">
                Удобные способы оплаты
              </h3>
            </div>
            <div className="flex flex-wrap gap-3 mb-6">
              {PAYMENT_METHODS.map((method) => (
                <div
                  key={method}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-steel-50/80 text-sm font-medium text-steel-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {method}
                </div>
              ))}
            </div>
            <p className="text-sm text-steel-500 mb-6">
              Удобная запись и возможность начать лечение без лишней сложности
            </p>
            <LiquidGlassButton href={CLINIC.whatsapp} variant="whatsapp" size="lg">
              <MessageCircle className="w-5 h-5" />
              Записаться в WhatsApp
            </LiquidGlassButton>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
