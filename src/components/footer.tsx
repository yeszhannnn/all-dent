import Link from "next/link";
import { CLINIC } from "@/data/clinic";
import { MessageCircle, Phone, Mail, MapPin, Instagram, Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-clinic-charcoal text-white/80 overflow-hidden">
      {/* Subtle animated gradient orbs in footer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-clinic-blue/[0.06] blur-[100px] -top-[200px] -right-[100px] animate-[webgl-float-1_20s_ease-in-out_infinite]" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-steel-600/[0.04] blur-[80px] -bottom-[100px] -left-[50px] animate-[webgl-float-2_25s_ease-in-out_infinite]" />
      </div>
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(91,141,184,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(91,141,184,0.4) 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-clinic-blue to-steel-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AD</span>
              </div>
              <span className="font-bold text-lg text-white">ALL DENT</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Современная стоматология в Астане. Имплантация, брекеты, лечение
              во сне, понятные цены и комфортный подход.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Навигация</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-white/60 hover:text-clinic-blue-light transition-colors">Главная</Link>
              <Link href="/services" className="text-sm text-white/60 hover:text-clinic-blue-light transition-colors">Услуги и цены</Link>
              <Link href="/sevoran" className="text-sm text-white/60 hover:text-clinic-blue-light transition-colors">Севоран и FAQ</Link>
              <Link href="/sevoran#contacts" className="text-sm text-white/60 hover:text-clinic-blue-light transition-colors">Контакты</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Контакты</h4>
            <div className="flex flex-col gap-3">
              <a href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/60 hover:text-[#25D366] transition-colors">
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                WhatsApp
              </a>
              <a href={`tel:${CLINIC.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm text-white/60 hover:text-clinic-blue-light transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                {CLINIC.phone}
              </a>
              <a href={`mailto:${CLINIC.email}`} className="flex items-center gap-2 text-sm text-white/60 hover:text-clinic-blue-light transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                {CLINIC.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                {CLINIC.address}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Мы в сети</h4>
            <div className="flex flex-col gap-3">
              <a href={CLINIC.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/60 hover:text-pink-400 transition-colors">
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
              <a href={CLINIC.twoGis} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/60 hover:text-green-400 transition-colors">
                <Star className="w-4 h-4" />
                2GIS — 5.0 рейтинг
              </a>
            </div>
            {/* NOTE: Work hours may change on holidays */}
            <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/5">
              <p className="text-xs text-white/40 mb-1">График работы</p>
              <p className="text-sm text-white/70">{CLINIC.workHours}</p>
              <p className="text-xs text-white/40 mt-1">{CLINIC.workHoursNote}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} ALL DENT. Все права защищены.
          </p>
          <p className="text-xs text-white/30">
            Информация на сайте не является публичной офертой. Уточняйте актуальные цены и условия у администратора.
          </p>
        </div>
      </div>
    </footer>
  );
}
