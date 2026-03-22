"use client";
import { cn } from "@/lib/utils";

interface DisplayCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  gradient?: string;
}

export function DisplayCard({ title, description, icon, className, gradient = "from-clinic-blue/10 to-steel-50" }: DisplayCardProps) {
  return (
    <div className={cn("group relative p-6 lg:p-8 rounded-2xl overflow-hidden transition-all duration-500 hover:premium-shadow-hover", className)}>
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-80 transition-opacity duration-500 group-hover:opacity-100", gradient)} />
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
      <div className="relative">
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-clinic-charcoal mb-2">{title}</h3>
        <p className="text-sm text-steel-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
