"use client";

import { useState, useEffect } from 'react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip
} from 'recharts';
import { ClipboardCheck, Activity, Target, BrainCircuit, ArrowLeft, Search, ChevronRight, Filter } from 'lucide-react';

// --- DATOS SIMULADOS BASADOS EN TU ESTRUCTURA ---
const dataDimensionesVida = [
  { subject: 'Físico', A: 85 },
  { subject: 'Emocional', A: 65 },
  { subject: 'Social', A: 78 },
  { subject: 'Escolar', A: 50 },
];

const dataTendenciaVida = [
  { mes: 'Ene', score: 72 },
  { mes: 'Feb', score: 74 },
  { mes: 'Mar', score: 75 },
  { mes: 'Abr', score: 78 },
  { mes: 'May', score: 80 },
  { mes: 'Jun', score: 82 },
];

const pacientesPedsQL = [
  { id: 1, nombre: "Sofía Martínez", total: 82.5, fisico: 90, emocional: 75, social: 85, escolar: 80, estado: "Mejora" },
  { id: 2, nombre: "Mateo Rodríguez", total: 58.0, fisico: 60, emocional: 50, social: 70, escolar: 52, estado: "Crítico" },
  { id: 3, nombre: "Valeria Gómez", total: 75.2, fisico: 80, emocional: 70, social: 80, escolar: 71, estado: "Estable" },
];

export default function ModuloPedsQL() {
  const [busqueda, setBusqueda] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  // Fix para hidratación en Next.js
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12 font-sans text-slate-700">
      
      {/* HEADER */}
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-slate-100 rounded-full border border-slate-200 transition-colors">
          <ArrowLeft size={20} className="text-slate-500" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-[#1e3a8a]">Evaluación Instrumento Calidad de Vida (PedsQL)</h1>
          <p className="text-xs text-slate-400 font-medium">Unidad de Leucemia • Experiencia al Cliente • Bienestar Bio-psicosocial</p>
        </div>
      </div>

      {/* FILTROS */}
      <div className="flex gap-4">
        <select className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold shadow-sm outline-none">
          <option>Semestre Actual</option>
          <option>Año Actual</option>
        </select>
        <select className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold shadow-sm outline-none">
          <option>Todos los Grupos Etarios</option>
        </select>
      </div>

      {/* TARJETAS KPI */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <KpiCard title="COBERTURA EVALUACIÓN" value="100%" icon={<ClipboardCheck size={28} />} color="teal" />
        <KpiCard title="PUNTUACIÓN MEDIA" value="82.5" icon={<Activity size={28} />} color="emerald" />
        <KpiCard title="META INSTITUCIONAL" value="100%" icon={<Target size={28} />} color="slate" />
        <KpiCard title="ALERTAS DE BIENESTAR" value="5" icon={<BrainCircuit size={28} />} color="rose" />
      </div>

      {/* GRÁFICAS DE ANÁLISIS - CÓDIGO UNIFICADO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        
        {/* Gráfico de Radar: Dimensiones de Vida */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 min-h-[400px]">
          <h3 className="text-sm font-bold text-slate-700 mb-1">Perfil de Calidad de Vida (Dimensiones)</h3>
          <p className="text-[10px] text-slate-400 mb-6">Puntuación promedio por cada eje del instrumento PedsQL</p>
          <div className="h-72 w-full">
            {isMounted && (
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataDimensionesVida}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis dataKey="subject" tick={{fontSize: 10, fontWeight: 600, fill: '#64748b'}} />
                  <Radar name="Puntuación" dataKey="A" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.4} />
                  <RechartsTooltip />
                </RadarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Gráfico de Líneas: Evolución de Puntuación */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 min-h-[400px]">
          <h3 className="text-sm font-bold text-slate-700 mb-1">Tendencia de Bienestar Percibido</h3>
          <p className="text-[10px] text-slate-400 mb-6">Evolución del Score promedio de los pacientes evaluados</p>
          <div className="h-72 w-full">
            {isMounted && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dataTendenciaVida} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="mes" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                  <YAxis domain={[50, 100]} axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                  <RechartsTooltip />
                  <Line type="monotone" dataKey="score" stroke="#0ea5e9" strokeWidth={3} dot={{ r: 5, fill: "#0ea5e9", strokeWidth: 2, stroke: "#fff" }} />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>

      {/* TABLA DE PACIENTES */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex justify-between items-center">
          <h3 className="text-sm font-bold text-slate-700">Detalle de Evaluaciones</h3>
          <div className="relative w-64">
            <Search className="absolute left-3 top-2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Buscar paciente..." 
              className="w-full pl-9 pr-4 py-1.5 border border-slate-200 rounded-lg text-xs outline-none"
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
        </div>
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-400 uppercase font-bold">
            <tr>
              <th className="px-6 py-3">Paciente</th>
              <th className="px-6 py-3 text-center">Score Total</th>
              <th className="px-6 py-3 text-center">Estado</th>
              <th className="px-6 py-3 text-right">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {pacientesPedsQL.filter(p => p.nombre.toLowerCase().includes(busqueda.toLowerCase())).map((p) => (
              <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-bold">{p.nombre}</td>
                <td className="px-6 py-4 text-center">
                  <span className="bg-teal-50 text-teal-600 px-2 py-1 rounded-md font-bold">{p.total}</span>
                </td>
                <td className="px-6 py-4 text-center">
                   <span className={`px-2 py-1 rounded text-[10px] font-bold ${p.estado === 'Crítico' ? 'bg-red-50 text-red-600' : 'bg-teal-50 text-teal-600'}`}>
                    {p.estado}
                   </span>
                </td>
                <td className="px-6 py-4 text-right"><ChevronRight size={16} className="inline text-slate-300" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function KpiCard({ title, value, icon, color }: any) {
  const borderColors: any = { teal: 'bg-teal-400', emerald: 'bg-emerald-400', slate: 'bg-slate-400', rose: 'bg-rose-400' };
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">{title}</p>
          <h3 className="text-3xl font-black text-slate-800">{value}</h3>
        </div>
        <div className="text-slate-200">{icon}</div>
      </div>
      <div className={`absolute left-0 top-1/4 bottom-1/4 w-1 rounded-r-full ${borderColors[color]}`} />
    </div>
  );
}