"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimationType = "fade-up" | "fade-left" | "fade-right" | "scale" | "blur";

interface AnimatedContentProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
}

const animations: Record<AnimationType, { initial: string; animate: string }> = {
  "fade-up": { initial: "opacity-0 translate-y-8", animate: "opacity-100 translate-y-0" },
  "fade-left": { initial: "opacity-0 -translate-x-8", animate: "opacity-100 translate-x-0" },
  "fade-right": { initial: "opacity-0 translate-x-8", animate: "opacity-100 translate-x-0" },
  "scale": { initial: "opacity-0 scale-95", animate: "opacity-100 scale-100" },
  "blur": { initial: "opacity-0 blur-sm", animate: "opacity-100 blur-0" },
};

export function AnimatedContent({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 700,
}: AnimatedContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const { initial, animate } = animations[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isVisible ? animate : initial,
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}
