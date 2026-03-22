"use client";

import { useState, useEffect } from "react";
import { CLINIC } from "@/data/clinic";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={CLINIC.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-105 active:scale-95",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none",
        "px-5 py-3.5 sm:px-6 sm:py-4"
      )}
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      <span className="text-sm sm:text-base font-medium hidden sm:inline">
        Записаться
      </span>
    </a>
  );
}
