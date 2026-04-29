// app/portal/educacion/page.tsx
"use client";

import { useState } from "react";
import { BookOpen, PlayCircle, FileText, Heart, Search, ChevronRight, Phone } from "lucide-react";
import Link from "next/link";

const categorias = ["Todos", "Cuidados", "Nutrición", "Derechos", "Apoyo"];

const materiales = [
  {
    id: 1,
    titulo: "Manejo de la fiebre en casa",
    tipo: "Guía",
    categoria: "Cuidados",
    duracion: "4 min lectura",
    imagen: "bg-red-50",
    icono: FileText,
    color: "text-red-600"
  },
  {
    id: 2,
    titulo: "¿Cómo explicar el diagnóstico a los hermanos?",
    tipo: "Video",
    categoria: "Apoyo",
    duracion: "6 min video",
    imagen: "bg-purple-50",
    icono: PlayCircle,
    color: "text-purple-600"
  },
  {
    id: 3,
    titulo: "Alimentación durante la quimioterapia",
    tipo: "Guía",
    categoria: "Nutrición",
    duracion: "5 min lectura",
    imagen: "bg-green-50",
    icono: FileText,
    color: "text-green-600"
  },
  {
    id: 4,
    titulo: "Tus derechos como paciente en Colombia",
    tipo: "Info",
    categoria: "Derechos",
    duracion: "3 min lectura",
    imagen: "bg-blue-50",
    icono: BookOpen,
    color: "text-blue-600"
  }
];

export default function PortalEducacion() {
  const [filtro, setFiltro] = useState("Todos");

  const materialesFiltrados = filtro === "Todos" 
    ? materiales 
    : materiales.filter(m => m.categoria === filtro);

  return (
    <div className="pb-10 font-sans">
      
      {/* CABECERA PROFESIONAL HOMI */}
      <div className="bg-white px-6 pt-10 pb-10 rounded-b-[2.5rem] shadow-sm border-b border-gray-200 relative z-20">
        
        {/* Logo y Botón de Ayuda */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="/logo-homi.png" 
              alt="Fundación HOMI" 
              className="h-9 w-auto object-contain cursor-pointer" 
            />
          </Link>
          <button className="text-xs bg-teal-50 text-teal-700 px-4 py-2 rounded-full flex items-center gap-2 font-bold border border-teal-100 hover:bg-teal-100 transition-colors shrink-0">
            <Phone size={14} /> Ayuda
          </button>
        </div>

        {/* Título en color institucional */}
        <h1 className="text-3xl font-black text-[#1e3a8a] flex items-center gap-3 mb-1">
          <BookOpen size={28} className="text-[#1e3a8a]" />
          Aprendamos
        </h1>
        <p className="text-gray-500 text-sm font-medium">
          Recursos para cuidar mejor de Sofía y de ti.
        </p>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="px-5 -mt-4 space-y-6 relative z-10">
        
        {/* Barra de Búsqueda */}
        <div className="relative shadow-sm mt-8">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="¿Qué quieres aprender hoy?" 
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-gray-100 focus:ring-2 focus:ring-teal-500 outline-none text-sm text-gray-700 shadow-sm"
          />
        </div>

        {/* Filtros de Categoría */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                filtro === cat 
                  ? "bg-teal-600 text-white shadow-md" 
                  : "bg-white text-gray-500 border border-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Lista de Materiales */}
        <div className="grid grid-cols-1 gap-4">
          {materialesFiltrados.map((item) => {
            const Icono = item.icono;
            return (
              <div key={item.id} className="bg-white rounded-3xl p-4 shadow-sm border border-gray-50 flex items-center gap-4 hover:shadow-md transition-all active:scale-95 cursor-pointer">
                <div className={`w-16 h-16 rounded-2xl ${item.imagen} flex items-center justify-center shrink-0`}>
                  <Icono size={28} className={item.color} />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      {item.tipo} • {item.categoria}
                    </span>
                    <Heart size={16} className="text-gray-300 hover:text-red-400" />
                  </div>
                  <h3 className="font-bold text-[#1e3a8a] text-sm leading-tight mt-0.5">
                    {item.titulo}
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-1">
                    {item.duracion}
                  </p>
                </div>
                
                <ChevronRight size={20} className="text-gray-300" />
              </div>
            );
          })}
        </div>

        {/* Sección de Video Destacado */}
        <div className="bg-teal-900 rounded-[2rem] p-6 text-white relative overflow-hidden mb-8 shadow-lg">
          <div className="relative z-10">
            <span className="text-[10px] font-bold bg-teal-500/30 px-2 py-1 rounded-md uppercase tracking-wider border border-teal-400/30">
              Destacado
            </span>
            <h3 className="text-lg font-bold mt-2">Historia de Valentía</h3>
            <p className="text-xs text-teal-100/70 mt-1 mb-4 leading-snug">
              Conoce a otros padres que han recorrido este camino.
            </p>
            <button className="bg-white text-teal-900 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-teal-50 transition-colors">
              <PlayCircle size={16} /> Ver ahora
            </button>
          </div>
          <PlayCircle size={100} className="absolute -right-5 -bottom-5 text-white/10" />
        </div>

      </div>
    </div>
  );
}