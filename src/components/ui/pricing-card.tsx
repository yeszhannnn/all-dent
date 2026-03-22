"use client";
import { cn } from "@/lib/utils";

interface PricingItem {
  name: string;
  price: string;
}

interface PricingCardProps {
  title: string;
  description?: string;
  items: PricingItem[];
  featured?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
  badge?: string;
}

export function PricingCard({ title, description, items, featured, ctaLabel, ctaHref, className, badge }: PricingCardProps) {
  return (
    <div className={cn(
      "relative rounded-2xl overflow-hidden transition-all duration-300",
      featured
        ? "bg-gradient-to-br from-clinic-charcoal to-steel-800 text-white ring-2 ring-clinic-blue/30"
        : "bg-white/70 backdrop-blur-sm border border-white/50 hover:border-clinic-blue/10 hover:premium-shadow-hover",
      className
    )}>
      {badge && (
        <div className="absolute top-0 right-0 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-clinic-blue text-white rounded-bl-xl">{badge}</div>
      )}
      <div className="p-6 lg:p-8">
        <h3 className={cn("text-xl font-bold mb-1", featured ? "text-white" : "text-clinic-charcoal")}>{title}</h3>
        {description && <p className={cn("text-sm mb-6", featured ? "text-white/60" : "text-steel-500")}>{description}</p>}
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className={cn("flex items-start justify-between gap-3 text-sm", featured ? "text-white/80" : "text-steel-600")}>
              <span className="leading-snug">{item.name}</span>
              <span className={cn("font-semibold whitespace-nowrap", featured ? "text-clinic-blue-light" : "text-clinic-blue")}>{item.price}</span>
            </div>
          ))}
        </div>
        {ctaLabel && ctaHref && (
          <a
            href={ctaHref}
            target={ctaHref.startsWith("http") ? "_blank" : undefined}
            rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
            className={cn(
              "mt-6 inline-flex items-center justify-center w-full gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300",
              featured
                ? "bg-white text-clinic-charcoal hover:bg-white/90"
                : "bg-gradient-to-r from-clinic-blue to-steel-500 text-white hover:from-clinic-blue-light hover:to-steel-400"
            )}
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </div>
  );
}
