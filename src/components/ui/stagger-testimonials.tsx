"use client";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { AnimatedContent } from "@/components/ui/animated-content";

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  source: string;
}

interface StaggerTestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
}

export function StaggerTestimonials({ testimonials, className }: StaggerTestimonialsProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", className)}>
      {testimonials.map((t, i) => (
        <AnimatedContent
          key={i}
          animation={i % 3 === 0 ? "fade-up" : i % 3 === 1 ? "fade-left" : "fade-right"}
          delay={i * 150}
        >
          <div className="relative p-6 rounded-2xl bg-white/50 backdrop-blur-xl border border-white/25 hover:bg-white/70 hover:border-white/40 transition-all duration-400 hover:shadow-lg hover:shadow-clinic-blue/5 h-full flex flex-col">
            <div className="absolute top-4 right-4 text-4xl font-display text-clinic-blue/10 leading-none">&ldquo;</div>
            <div className="flex items-center gap-0.5 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-sm text-steel-600 leading-relaxed flex-1 mb-4">{t.text}</p>
            <div className="flex items-center justify-between pt-3 border-t border-steel-100/50">
              <span className="text-sm font-medium text-clinic-charcoal">{t.name}</span>
              <span className="text-xs text-steel-400 bg-steel-50 px-2 py-0.5 rounded-full">{t.source}</span>
            </div>
          </div>
        </AnimatedContent>
      ))}
    </div>
  );
}
