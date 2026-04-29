"use client";

import { useState } from "react";
import { CheckSquare, Clock, AlertCircle, Plus, MoreHorizontal, Calendar, User, ArrowRight } from "lucide-react";

// Mock Data: Simulamos las tareas asignadas al usuario actual
const tareasMock = [
  {
    id: 1,
    titulo: "Solicitar autorización CTC para Mercaptopurina",
    paciente: "Sofía Martínez",
    prioridad: "Alta",
    fechaLimite: "2023-11-15",
    estado: "Pendiente",
    tipo: "Administrativa"
  },
  {
    id: 2,
    titulo: "Agendar TAC de control post-inducción",
    paciente: "Mateo Rodríguez",
    prioridad: "Media",
    fechaLimite: "2023-11-16",
    estado: "Pendiente",
    tipo: "Clínica"
  },
  {
    id: 3,
    titulo: "Valoración de red de apoyo familiar",
    paciente: "Valeria Gómez",
    prioridad: "Media",
    fechaLimite: "2023-11-14",
    estado: "En Curso",
    tipo: "Psicosocial"
  },
  {
    id: 4,
    titulo: "Confirmar asistencia a quimioterapia",
    paciente: "Lucas Pineda",
    prioridad: "Baja",
    fechaLimite: "2023-11-18",
    estado: "En Curso",
    tipo: "Administrativa"
  },
  {
    id: 5,
    titulo: "Entrega de material educativo sobre neutropenia",
    paciente: "Ana Lucía Silva",
    prioridad: "Baja",
    fechaLimite: "2023-11-10",
    estado: "Completada",
    tipo: "Educación"
  }
];

export default function ModuloTareas() {
  const [tareas, setTareas] = useState(tareasMock);

  // Función para simular el cambio de estado de una tarea
  const moverTarea = (id: number, nuevoEstado: string) => {
    setTareas(tareas.map(t => t.id === id ? { ...t, estado: nuevoEstado } : t));
  };

  // Renderizador de Tarjetas (Kanban Cards)
  const renderCard = (tarea: any) => {
    const isAlta = tarea.prioridad === "Alta";
    const colorBorde = isAlta ? "border-l-red-500" : tarea.prioridad === "Media" ? "border-l-orange-400" : "border-l-blue-400";
    const colorBadge = isAlta ? "bg-red-50 text-red-700 border-red-200" : tarea.prioridad === "Media" ? "bg-orange-50 text-orange-700 border-orange-200" : "bg-blue-50 text-blue-700 border-blue-200";

    return (
      <div key={tarea.id} className={`bg-white p-4 rounded-xl shadow-sm border border-gray-200 border-l-[4px] ${colorBorde} hover:shadow-md transition-all group`}>
        <div className="flex justify-between items-start mb-2">
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wider ${colorBadge}`}>
            {tarea.prioridad}
          </span>
          <button className="text-gray-400 hover:text-blue-600 transition-colors">
            <MoreHorizontal size={16} />
          </button>
        </div>
        
        <h4 className="text-sm font-bold text-gray-800 leading-snug mb-2">{tarea.titulo}</h4>
        
        <div className="space-y-1.5 mb-4">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <User size={14} className="text-gray-400" />
            <span className="font-medium truncate">{tarea.paciente}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Calendar size={14} className="text-gray-400" />
            <span className={isAlta ? "text-red-600 font-semibold" : ""}>{tarea.fechaLimite}</span>
          </div>
        </div>

        <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
          <span className="text-[11px] font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {tarea.tipo}
          </span>
          
          {/* Botones de acción rápida para mover la tarea */}
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {tarea.estado === "Pendiente" && (
              <button onClick={() => moverTarea(tarea.id, "En Curso")} className="text-[11px] font-semibold text-blue-600 hover:bg-blue-50 px-2 py-1 rounded flex items-center gap-1">
                Iniciar <ArrowRight size={12} />
              </button>
            )}
            {tarea.estado === "En Curso" && (
              <button onClick={() => moverTarea(tarea.id, "Completada")} className="text-[11px] font-semibold text-green-600 hover:bg-green-50 px-2 py-1 rounded flex items-center gap-1">
                Completar <CheckSquare size={12} />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 h-full flex flex-col">
      
      {/* CABECERA */}
      <div className="flex justify-between items-end border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <CheckSquare className="text-indigo-600" size={32} />
            Gestión de Tareas
          </h1>
          <p className="text-gray-500 mt-1">Planificador de actividades y seguimientos de la ruta.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors shadow-sm">
          <Plus size={18} /> Nueva Tarea
        </button>
      </div>

      {/* TABLERO KANBAN */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 items-start mt-4">
        
        {/* Columna: PENDIENTES */}
        <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 min-h-[500px]">
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="font-bold text-gray-700 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-400"></span>
              Pendientes
            </h3>
            <span className="text-xs font-bold bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
              {tareas.filter(t => t.estado === "Pendiente").length}
            </span>
          </div>
          <div className="space-y-3">
            {tareas.filter(t => t.estado === "Pendiente").map(renderCard)}
          </div>
        </div>

        {/* Columna: EN CURSO */}
        <div className="bg-blue-50/30 rounded-2xl p-4 border border-blue-100 min-h-[500px]">
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="font-bold text-blue-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              En Curso
            </h3>
            <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
              {tareas.filter(t => t.estado === "En Curso").length}
            </span>
          </div>
          <div className="space-y-3">
            {tareas.filter(t => t.estado === "En Curso").map(renderCard)}
          </div>
        </div>

        {/* Columna: COMPLETADAS */}
        <div className="bg-green-50/30 rounded-2xl p-4 border border-green-100 min-h-[500px]">
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="font-bold text-green-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Completadas
            </h3>
            <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full">
              {tareas.filter(t => t.estado === "Completada").length}
            </span>
          </div>
          <div className="space-y-3 opacity-60 hover:opacity-100 transition-opacity">
            {tareas.filter(t => t.estado === "Completada").map(renderCard)}
          </div>
        </div>

      </div>
    </div>
  );
}