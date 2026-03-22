"use client";

import { CLINIC } from "@/data/clinic";
import { AnimatedContent } from "@/components/ui/animated-content";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { WebGLShader } from "@/components/ui/webgl-shader";
import { ShinyText } from "@/components/ui/shiny-text";
import { MessageCircle, Phone } from "lucide-react";

export function FinalCta() {
  return (
    <WebGLShader className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedContent animation="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
            <ShinyText speed={5} className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
              Запишитесь на консультацию
            </ShinyText>
          </h2>
          <p className="text-lg text-white/60 mb-4 max-w-xl mx-auto">
            ALL DENT — современная стоматология в Астане
          </p>
          <p className="text-sm text-white/40 mb-10 max-w-lg mx-auto">
            Севоран, имплантация, брекеты, понятный прайс и современный подход
          </p>
        </AnimatedContent>

        <AnimatedContent delay={200} animation="scale">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LiquidGlassButton
              href={CLINIC.whatsapp}
              variant="whatsapp"
              size="xl"
            >
              <MessageCircle className="w-5 h-5" />
              Записаться в WhatsApp
            </LiquidGlassButton>
            <LiquidGlassButton
              href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
              variant="primary"
              size="xl"
            >
              <Phone className="w-5 h-5" />
              {CLINIC.phone}
            </LiquidGlassButton>
          </div>
        </AnimatedContent>
      </div>
    </WebGLShader>
  );
}
