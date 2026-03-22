"use client";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function InteractiveHoverButton({ children, className, href, onClick }: InteractiveHoverButtonProps) {
  const Comp = href ? "a" : "button";
  return (
    <Comp
      href={href}
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-clinic-blue/20 bg-white px-6 py-3 text-sm font-medium text-clinic-charcoal transition-all duration-300 hover:text-white hover:border-clinic-blue/40",
        className
      )}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-clinic-blue to-steel-500 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Comp>
  );
}
