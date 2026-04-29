// app/portal/citas/page.tsx
"use client";

import { useState } from "react";
import { Calendar as CalendarIcon, MapPin, Clock, User, AlertCircle, Info, Stethoscope, Syringe, HeartHandshake, Phone } from "lucide-react";
import Link from "next/link";

const citasMock = [
  { id: 1, tipo: "Especialista", titulo: "Consulta de Hemato-Oncología", doctor: "Dra. Elena Vargas", fecha: "Mañana, 15 de Noviembre", hora: "09:30 AM", lugar: "Consultorio 402, Sede Principal", estado: "Confirmada", preparacion: "Llegar 15 minutos antes con los resultados del último cuadro hemático.", icono: Stethoscope, color: "bg-blue-100 text-blue-700", borde: "border-blue-200" },
  { id: 2, tipo: "Procedimiento", titulo: "Quimioterapia Intratecal", doctor: "Pabellón de Quimioterapia", fecha: "Viernes, 18 de Noviembre", hora: "07:00 AM", lugar: "Sala 2, Piso 3", estado: "Programada", preparacion: "Ayuno estricto de 8 horas. Traer ropa cómoda y manta personal.", icono: Syringe, color: "bg-purple-100 text-purple-700", borde: "border-purple-200" },
  { id: 3, tipo: "Psicosocial", titulo: "Acompañamiento Familiar", doctor: "Dra. Andrea Ruiz (Psicología)", fecha: "Martes, 22 de Noviembre", hora: "03:00 PM", lugar: "Oficina de Trabajo Social", estado: "Programada", preparacion: "Asistir solo los padres o acudientes principales.", icono: HeartHandshake, color: "bg-orange-100 text-orange-700", borde: "border-orange-200" }
];

export default function PortalMisCitas() {
  const [filtro, setFiltro] = useState<"Proximas" | "Historial">("Proximas");

  return (
    <div className="pb-10 font-sans">
      
      {/* CABECERA PROFESIONAL HOMI */}
      <div className="bg-white px-6 pt-10 pb-10 rounded-b-[2.5rem] shadow-sm border-b border-gray-200 relative z-20">
        <div className="flex justify-between items-center mb-8">
          <img src="/logo-homi.png" alt="Fundación HOMI" className="h-9 w-auto object-contain" />
          <button className="text-xs bg-teal-50 text-teal-700 px-4 py-2 rounded-full flex items-center gap-2 font-bold border border-teal-100 hover:bg-teal-100 transition-colors">
            <Phone size={14} /> Ayuda
          </button>
        </div>
        <h1 className="text-3xl font-black text-[#1e3a8a] flex items-center gap-3 mb-1">
          <CalendarIcon size={28} className="text-[#1e3a8a]" /> Nuestra Agenda
        </h1>
        <p className="text-gray-500 text-sm font-medium">Aquí tienes los próximos pasos en el tratamiento.</p>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="px-5 -mt-4 space-y-6 relative z-10">
        
        {/* Pestañas (Tabs) */}
        <div className="bg-white p-1 rounded-full shadow-sm border border-gray-100 flex mt-8">
          <button onClick={() => setFiltro("Proximas")} className={`flex-1 py-2 rounded-full text-sm font-bold transition-all ${filtro === "Proximas" ? "bg-teal-50 text-teal-700 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>Próximas Citas</button>
          <button onClick={() => setFiltro("Historial")} className={`flex-1 py-2 rounded-full text-sm font-bold transition-all ${filtro === "Historial" ? "bg-gray-100 text-gray-700 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>Historial</button>
        </div>

        {/* LISTA DE CITAS */}
        <div className="space-y-4">
          {filtro === "Proximas" ? (
            citasMock.map((cita) => {
              const Icono = cita.icono;
              return (
                <div key={cita.id} className={`bg-white rounded-3xl p-5 shadow-sm border ${cita.borde} relative overflow-hidden`}>
                  <div className="flex justify-between items-start mb-3">
                    <div className={`p-2.5 rounded-2xl ${cita.color}`}><Icono size={24} /></div>
                    <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>{cita.estado}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#1e3a8a] text-lg leading-tight">{cita.titulo}</h3>
                  <p className="text-sm text-gray-500 font-medium flex items-center gap-1.5 mt-1 mb-4"><User size={14} /> {cita.doctor}</p>
                  <div className="bg-gray-50 rounded-2xl p-3 space-y-2 mb-4 border border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-700"><CalendarIcon size={16} className="text-teal-500 shrink-0" /><span className="font-bold">{cita.fecha}</span></div>
                    <div className="flex items-center gap-2 text-sm text-gray-700"><Clock size={16} className="text-teal-500 shrink-0" /><span>{cita.hora}</span></div>
                    <div className="flex items-start gap-2 text-sm text-gray-700"><MapPin size={16} className="text-teal-500 shrink-0 mt-0.5" /><span className="leading-tight">{cita.lugar}</span></div>
                  </div>
                  {cita.preparacion && (
                    <div className="bg-orange-50 border border-orange-100 rounded-xl p-3 flex items-start gap-2">
                      <AlertCircle size={16} className="text-orange-500 shrink-0 mt-0.5" />
                      <div><p className="text-xs font-bold text-orange-800 uppercase tracking-wide">Importante</p><p className="text-xs text-orange-700 mt-0.5 leading-snug">{cita.preparacion}</p></div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-white p-8 rounded-3xl text-center border border-gray-100">
              <Info className="mx-auto text-gray-300 mb-3" size={40} />
              <p className="text-gray-500 font-medium">No hay citas previas registradas en esta etapa.</p>
            </div>
          )}
        </div>
        
        <button className="w-full bg-orange-50 text-orange-700 font-bold text-sm py-4 rounded-full border border-orange-200 flex justify-center items-center gap-2 hover:bg-orange-100 transition-colors shadow-sm">
          <AlertCircle size={18} /> Tuve un problema y no puedo asistir
        </button>
      </div>
    </div>
  );
}