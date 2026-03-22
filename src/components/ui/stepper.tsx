"use client";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/animated-section";

interface Step {
  title: string;
  description: string;
}

interface StepperProps {
  steps: Step[];
  className?: string;
}

export function Stepper({ steps, className }: StepperProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex flex-col md:flex-row gap-0">
        {steps.map((step, i) => (
          <AnimatedSection key={i} delay={i * 120} className="flex-1 relative">
            <div className="flex flex-col items-center text-center px-4">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-[calc(50%+20px)] right-[calc(-50%+20px)] h-[2px] bg-gradient-to-r from-clinic-blue/30 to-clinic-blue/10" />
              )}
              {/* Number circle */}
              <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-clinic-blue to-steel-500 flex items-center justify-center text-white font-bold text-sm mb-3 shadow-lg shadow-clinic-blue/20">
                {i + 1}
              </div>
              <h4 className="font-semibold text-clinic-charcoal text-sm mb-1">
                {step.title}
              </h4>
              <p className="text-xs text-steel-500 leading-relaxed max-w-[180px]">
                {step.description}
              </p>
            </div>
            {/* Mobile connector */}
            {i < steps.length - 1 && (
              <div className="md:hidden w-[2px] h-6 bg-gradient-to-b from-clinic-blue/30 to-clinic-blue/10 mx-auto" />
            )}
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
