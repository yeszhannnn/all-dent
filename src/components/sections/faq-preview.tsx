"use client";

import Link from "next/link";
import { FAQ_DATA } from "@/data/faq";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { AnimatedContent } from "@/components/ui/animated-content";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { LiquidGlassCard } from "@/components/ui/liquid-glass-card";
import { ArrowRight } from "lucide-react";

export function FaqPreview() {
  const previewFaq = FAQ_DATA.slice(0, 6);

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent animation="fade-up">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-clinic-charcoal mb-4">
              Частые вопросы
            </h2>
            <p className="text-steel-500 text-lg">
              Ответы на самые популярные вопросы о клинике
            </p>
          </div>
        </AnimatedContent>

        <AnimatedContent delay={100} animation="fade-up">
          <LiquidGlassCard className="p-6 lg:p-8">
            <Accordion type="single" collapsible className="w-full">
              {previewFaq.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
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

        <AnimatedContent delay={200} animation="fade-up">
          <div className="text-center mt-8">
            <InteractiveHoverButton href="/sevoran#faq">
              Все вопросы и ответы
              <ArrowRight className="w-4 h-4" />
            </InteractiveHoverButton>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
