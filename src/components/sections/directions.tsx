"use client";

import Link from "next/link";
import { DIRECTIONS } from "@/data/clinic";
import { AnimatedContent } from "@/components/ui/animated-content";
import { DisplayCard } from "@/components/ui/display-card";
import { GlareHover } from "@/components/ui/glare-hover";
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

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope,
  Shield,
  Scissors,
  Wrench,
  AlignCenter,
  Crown,
  Baby,
  Cloud,
};

const GRADIENTS = [
  "from-clinic-blue/10 to-steel-50",
  "from-steel-100/60 to-clinic-pearl",
  "from-clinic-blue/5 to-steel-100/40",
  "from-steel-50 to-clinic-blue/8",
  "from-clinic-pearl to-steel-100/50",
  "from-clinic-blue/8 to-clinic-pearl",
  "from-steel-100/40 to-clinic-blue/5",
  "from-clinic-blue/10 to-steel-50",
];

export function DirectionsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-transparent via-clinic-pearl/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent animation="fade-up">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-clinic-charcoal mb-4">
              Направления клиники
            </h2>
            <p className="text-steel-500 text-lg max-w-2xl mx-auto">
              Полный спектр стоматологических услуг для всей семьи
            </p>
          </div>
        </AnimatedContent>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {DIRECTIONS.map((dir, i) => {
            const Icon = ICON_MAP[dir.icon];
            return (
              <AnimatedContent key={i} delay={i * 80} animation="scale">
                <Link href="/services" className="block">
                  <GlareHover className="rounded-2xl h-full">
                    <DisplayCard
                      title={dir.title}
                      description={dir.description}
                      icon={Icon ? <Icon className="w-7 h-7 text-clinic-blue" /> : undefined}
                      gradient={GRADIENTS[i]}
                      className="h-full text-center"
                    />
                  </GlareHover>
                </Link>
              </AnimatedContent>
            );
          })}
        </div>
      </div>
    </section>
  );
}
