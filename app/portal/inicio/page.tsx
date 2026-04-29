// app/portal/inicio/page.tsx
"use client";

import { Clock, MapPin, MessageCircleHeart, BookOpen, ChevronRight, Phone } from "lucide-react";
import Link from "next/link";

export default function PortalFamiliarInicio() {
  return (
    // Estructura limpia: el LayoutWrapper se encarga del scroll y el PortalNav del menú inferior
    <div className="pb-10 font-sans">
      
      {/* CABECERA PROFESIONAL HOMI */}
      <div className="bg-white px-6 pt-10 pb-10 rounded-b-[2.5rem] shadow-sm border-b border-gray-200 relative z-20">
        <div className="flex justify-between items-center mb-8">
          {/* LOGO ENLAZADO A LA RAÍZ */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="/logo-homi.png" 
              alt="Fundación HOMI" 
              className="h-9 w-auto object-contain cursor-pointer" 
            />
          </Link>
          <button className="text-xs bg-teal-50 text-teal-700 px-4 py-2 rounded-full flex items-center gap-2 font-bold border border-teal-100 hover:bg-teal-100 transition-colors">
            <Phone size={14} /> Ayuda
          </button>
        </div>
        <p className="text-gray-500 text-sm font-bold tracking-wide uppercase mb-1">¡Hola, familia de!</p>
        <h1 className="text-3xl font-black text-[#1e3a8a]">Sofía Martínez</h1>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="px-5 -mt-4 space-y-6 relative z-10">
        
        {/* TARJETA 1: ETAPA ACTUAL */}
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 mt-8">
          <div className="flex justify-between items-start mb-3">
            <h2 className="text-gray-800 font-bold text-lg">Nuestra etapa actual</h2>
            <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Fase 2
            </span>
          </div>
          <p className="text-teal-600 font-bold text-xl mb-1">Quimioterapia de Consolidación</p>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            Sofía está respondiendo muy bien. El objetivo de esta etapa es eliminar cualquier célula que haya quedado oculta.
          </p>
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium text-gray-400">
              <span>Inicio</span>
              <span>¡Falta poco!</span>
            </div>
            <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-teal-500 rounded-full w-[65%]"></div>
            </div>
          </div>
        </div>

        {/* TARJETA 2: PRÓXIMA CITA */}
        <div className="bg-blue-50/50 p-5 rounded-3xl border border-blue-100 backdrop-blur-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#1e3a8a] font-bold text-lg">Próxima cita</h2>
            <Link href="/portal/citas" className="text-blue-600 text-sm font-bold flex items-center hover:text-blue-800 transition-colors">
              Ver todas <ChevronRight size={16} />
            </Link>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm flex items-start gap-4">
            <div className="bg-blue-100 text-blue-700 p-3 rounded-xl flex flex-col items-center justify-center min-w-[60px]">
              <span className="text-xs font-bold uppercase">Nov</span>
              <span className="text-xl font-black">15</span>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-gray-800">Consulta de Hemato-Oncología</h3>
              <p className="text-xs text-gray-500 flex items-center gap-1.5">
                <Clock size={14} className="text-blue-400 shrink-0" /> 09:30 AM (Llegar 15 min antes)
              </p>
              <p className="text-xs text-gray-500 flex items-start gap-1.5">
                <MapPin size={14} className="text-blue-400 shrink-0 mt-0.5" /> Consultorio 402, Sede Principal
              </p>
            </div>
          </div>
        </div>

        {/* BOTONES RÁPIDOS */}
        <div className="grid grid-cols-2 gap-4 pb-8">
          <Link href="/portal/solicitudes" className="bg-orange-50 p-4 rounded-3xl border border-orange-100 flex flex-col items-center text-center gap-2 hover:bg-orange-100 transition-colors shadow-sm">
            <div className="bg-orange-200 p-3 rounded-full text-orange-700">
              <MessageCircleHeart size={24} />
            </div>
            <div>
              <p className="font-bold text-orange-900 text-sm">Necesito Ayuda</p>
              <p className="text-[10px] text-orange-700 mt-0.5">Reportar dificultad</p>
            </div>
          </Link>
          <Link href="/portal/educacion" className="bg-teal-50 p-4 rounded-3xl border border-teal-100 flex flex-col items-center text-center gap-2 hover:bg-teal-100 transition-colors shadow-sm">
            <div className="bg-teal-200 p-3 rounded-full text-teal-700">
              <BookOpen size={24} />
            </div>
            <div>
              <p className="font-bold text-teal-900 text-sm">Aprender</p>
              <p className="text-[10px] text-teal-700 mt-0.5">Cuidados en casa</p>
            </div>
          </Link>
        </div>
      </div>
      
    </div>
  );
}