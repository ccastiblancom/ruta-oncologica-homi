// app/portal/solicitudes/page.tsx
"use client";

import { useState } from "react";
import { MessageCircleHeart, Send, Clock, CheckCircle2, Car, Pill, CalendarX, HeartHandshake, Phone } from "lucide-react";
import Link from "next/link";

const tiposAyuda = [
  { id: "transporte", nombre: "Transporte", icono: Car, color: "bg-blue-100 text-blue-700" },
  { id: "medicamentos", nombre: "Medicamentos", icono: Pill, color: "bg-purple-100 text-purple-700" },
  { id: "citas", nombre: "Problema con Cita", icono: CalendarX, color: "bg-red-100 text-red-700" },
  { id: "apoyo", nombre: "Apoyo Emocional", icono: HeartHandshake, color: "bg-orange-100 text-orange-700" },
];

export default function PortalSolicitudes() {
  const [enviado, setEnviado] = useState(false);
  const [seleccionado, setSeleccionado] = useState("");

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  // Pantalla de Éxito
  if (enviado) {
    return (
      <div className="bg-white min-h-screen flex flex-col items-center justify-center p-8 text-center font-sans pb-24">
        <div className="bg-teal-100 p-6 rounded-full mb-6">
          <CheckCircle2 size={60} className="text-teal-600" />
        </div>
        <h2 className="text-2xl font-bold text-[#1e3a8a] mb-2">¡Solicitud Recibida!</h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Tu mensaje ya fue enviado al equipo de Navegación de Homi. Estaremos en contacto contigo muy pronto.
        </p>
        <button 
          onClick={() => setEnviado(false)}
          className="w-full bg-teal-600 text-white font-bold py-4 rounded-2xl shadow-lg transition-transform active:scale-95"
        >
          Entendido
        </button>
      </div>
    );
  }

  return (
    <div className="pb-10 font-sans">
      
      {/* CABECERA PROFESIONAL HOMI */}
      <div className="bg-white px-6 pt-10 pb-10 rounded-b-[2.5rem] shadow-sm border-b border-gray-200 relative z-20">
        
        {/* Logo y Botón de Urgencia */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="/logo-homi.png" 
              alt="Fundación HOMI" 
              className="h-9 w-auto object-contain cursor-pointer" 
            />
          </Link>
          <button className="text-xs bg-red-50 text-red-700 px-4 py-2 rounded-full flex items-center gap-2 font-bold border border-red-100 hover:bg-red-100 transition-colors shrink-0">
            <Phone size={14} /> Urgencia
          </button>
        </div>

        {/* Título en color institucional */}
        <h1 className="text-3xl font-black text-[#1e3a8a] flex items-center gap-3 mb-1">
          <MessageCircleHeart size={28} className="text-[#1e3a8a]" />
          ¿Cómo te ayudamos?
        </h1>
        <p className="text-gray-500 text-sm font-medium">
          Cuéntanos si tienes alguna dificultad hoy.
        </p>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="px-5 -mt-4 space-y-6 relative z-10">
        
        {/* Selector de Tipo de Ayuda */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mt-8">
          <p className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wider text-center">¿Cuál es el motivo?</p>
          <div className="grid grid-cols-2 gap-3">
            {tiposAyuda.map((tipo) => {
              const Icono = tipo.icono;
              return (
                <button
                  key={tipo.id}
                  type="button"
                  onClick={() => setSeleccionado(tipo.id)}
                  className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${
                    seleccionado === tipo.id 
                    ? "border-teal-500 bg-teal-50" 
                    : "border-gray-50 bg-gray-50 text-gray-500"
                  }`}
                >
                  <div className={`p-2 rounded-xl ${seleccionado === tipo.id ? "bg-white" : tipo.color}`}>
                    <Icono size={24} />
                  </div>
                  <span className="text-xs font-bold">{tipo.nombre}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Formulario de Detalle */}
        <form onSubmit={manejarEnvio} className="space-y-4">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <label className="text-sm font-bold text-gray-700 block mb-2">Cuéntanos más detalles</label>
            <textarea 
              rows={4} 
              required
              placeholder="Ej: No tengo transporte para la cita de mañana o la farmacia no tiene el medicamento..."
              className="w-full p-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-teal-500 outline-none text-sm text-gray-700"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-[2rem] shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95"
          >
            <Send size={18} /> Enviar Solicitud
          </button>
        </form>

        {/* Historial Reciente de Solicitudes */}
        <div className="space-y-3 pb-8">
          <h3 className="text-sm font-bold text-gray-500 ml-2">Tus solicitudes recientes</h3>
          <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
                <Car size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800 leading-none">Apoyo transporte</p>
                <p className="text-[10px] text-gray-400 mt-1">Enviada hace 2 días</p>
              </div>
            </div>
            <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
              <Clock size={12} /> Gestionando
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}