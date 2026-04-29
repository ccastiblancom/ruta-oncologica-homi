// app/portal/plan/page.tsx
"use client";

import { CheckCircle2, Circle, Map as MapIcon, Info, ChevronRight, Heart, Phone } from "lucide-react";

const fasesTratamiento = [
  {
    id: 1,
    titulo: "Fase 1: Inducción",
    descripcion: "El objetivo inicial es limpiar la sangre de células malignas.",
    estado: "completada",
    duracion: "4 semanas",
    detalles: "Se completó con éxito el primer ciclo de quimioterapia."
  },
  {
    id: 2,
    titulo: "Fase 2: Consolidación",
    descripcion: "Reforzamos el tratamiento para asegurar que no queden células ocultas.",
    estado: "actual",
    duracion: "8 semanas",
    detalles: "Estamos en la semana 3 de esta etapa. Sofía ha mostrado mucha fuerza."
  },
  {
    id: 3,
    titulo: "Fase 3: Mantenimiento",
    descripcion: "Etapa de cuidado preventivo para evitar que la enfermedad regrese.",
    estado: "pendiente",
    duracion: "12 meses",
    detalles: "Esta será una etapa más tranquila con controles periódicos."
  },
  {
    id: 4,
    titulo: "Fase 4: Seguimiento",
    descripcion: "Revisiones periódicas para asegurar una salud plena.",
    estado: "pendiente",
    duracion: "Vida saludable",
    detalles: "El objetivo final de nuestro camino juntos."
  }
];

export default function PlanTratamiento() {
  return (
    // Estructura limpia que delega el scroll y el menú al Layout global
    <div className="pb-10 font-sans">
      
      {/* CABECERA PROFESIONAL HOMI */}
      <div className="bg-white px-6 pt-10 pb-10 rounded-b-[2.5rem] shadow-sm border-b border-gray-200 relative z-20">
        
        {/* Logo y Botón de Ayuda */}
        <div className="flex justify-between items-center mb-8">
          <img 
            src="/logo-homi.png" 
            alt="Fundación HOMI" 
            className="h-9 w-auto object-contain" 
          />
          <button className="text-xs bg-teal-50 text-teal-700 px-4 py-2 rounded-full flex items-center gap-2 font-bold border border-teal-100 hover:bg-teal-100 transition-colors">
            <Phone size={14} /> Ayuda
          </button>
        </div>

        {/* Título en color institucional */}
        <h1 className="text-3xl font-black text-[#1e3a8a] flex items-center gap-3 mb-1">
          <MapIcon size={28} className="text-[#1e3a8a]" />
          Nuestro Camino
        </h1>
        <p className="text-gray-500 text-sm font-medium">
          Entiende cada etapa del tratamiento de Sofía.
        </p>
      </div>

      {/* CONTENIDO PRINCIPAL: LÍNEA DE TIEMPO */}
      <div className="px-6 -mt-4 space-y-4 relative z-10">
        
        {/* Resumen de Progreso */}
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between mt-8">
          <div className="flex items-center gap-3">
            <div className="bg-teal-100 text-teal-600 p-2 rounded-full font-bold text-sm">
              2/4
            </div>
            <span className="text-sm font-bold text-gray-700">Etapas alcanzadas</span>
          </div>
          <span className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wide">
            A buen ritmo
          </span>
        </div>

        {/* Lista de Fases */}
        <div className="space-y-0 relative mt-4">
          {/* Línea vertical de fondo */}
          <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gray-200 z-0"></div>

          {fasesTratamiento.map((fase) => (
            <div key={fase.id} className="relative z-10 flex gap-5 mb-8">
              
              {/* Indicador de estado (Círculo) */}
              <div className="mt-1">
                {fase.estado === "completada" ? (
                  <div className="bg-white rounded-full">
                    <CheckCircle2 size={40} className="text-teal-500 fill-teal-50" />
                  </div>
                ) : fase.estado === "actual" ? (
                  <div className="bg-white rounded-full ring-4 ring-teal-100">
                    <Circle size={40} className="text-teal-500 fill-teal-50 animate-pulse" />
                  </div>
                ) : (
                  <div className="bg-white rounded-full">
                    <Circle size={40} className="text-gray-300 fill-gray-50" />
                  </div>
                )}
              </div>

              {/* Tarjeta de información */}
              <div className={`flex-1 p-5 rounded-3xl border transition-all ${
                fase.estado === "actual" 
                  ? "bg-white shadow-md border-teal-200" 
                  : "bg-gray-50/50 border-transparent opacity-80"
              }`}>
                <div className="flex justify-between items-start mb-1">
                  <h3 className={`font-bold ${fase.estado === "actual" ? "text-[#1e3a8a]" : "text-gray-700"}`}>
                    {fase.titulo}
                  </h3>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest shrink-0 ml-2">
                    {fase.duracion}
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">
                  {fase.descripcion}
                </p>

                {fase.estado === "actual" && (
                  <div className="mt-3 pt-3 border-t border-teal-50 space-y-3">
                    <div className="flex items-start gap-2 bg-teal-50/50 p-3 rounded-xl">
                      <Info size={14} className="text-teal-600 mt-0.5 shrink-0" />
                      <p className="text-[11px] text-teal-800 italic leading-snug">
                        "{fase.detalles}"
                      </p>
                    </div>
                    <button className="w-full bg-teal-600 text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1 hover:bg-teal-700 transition-colors">
                      Ver cuidados específicos <ChevronRight size={14} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Nota Final */}
        <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 flex items-center gap-3">
          <Heart size={20} className="text-blue-500 fill-blue-500 shrink-0" />
          <p className="text-[11px] text-blue-800 font-medium leading-tight">
            Recuerda que cada valiente tiene su propio ritmo. Este plan es una guía adaptada especialmente para el paciente.
          </p>
        </div>

      </div>
    </div>
  );
}