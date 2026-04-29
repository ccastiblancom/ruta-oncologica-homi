// components/PortalNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, MapPin, MessageCircleHeart, Heart } from "lucide-react";

export default function PortalNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/portal/inicio", icon: Heart, label: "Inicio" },
    { href: "/portal/citas", icon: Calendar, label: "Citas" },
    { href: "/portal/plan", icon: MapPin, label: "Plan" },
    { href: "/portal/solicitudes", icon: MessageCircleHeart, label: "Ayuda" },
  ];

  return (
    <div className="w-full bg-white border-t border-gray-100 rounded-t-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] px-6 py-4 flex justify-between items-center z-50 shrink-0 pb-8">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link key={item.href} href={item.href} className={`flex flex-col items-center gap-1.5 transition-colors ${isActive ? 'text-teal-600' : 'text-gray-400 hover:text-gray-600'}`}>
            <div className={`${isActive ? 'bg-teal-50 p-1.5 rounded-xl' : ''}`}>
              <Icon size={24} />
            </div>
            <span className={`text-[10px] font-bold ${isActive ? 'text-teal-700' : ''}`}>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}