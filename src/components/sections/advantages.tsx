"use client";

import { AnimatedContent } from "@/components/ui/animated-content";
import { FeatureSpotlight } from "@/components/ui/feature-spotlight";
import {
  Users,
  Moon,
  FileText,
  HeartPulse,
  Sparkles,
  MessageCircle,
} from "lucide-react";

const FEATURES = [
  {
    title: "Для взрослых и детей",
    description: "Лечение для всей семьи — от детского стоматолога до сложной имплантации",
    icon: <Users className="w-6 h-6 text-clinic-blue" />,
  },
  {
    title: "Севоран и лечение во сне",
    description: "Комфортное лечение без стресса — идеально для детей и при большом объёме работ",
    icon: <Moon className="w-6 h-6 text-clinic-blue" />,
  },
  {
    title: "Понятный прайс",
    description: "Прозрачные цены без скрытых доплат — вы знаете стоимость до начала лечения",
    icon: <FileText className="w-6 h-6 text-clinic-blue" />,
  },
  {
    title: "Бесплатная подготовка к Севорану",
    description: "Анализы, ЭКГ и план лечения — бесплатно при лечении во сне",
    icon: <HeartPulse className="w-6 h-6 text-clinic-blue" />,
  },
  {
    title: "Современные методы",
    description: "Импланты мирового уровня, цифровая диагностика и проверенные материалы",
    icon: <Sparkles className="w-6 h-6 text-clinic-blue" />,
  },
  {
    title: "Запись через WhatsApp",
    description: "Удобная запись без звонков — напишите нам и мы подберём удобное время",
    icon: <MessageCircle className="w-6 h-6 text-clinic-blue" />,
  },
];

export function AdvantagesSection() {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent animation="fade-up">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-clinic-charcoal mb-4">
              Почему выбирают ALL DENT
            </h2>
            <p className="text-steel-500 text-lg max-w-2xl mx-auto">
              Комплексная стоматология с прозрачным подходом
            </p>
          </div>
        </AnimatedContent>

        <AnimatedContent animation="fade-up" delay={200}>
          <FeatureSpotlight features={FEATURES} />
        </AnimatedContent>
      </div>
    </section>
  );
}
