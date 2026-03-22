"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  staggerDelay = 30,
  as: Tag = "span",
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <Tag ref={ref as React.RefObject<HTMLElement & HTMLHeadingElement & HTMLParagraphElement>} className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <span
          key={i}
          className={cn(
            "inline-block transition-all duration-500 ease-out mr-[0.25em]",
            isVisible
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-4 blur-sm"
          )}
          style={{ transitionDelay: `${delay + i * staggerDelay}ms` }}
        >
          {word}
        </span>
      ))}
    </Tag>
  );
}
