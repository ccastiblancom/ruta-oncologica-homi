"use client";

import Link from 'next/link';
import { navigationMenu, UserRole } from '@/lib/config';
import { 
  Activity, 
  UserPlus, 
  ListTodo, 
  BellRing, 
  CheckSquare, 
  BarChart3, 
  Database, 
  Settings,
  HeartPulse 
} from 'lucide-react';

// Mapeo dinámico de iconos
const IconMap: Record<string, any> = {
  Activity, UserPlus, ListTodo, BellRing, CheckSquare, BarChart3, Database, Settings, HeartPulse
};

interface SidebarProps {
  currentRole: UserRole;
}

export default function Sidebar({ currentRole }: SidebarProps) {
  const allowedMenu = navigationMenu.filter(item => 
    item.allowedRoles.includes(currentRole)
  );

  return (
    <aside className="w-64 h-screen bg-blue-900 text-white flex flex-col shadow-xl z-20 overflow-hidden">
      
      {/* Encabezado con el Logo Original: Transparente, sin filtros y tamaño reducido */}
      <div className="h-20 flex justify-center items-center shrink-0 border-b border-white/10 mt-3">
        <img 
          src="/logo-homi.png" 
          alt="Fundación HOMI" 
          className="h-9 w-auto object-contain" 
        />
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-6 overflow-y-auto">
        {allowedMenu.map((item) => {
          const Icon = IconMap[item.icon];
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              {Icon && <Icon size={20} className="text-blue-300" />}
              <span className="text-sm font-medium tracking-wide text-blue-50">{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5 bg-blue-950/40">
        <div className="text-sm font-bold text-white">{currentRole}</div>
        <div className="text-xs text-blue-300 mt-0.5">Sesión iniciada</div>
      </div>
    </aside>
  );
}