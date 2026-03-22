"use client";
import { cn } from "@/lib/utils";

interface LiquidGlassButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: "whatsapp" | "primary";
  size?: "default" | "lg" | "xl";
}

export function LiquidGlassButton({ children, className, href, variant = "primary", size = "lg" }: LiquidGlassButtonProps) {
  const Comp = href ? "a" : "button";
  const sizeClasses = {
    default: "h-10 px-5 text-sm",
    lg: "h-12 px-8 text-base",
    xl: "h-14 px-10 text-lg",
  };
  const variantClasses = {
    whatsapp: "bg-[#25D366]/90 text-white hover:bg-[#25D366] shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30",
    primary: "bg-gradient-to-r from-clinic-blue/90 to-steel-500/90 text-white shadow-lg shadow-clinic-blue/20 hover:shadow-xl hover:shadow-clinic-blue/30 hover:from-clinic-blue hover:to-steel-500",
  };

  return (
    <Comp
      href={href || undefined}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm border border-white/20",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent pointer-events-none" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Comp>
  );
}
