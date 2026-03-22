"use client";
import { cn } from "@/lib/utils";

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
  shimmerWidth?: number;
  speed?: number;
}

export function ShinyText({ children, className, shimmerWidth = 100, speed = 3 }: ShinyTextProps) {
  return (
    <span
      className={cn("inline-block bg-clip-text text-transparent bg-[length:250%_100%] animate-[shiny-text_var(--speed)_linear_infinite]", className)}
      style={{
        backgroundImage: `linear-gradient(90deg, hsl(var(--foreground)) 0%, hsl(210, 40%, 65%) 25%, hsl(var(--foreground)) 50%, hsl(210, 40%, 65%) 75%, hsl(var(--foreground)) 100%)`,
        "--speed": `${speed}s`,
      } as React.CSSProperties}
    >
      {children}
    </span>
  );
}
