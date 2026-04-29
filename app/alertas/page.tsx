"use client";

import { useState } from "react";
import { AlertCircle, Clock, Pill, CalendarX, CheckCircle2, Filter, Activity, MessageSquareWarning } from "lucide-react";

// Mock Data: Simulamos las alertas generadas por el sistema
const alertasMock = [
  {
    id: 1,
    paciente: "Sofía Martínez",
    documento: "RC - 1029384756",
    tipo: "Medicamento",
    severidad: "Critica",
    mensaje: "Demora de 48h en entrega de Mercaptopurina. Familia reporta que farmacia no tiene stock.",
    tiempo: "Hace 2 horas",
    icono: Pill,
  },
  {
    id: 2,
    paciente: "Mateo Rodríguez",
    documento: "TI - 1098273645",
    tipo: "Laboratorio",
    severidad: "Critica",
    mensaje: "Cuadro hemático con neutropenia severa (RAN < 500). Requiere revisión médica inmediata.",
    tiempo: "Hace 5 horas",
    icono: Activity,
  },
  {
    id: 3,
    paciente: "Valeria Gómez",
    documento: "RC - 1102938475",
    tipo: "Cita",
    severidad: "Advertencia",
    mensaje: "Inasistencia a cita de apoyo psicosocial. Intentos de contacto fallidos.",
    tiempo: "Ayer",
    icono: CalendarX,
  },
  {
    id: 4,
    paciente: "Lucas Pineda",
    documento: "RC - 1122334455",
    tipo: "Barrera",
    severidad: "Advertencia",
    mensaje: "Familiar reporta en el portal falta de recursos para transporte a la próxima quimioterapia.",
    tiempo: "Ayer",
    icono: MessageSquareWarning,
  },
  {
    id: 5,
    paciente: "Ana Lucía Silva",
    documento: "TI - 1088776655",
    tipo: "Administrativo",
    severidad: "Informativa",
    mensaje: "Autorización de junta médica CTC aprobada y lista para descarga.",
    tiempo: "Hace 2 días",
    icono: Clock,
  }
];

export default function CentroAlertas() {
  const [filtroActivo, setFiltroActivo] = useState("Todas");

  // Función para filtrar las alertas
  const alertasFiltradas = alertasMock.filter(alerta => {
    if (filtroActivo === "Todas") return true;
    if (filtroActivo === "Críticas") return alerta.severidad === "Critica";
    if (filtroActivo === "Clínicas") return alerta.tipo === "Laboratorio" || alerta.tipo === "Medicamento";
    if (filtroActivo === "Administrativas") return alerta.tipo === "Cita" || alerta.tipo === "Barrera" || alerta.tipo === "Administrativo";
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* CABECERA Y MÉTRICAS */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <AlertCircle className="text-red-500" size={32} />
            Centro de Alertas
          </h1>
          <p className="text-gray-500 mt-1">Monitoreo activo de barreras y riesgos en la ruta de pacientes.</p>
        </div>
        
        {/* Resumen rápido */}
        <div className="flex gap-4">
          <div className="bg-red-50 text-red-700 px-4 py-2 rounded-lg border border-red-100 flex flex-col items-center justify-center min-w-[100px]">
            <span className="text-2xl font-bold">2</span>
            <span className="text-xs font-medium uppercase tracking-wider">Críticas</span>
          </div>
          <div className="bg-orange-50 text-orange-700 px-4 py-2 rounded-lg border border-orange-100 flex flex-col items-center justify-center min-w-[100px]">
            <span className="text-2xl font-bold">2</span>
            <span className="text-xs font-medium uppercase tracking-wider">Advertencias</span>
          </div>
        </div>
      </div>

      {/* PESTAÑAS DE FILTRADO */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {["Todas", "Críticas", "Clínicas", "Administrativas"].map((filtro) => (
          <button
            key={filtro}
            onClick={() => setFiltroActivo(filtro)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
              filtroActivo === filtro 
                ? "bg-blue-900 text-white shadow-sm" 
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {filtro}
          </button>
        ))}
      </div>

      {/* LISTA DE ALERTAS */}
      <div className="space-y-4 mt-4">
        {alertasFiltradas.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
            <CheckCircle2 className="mx-auto text-green-400 mb-3" size={48} />
            <h3 className="text-lg font-medium text-gray-900">Bandeja al día</h3>
            <p className="text-gray-500">No hay alertas para este filtro en este momento.</p>
          </div>
        ) : (
          alertasFiltradas.map((alerta) => {
            const Icono = alerta.icono;
            // Configuración dinámica de colores según severidad
            const isCritica = alerta.severidad === "Critica";
            const isAdvertencia = alerta.severidad === "Advertencia";
            
            const colorBorde = isCritica ? "border-l-red-500" : isAdvertencia ? "border-l-orange-400" : "border-l-blue-400";
            const colorIcono = isCritica ? "text-red-600 bg-red-100" : isAdvertencia ? "text-orange-600 bg-orange-100" : "text-blue-600 bg-blue-100";
            const colorBadge = isCritica ? "bg-red-50 text-red-700 border-red-200" : isAdvertencia ? "bg-orange-50 text-orange-700 border-orange-200" : "bg-blue-50 text-blue-700 border-blue-200";

            return (
              <div key={alerta.id} className={`bg-white rounded-xl shadow-sm border border-gray-200 border-l-[6px] ${colorBorde} p-5 flex flex-col md:flex-row gap-5 hover:shadow-md transition-shadow`}>
                
                {/* Icono Redondo */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${colorIcono}`}>
                  <Icono size={24} />
                </div>

                {/* Contenido Principal */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold text-gray-900">{alerta.paciente}</h3>
                      <span className="text-xs text-gray-500 font-medium">{alerta.documento}</span>
                    </div>
                    <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                      <Clock size={14} /> {alerta.tiempo}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-3">
                    {alerta.mensaje}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold border ${colorBadge}`}>
                      {alerta.severidad.toUpperCase()}
                    </span>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                      {alerta.tipo}
                    </span>
                  </div>
                </div>

                {/* Acciones */}
                <div className="flex md:flex-col gap-2 justify-center border-t md:border-t-0 md:border-l pt-4 md:pt-0 md:pl-5 border-gray-100 shrink-0">
                  <button className="flex-1 md:flex-none px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-sm font-semibold transition-colors">
                    Gestionar
                  </button>
                  <button className="flex-1 md:flex-none px-4 py-2 bg-white text-gray-600 border border-gray-300 hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors">
                    Marcar Leída
                  </button>
                </div>

              </div>
            );
          })
        )}
      </div>
    </div>
  );
}