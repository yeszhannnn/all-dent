"use client";
import { cn } from "@/lib/utils";

interface StarBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export function StarBorder({ children, className, color = "hsl(210, 40%, 65%)" }: StarBorderProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        className="absolute -inset-[1px] rounded-[inherit] overflow-hidden"
        style={{ padding: "1px" }}
      >
        <div
          className="absolute inset-0 animate-[star-border-spin_4s_linear_infinite]"
          style={{
            background: `conic-gradient(from 0deg, transparent 0%, ${color} 10%, transparent 20%, transparent 80%, ${color} 90%, transparent 100%)`,
          }}
        />
      </div>
      <div className="relative bg-white rounded-[inherit]">{children}</div>
    </div>
  );
}
