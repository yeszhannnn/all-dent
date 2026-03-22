"use client";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
}

export function Marquee({ children, className, speed = 40, pauseOnHover = true, direction = "left" }: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]", className)}>
      <div
        className={cn(
          "flex w-max gap-6",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
