// app/dashboard/page.tsx
"use client";

import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { Users, Clock, AlertTriangle, TrendingUp, Calendar, Download } from 'lucide-react';

// --- MOCK DATA (Simulación de base de datos) ---
const datosDiagnostico = [
  { nombre: 'Leucemia LLA', pacientes: 45 },
  { nombre: 'Tumores SNC', pacientes: 28 },
  { nombre: 'Linfomas', pacientes: 18 },
  { nombre: 'Neuroblastoma', pacientes: 12 },
  { nombre: 'Sarcomas', pacientes: 9 },
];

const datosFasesRuta = [
  { name: 'Sospecha', value: 15 },
  { name: 'Diagnóstico', value: 25 },
  { name: 'Tratamiento', value: 55 },
  { name: 'Seguimiento', value: 30 },
];

const datosTendenciaTiempos = [
  { mes: 'Ene', diasPromedio: 18, meta: 15 },
  { mes: 'Feb', diasPromedio: 17, meta: 15 },
  { mes: 'Mar', diasPromedio: 19, meta: 15 },
  { mes: 'Abr', diasPromedio: 15, meta: 15 },
  { mes: 'May', diasPromedio: 14, meta: 15 },
  { mes: 'Jun', diasPromedio: 12, meta: 15 }, // Mejora en tiempos
];

const COLORES_FASES = ['#F59E0B', '#EF4444', '#3B82F6', '#10B981'];

export default function DashboardKPI() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      
      {/* CABECERA */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <TrendingUp className="text-blue-600" size={32} />
            Dashboard de Indicadores (KPIs)
          </h1>
          <p className="text-gray-500 mt-1">Análisis de oportunidad y rendimiento de la ruta oncológica.</p>
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <Calendar className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <select className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 bg-white outline-none">
              <option>Últimos 30 días</option>
              <option>Este Trimestre</option>
              <option>Este Año</option>
            </select>
          </div>
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <Download size={18} /> Exportar Reporte
          </button>
        </div>
      </div>

      {/* TARJETAS DE MÉTRICAS (Top Line) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Pacientes en Ruta</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-1">112</h3>
            </div>
            <div className="p-2 bg-blue-50 rounded-lg"><Users className="text-blue-600" size={20} /></div>
          </div>
          <p className="text-xs text-green-600 font-medium mt-3 flex items-center gap-1">
            <TrendingUp size={14} /> +12% vs mes anterior
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Oportunidad (Sospecha a Tto)</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-1">14 <span className="text-lg font-normal text-gray-500">días</span></h3>
            </div>
            <div className="p-2 bg-teal-50 rounded-lg"><Clock className="text-teal-600" size={20} /></div>
          </div>
          <p className="text-xs text-green-600 font-medium mt-3">↓ 2 días por debajo de la meta</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Barreras Identificadas</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-1">34</h3>
            </div>
            <div className="p-2 bg-orange-50 rounded-lg"><AlertTriangle className="text-orange-500" size={20} /></div>
          </div>
          <p className="text-xs text-orange-600 font-medium mt-3">65% resolutividad</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Tasa de Abandono</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-1">1.2%</h3>
            </div>
            <div className="p-2 bg-red-50 rounded-lg"><TrendingUp className="text-red-500 transform rotate-180" size={20} /></div>
          </div>
          <p className="text-xs text-green-600 font-medium mt-3">Indicador dentro del margen</p>
        </div>
      </div>

      {/* SEGUNDA FILA: Gráficos de Distribución */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Gráfico 1: Pacientes por Diagnóstico */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Distribución por Diagnóstico Principal</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={datosDiagnostico} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E7EB" />
                <XAxis type="number" />
                <YAxis dataKey="nombre" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#4B5563' }} />
                <Tooltip cursor={{fill: '#F3F4F6'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="pacientes" fill="#3B82F6" radius={[0, 4, 4, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico 2: Embudo de Fases */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Estado Actual en la Ruta (Embudo)</h3>
          <div className="h-72 flex justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={datosFasesRuta}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {datosFasesRuta.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORES_FASES[index % COLORES_FASES.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* TERCERA FILA: Tendencias de Tiempo */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-gray-800">Tendencia: Oportunidad de Tratamiento (Días)</h3>
          <span className="text-xs font-semibold px-3 py-1 bg-teal-50 text-teal-700 rounded-full border border-teal-200">
            Meta Institucional: 15 Días
          </span>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={datosTendenciaTiempos} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="mes" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} dx={-10} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              <Legend verticalAlign="top" height={36} />
              {/* Ajuste aquí: type="monotone" para ambas líneas */}
              <Line type="monotone" name="Promedio Real" dataKey="diasPromedio" stroke="#3B82F6" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
              <Line type="monotone" name="Meta Institucional" dataKey="meta" stroke="#10B981" strokeWidth={2} strokeDasharray="5 5" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}