"use client";

import { AnimatedContent } from "@/components/ui/animated-content";
import { Stepper } from "@/components/ui/stepper";

const STEPS = [
  {
    title: "Запись",
    description: "Напишите в WhatsApp — мы подберём удобное время для визита",
  },
  {
    title: "Консультация",
    description: "Осмотр, диагностика и составление понятного плана лечения",
  },
  {
    title: "Подготовка",
    description: "При необходимости — анализы, ЭКГ, 3D-снимок (при Севоране — бесплатно)",
  },
  {
    title: "Лечение",
    description: "Комфортное лечение с современными методами и материалами",
  },
  {
    title: "Результат",
    description: "Здоровые зубы, понятная стоимость и рекомендации по уходу",
  },
];

export function TreatmentSteps() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent animation="fade-up">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-clinic-charcoal mb-4">
              Как проходит лечение
            </h2>
            <p className="text-steel-500 text-lg max-w-2xl mx-auto">
              Простой и понятный процесс от записи до результата
            </p>
          </div>
        </AnimatedContent>

        <Stepper steps={STEPS} />
      </div>
    </section>
  );
}
