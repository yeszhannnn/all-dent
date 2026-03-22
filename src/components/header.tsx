"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ClinicLogo } from "@/components/clinic-logo";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { CLINIC } from "@/data/clinic";
import { Menu, MessageCircle, Phone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Главная", href: "/" },
  { label: "Услуги и цены", href: "/services" },
  { label: "Севоран и FAQ", href: "/sevoran" },
  { label: "Контакты", href: "/sevoran#contacts" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/80 backdrop-blur-2xl border-b border-white/20 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-clinic-blue/30 focus-visible:ring-offset-2 rounded-full"
          >
            <div className="relative h-10 w-10 shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
              <ClinicLogo priority alt="ALL DENT — стоматология" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-clinic-graphite">
              ALL DENT
            </span>
          </Link>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-steel-700 hover:text-clinic-blue rounded-lg hover:bg-clinic-blue/5 transition-all duration-200 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-clinic-blue rounded-full group-hover:w-1/2 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-steel-700 hover:text-clinic-blue transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">{CLINIC.phone}</span>
            </a>

            {/* Dialog - Consultation Modal */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden lg:inline-flex text-clinic-blue">
                  <Calendar className="w-4 h-4" />
                  Консультация
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-xl font-display">Запись на консультацию</DialogTitle>
                  <DialogDescription>
                    Напишите нам в WhatsApp — мы подберём удобное время и ответим на все вопросы
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div className="p-4 rounded-xl bg-clinic-pearl border border-steel-100">
                    <p className="text-sm text-steel-600 mb-1">Что входит в консультацию:</p>
                    <ul className="text-sm text-steel-500 space-y-1">
                      <li>• Осмотр и диагностика</li>
                      <li>• Составление плана лечения</li>
                      <li>• Ответы на все вопросы о ценах и сроках</li>
                    </ul>
                  </div>
                  <LiquidGlassButton
                    href={CLINIC.whatsapp}
                    variant="whatsapp"
                    size="xl"
                    className="w-full"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Написать в WhatsApp
                  </LiquidGlassButton>
                  <a
                    href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-2 text-sm text-steel-500 hover:text-clinic-blue transition-colors py-2"
                  >
                    <Phone className="w-4 h-4" />
                    или позвонить: {CLINIC.phone}
                  </a>
                </div>
              </DialogContent>
            </Dialog>

            <div className="hidden sm:block">
              <LiquidGlassButton href={CLINIC.whatsapp} variant="whatsapp" size="default">
                <MessageCircle className="w-4 h-4" />
                <span className="hidden md:inline">Записаться</span>
              </LiquidGlassButton>
            </div>

            {/* Sheet - Mobile Navigation */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetTitle className="text-left font-bold text-lg flex items-center gap-2.5">
                  <span className="relative block h-9 w-9 shrink-0">
                    <ClinicLogo alt="" sizes="36px" />
                  </span>
                  ALL DENT
                </SheetTitle>
                <nav className="flex flex-col gap-1 mt-8">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-3 text-base font-medium text-steel-700 hover:text-clinic-blue rounded-lg hover:bg-clinic-blue/5 transition-all"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8 flex flex-col gap-3">
                  <LiquidGlassButton
                    href={CLINIC.whatsapp}
                    variant="whatsapp"
                    size="xl"
                    className="w-full"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Записаться в WhatsApp
                  </LiquidGlassButton>
                  <a
                    href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-2 text-sm text-steel-600 hover:text-clinic-blue transition-colors py-2"
                  >
                    <Phone className="w-4 h-4" />
                    {CLINIC.phone}
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
