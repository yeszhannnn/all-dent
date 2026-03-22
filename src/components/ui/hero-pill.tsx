"use client";
import { cn } from "@/lib/utils";

interface HeroPillProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export function HeroPill({ children, className, icon }: HeroPillProps) {
  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-clinic-blue/20 bg-white/60 backdrop-blur-xl text-sm font-medium text-clinic-charcoal shadow-sm hover:shadow-md hover:border-clinic-blue/30 transition-all duration-300 cursor-default",
      className
    )}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="relative overflow-hidden">
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-clinic-blue/10 to-transparent animate-[shimmer_3s_linear_infinite] bg-[length:200%_100%]" />
      </span>
    </div>
  );
}
