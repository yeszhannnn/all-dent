"use client";

import { CLINIC, REVIEWS } from "@/data/clinic";
import { FAQ_DATA } from "@/data/faq";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { AnimatedContent } from "@/components/ui/animated-content";
import { AnimatedText } from "@/components/animated-text";
import { AnimatedCounter } from "@/components/animated-counter";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { LiquidGlassCard } from "@/components/ui/liquid-glass-card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Marquee } from "@/components/ui/marquee";
import { WebGLShader } from "@/components/ui/webgl-shader";
import { ShinyText } from "@/components/ui/shiny-text";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Star,
  ExternalLink,
  Shield,
  Heart,
  CheckCircle2,
  Cloud,
  Baby,
  Clock,
  Award,
  CreditCard,
} from "lucide-react";

const TRUST_MARQUEE = [
  { icon: <Star className="w-4 h-4 text-amber-500" />, text: "5.0 в 2GIS" },
  { icon: <Shield className="w-4 h-4 text-clinic-blue" />, text: "10 000+ имплантов" },
  { icon: <Award className="w-4 h-4 text-clinic-blue" />, text: "800+ оценок" },
  { icon: <Clock className="w-4 h-4 text-emerald-500" />, text: "10+ лет опыта" },
  { icon: <CreditCard className="w-4 h-4 text-steel-500" />, text: "Kaspi · QR · Карта" },
  { icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" />, text: "Анализы — бесплатно" },
];

export default function SevoranPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-clinic-pearl to-steel-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-clinic-blue/6 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="premium" className="text-xs tracking-wider uppercase">Севоран</Badge>
            <Badge variant="premium" className="text-xs tracking-wider uppercase">Отзывы</Badge>
            <Badge variant="premium" className="text-xs tracking-wider uppercase">FAQ</Badge>
          </div>
          <AnimatedText
            text="Севоран, отзывы и контакты"
            as="h1"
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-clinic-charcoal mb-4"
            staggerDelay={60}
          />
          <AnimatedContent delay={300} animation="fade-up">
            <p className="text-lg text-steel-500 max-w-2xl">
              Лечение во сне, реальные отзывы пациентов, ответы на частые вопросы и вся контактная информация
            </p>
          </AnimatedContent>
        </div>
      </section>

      {/* Sevoran Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <AnimatedContent animation="fade-right">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-clinic-blue/15 to-steel-100 flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-clinic-blue" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-clinic-charcoal">
                    Что такое Севоран?
                  </h2>
                </div>
              </AnimatedContent>

              <AnimatedContent delay={100} animation="fade-up">
                <p className="text-steel-600 leading-relaxed mb-4">
                  Севоран (севофлуран) — это современный ингаляционный анестетик, который позволяет проводить стоматологическое лечение во сне. Пациент засыпает за несколько вдохов и просыпается через несколько минут после окончания процедуры.
                </p>
                <p className="text-steel-600 leading-relaxed mb-6">
                  Севоран считается одним из самых безопасных препаратов для седации. Он быстро выводится из организма, не накапливается и не вызывает привыкания.
                </p>
              </AnimatedContent>

              <AnimatedContent delay={200} animation="fade-up">
                <h3 className="text-lg font-semibold text-clinic-charcoal mb-4">
                  Кому подходит лечение во сне?
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: Baby, text: "Детям от 1 года — особенно при большом объёме лечения" },
                    { icon: Heart, text: "Пациентам с повышенной тревожностью или страхом" },
                    { icon: Shield, text: "При необходимости длительного или сложного лечения" },
                    { icon: Clock, text: "Когда нужно провести все процедуры за один визит" },
                  ].map((item, i) => (
                    <LiquidGlassCard key={i} className="flex items-start gap-3 p-3">
                      <div className="w-8 h-8 rounded-lg bg-clinic-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon className="w-4 h-4 text-clinic-blue" />
                      </div>
                      <span className="text-sm text-steel-600">{item.text}</span>
                    </LiquidGlassCard>
                  ))}
                </div>
              </AnimatedContent>
            </div>

            <div>
              <AnimatedContent delay={200} animation="fade-left">
                <GlowingEffect className="rounded-2xl mb-6" color="rgba(91,141,184,0.15)" blur={40}>
                  <div className="rounded-2xl bg-gradient-to-br from-clinic-charcoal to-steel-800 p-8 text-white">
                    <h3 className="text-xl font-bold mb-6">
                      <ShinyText speed={4} className="text-xl font-bold">
                        Бесплатно при лечении во сне
                      </ShinyText>
                    </h3>
                    <div className="space-y-4">
                      {[
                        "Необходимые анализы",
                        "Электрокардиограмма (ЭКГ)",
                        "Составление плана лечения",
                        "Консультация анестезиолога",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                          <span className="text-white/80">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="flex items-end gap-2 mb-1">
                        <span className="text-3xl font-bold text-clinic-blue-light">15 000 тг</span>
                        <span className="text-white/50 text-sm mb-1">/ час</span>
                      </div>
                      <p className="text-xs text-white/40">Точная продолжительность определяется на консультации</p>
                    </div>
                  </div>
                </GlowingEffect>
              </AnimatedContent>

              <AnimatedContent delay={300} animation="fade-left">
                <LiquidGlassCard className="p-6">
                  <p className="text-sm text-steel-500 leading-relaxed mb-5">
                    Лечение во сне проходит под контролем опытного анестезиолога. Мы подробно объясним вам весь процесс, ответим на вопросы и поможем подготовиться.
                  </p>
                  <LiquidGlassButton href={CLINIC.whatsapp} variant="whatsapp" size="lg" className="w-full">
                    <MessageCircle className="w-5 h-5" />
                    Узнать подробнее в WhatsApp
                  </LiquidGlassButton>
                </LiquidGlassCard>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee trust strip */}
      <AnimatedContent animation="fade-up">
        <Marquee speed={45} className="py-6 bg-clinic-pearl/30">
          {TRUST_MARQUEE.map((item, i) => (
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

      {/* Reviews Section with StaggerTestimonials */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-transparent via-clinic-pearl/40 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedContent animation="fade-up">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-clinic-charcoal mb-4">
                Отзывы пациентов
              </h2>
              <p className="text-steel-500 text-lg max-w-2xl mx-auto">Реальные отзывы из 2GIS</p>
            </div>
          </AnimatedContent>

          <AnimatedContent delay={100} animation="scale">
            <GlowingEffect className="rounded-2xl max-w-3xl mx-auto mb-12" color="rgba(91,141,184,0.12)">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40">
                <div className="text-center">
                  <div className="text-6xl font-bold text-clinic-charcoal">
                    <AnimatedCounter end={5.0} decimals={1} />
                  </div>
                  <div className="flex items-center justify-center gap-0.5 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-steel-500 mt-2">рейтинг в 2GIS</p>
                </div>
                <div className="hidden sm:block w-px h-20 bg-steel-200/50" />
                <div className="flex gap-10 text-center">
                  <div>
                    <div className="text-3xl font-bold text-clinic-charcoal">
                      <AnimatedCounter end={800} suffix="+" />
                    </div>
                    <p className="text-sm text-steel-500 mt-1">оценок</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-clinic-charcoal">
                      <AnimatedCounter end={650} suffix="+" />
                    </div>
                    <p className="text-sm text-steel-500 mt-1">отзывов</p>
                  </div>
                </div>
                <a
                  href={CLINIC.twoGis}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-clinic-blue hover:text-clinic-blue-light transition-colors"
                >
                  Смотреть в 2GIS
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </GlowingEffect>
          </AnimatedContent>

          <StaggerTestimonials testimonials={REVIEWS.map(r => ({ ...r }))} />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 lg:py-24 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedContent animation="fade-up">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-clinic-charcoal mb-4">
                Частые вопросы
              </h2>
              <p className="text-steel-500 text-lg">Подробные ответы на все популярные вопросы</p>
            </div>
          </AnimatedContent>

          <AnimatedContent delay={100} animation="fade-up">
            <LiquidGlassCard className="p-6 lg:p-8">
              <Accordion type="single" collapsible className="w-full">
                {FAQ_DATA.map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-sm lg:text-base font-medium text-clinic-charcoal hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-steel-500 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </LiquidGlassCard>
          </AnimatedContent>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 lg:py-24 bg-gradient-to-b from-transparent via-clinic-pearl/40 to-transparent scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedContent animation="fade-up">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-clinic-charcoal mb-4">Контакты</h2>
              <p className="text-steel-500 text-lg">Стоматология ALL DENT в Астане</p>
            </div>
          </AnimatedContent>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedContent delay={100} animation="fade-right">
              <div className="space-y-4">
                <a
                  href={CLINIC.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/15 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-clinic-charcoal group-hover:text-[#25D366] transition-colors">WhatsApp</p>
                    <p className="text-sm text-steel-500">Основной способ записи</p>
                  </div>
                </a>

                <LiquidGlassCard className="flex items-center gap-4 p-5">
                  <div className="w-12 h-12 rounded-xl bg-clinic-blue/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-clinic-blue" />
                  </div>
                  <div>
                    <a href={`tel:${CLINIC.phone.replace(/\s/g, "")}`} className="font-semibold text-clinic-charcoal hover:text-clinic-blue transition-colors">
                      {CLINIC.phone}
                    </a>
                    <p className="text-sm text-steel-500">Позвонить</p>
                  </div>
                </LiquidGlassCard>

                <LiquidGlassCard className="flex items-center gap-4 p-5">
                  <div className="w-12 h-12 rounded-xl bg-clinic-blue/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-clinic-blue" />
                  </div>
                  <div>
                    <a href={`mailto:${CLINIC.email}`} className="font-semibold text-clinic-charcoal hover:text-clinic-blue transition-colors">
                      {CLINIC.email}
                    </a>
                    <p className="text-sm text-steel-500">Электронная почта</p>
                  </div>
                </LiquidGlassCard>

                <LiquidGlassCard className="flex items-center gap-4 p-5">
                  <div className="w-12 h-12 rounded-xl bg-clinic-blue/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-clinic-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-clinic-charcoal">{CLINIC.address}</p>
                    <p className="text-sm text-steel-500">Адрес клиники</p>
                  </div>
                </LiquidGlassCard>

                <div className="flex gap-3">
                  <a
                    href={CLINIC.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 flex-1 p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-pink-100/50 hover:from-purple-100 hover:to-pink-100 transition-all"
                  >
                    <Instagram className="w-5 h-5 text-pink-500" />
                    <span className="text-sm font-medium text-clinic-charcoal">Instagram</span>
                  </a>
                  <a
                    href={CLINIC.twoGis}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 flex-1 p-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-emerald-100/50 hover:from-green-100 hover:to-emerald-100 transition-all"
                  >
                    <Star className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm font-medium text-clinic-charcoal">2GIS</span>
                  </a>
                </div>

                {/* NOTE: Work hours may change on holidays */}
                <LiquidGlassCard className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-clinic-blue" />
                    <p className="font-semibold text-clinic-charcoal">График работы</p>
                  </div>
                  <p className="text-steel-600 ml-8">{CLINIC.workHours}</p>
                  <p className="text-xs text-steel-400 ml-8 mt-1">{CLINIC.workHoursNote}</p>
                </LiquidGlassCard>
              </div>
            </AnimatedContent>

            <AnimatedContent delay={200} animation="fade-left">
              <div className="rounded-2xl overflow-hidden border border-white/50 premium-shadow h-full min-h-[400px] bg-steel-100 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.8!2d71.4200!3d51.1280!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA3JzQwLjgiTiA3McKwMjUnMTIuMCJF!5e0!3m2!1sru!2skz!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ALL DENT на карте"
                  className="absolute inset-0"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-strong">
                  <p className="text-sm font-medium text-clinic-charcoal">{CLINIC.fullName}</p>
                  <p className="text-xs text-steel-500">{CLINIC.address}</p>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Final CTA with WebGL Shader (dark section) */}
      <WebGLShader className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedContent animation="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
              <ShinyText speed={5} className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
                Запишитесь в WhatsApp
              </ShinyText>
            </h2>
            <p className="text-lg text-white/60 mb-3 max-w-xl mx-auto">
              ALL DENT — стоматология в Астане с современной подачей, понятными ценами и комфортным лечением
            </p>
            <p className="text-sm text-white/40 mb-10 max-w-lg mx-auto">
              Севоран · Имплантация · Брекеты · Понятный прайс · Удобная запись
            </p>
          </AnimatedContent>

          <AnimatedContent delay={200} animation="scale">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LiquidGlassButton href={CLINIC.whatsapp} variant="whatsapp" size="xl">
                <MessageCircle className="w-5 h-5" />
                Записаться в WhatsApp
              </LiquidGlassButton>
              <LiquidGlassButton href={`tel:${CLINIC.phone.replace(/\s/g, "")}`} variant="primary" size="xl">
                <Phone className="w-5 h-5" />
                {CLINIC.phone}
              </LiquidGlassButton>
            </div>
          </AnimatedContent>
        </div>
      </WebGLShader>
    </>
  );
}
