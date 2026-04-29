// app/catalogos/page.tsx
"use client";

import { useState } from "react";
import { Database, Plus, Search, Edit2, CheckCircle2, XCircle, LayoutList, ShieldAlert, HeartPulse, Building2, Map } from "lucide-react";

// Categorías de nuestros catálogos
const categoriasCatalogos = [
  { id: "eapbs", nombre: "Aseguradoras (EAPBS / EPS)", icono: Building2 },
  { id: "diagnosticos", nombre: "Diagnósticos CIE-10", icono: HeartPulse },
  { id: "barreras", nombre: "Tipos de Barreras", icono: ShieldAlert },
  { id: "departamentos", nombre: "Departamentos y Municipios", icono: Map },
];

// Mock Data: Simulamos la base de datos de los catálogos
const mockData: Record<string, any[]> = {
  eapbs: [
    { id: 1, codigo: "EPS001", nombre: "Sanitas", regimen: "Ambos", estado: "Activo" },
    { id: 2, codigo: "EPS002", nombre: "Compensar", regimen: "Contributivo", estado: "Activo" },
    { id: 3, codigo: "EPS005", nombre: "Capital Salud", regimen: "Subsidiado", estado: "Activo" },
    { id: 4, codigo: "EPS008", nombre: "Medimás (Liquidada)", regimen: "Ambos", estado: "Inactivo" },
  ],
  diagnosticos: [
    { id: 1, codigo: "C910", nombre: "Leucemia linfoblástica aguda", tipo: "Oncológico", estado: "Activo" },
    { id: 2, codigo: "C719", nombre: "Tumor maligno del encéfalo, parte no especificada", tipo: "Oncológico", estado: "Activo" },
    { id: 3, codigo: "C810", nombre: "Linfoma de Hodgkin predominio linfocítico nodular", tipo: "Oncológico", estado: "Activo" },
  ],
  barreras: [
    { id: 1, codigo: "B-ADM", nombre: "Demora en autorización de servicios", categoria: "Administrativa", estado: "Activo" },
    { id: 2, codigo: "B-GEO", nombre: "Dificultad de transporte urbano/intermunicipal", categoria: "Geográfica", estado: "Activo" },
    { id: 3, codigo: "B-PSI", nombre: "Falta de red de apoyo familiar", categoria: "Psicosocial", estado: "Activo" },
  ]
};

export default function ModuloCatalogos() {
  const [catalogoActivo, setCatalogoActivo] = useState("eapbs");
  const [busqueda, setBusqueda] = useState("");

  // Obtenemos los datos del catálogo seleccionado
  const datosActuales = mockData[catalogoActivo] || [];
  const categoriaSeleccionada = categoriasCatalogos.find(c => c.id === catalogoActivo);

  // Obtener las llaves (columnas) dinámicamente según el primer objeto del arreglo, excluyendo el 'id' y 'estado' para manejarlos al final
  const columnasDinámicas = datosActuales.length > 0 
    ? Object.keys(datosActuales[0]).filter(key => key !== 'id' && key !== 'estado')
    : [];

  return (
    <div className="max-w-7xl mx-auto space-y-6 h-full flex flex-col">
      
      {/* CABECERA */}
      <div className="flex justify-between items-end border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Database className="text-teal-600" size={32} />
            Gestión de Catálogos
          </h1>
          <p className="text-gray-500 mt-1">Administración de tablas maestras y listas desplegables del sistema.</p>
        </div>
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors shadow-sm">
          <Plus size={18} /> Nuevo Registro
        </button>
      </div>

      {/* CONTENEDOR PRINCIPAL (Maestro - Detalle) */}
      <div className="flex flex-col md:flex-row gap-6 flex-1 items-start mt-4">
        
        {/* PANEL IZQUIERDO: Menú de Catálogos */}
        <div className="w-full md:w-72 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden shrink-0">
          <div className="bg-gray-50 p-4 border-b border-gray-200">
            <h3 className="font-bold text-gray-700 flex items-center gap-2 text-sm uppercase tracking-wider">
              <LayoutList size={16} /> Tablas del Sistema
            </h3>
          </div>
          <nav className="p-2 space-y-1">
            {categoriasCatalogos.map((cat) => {
              const Icon = cat.icono;
              const isActivo = catalogoActivo === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCatalogoActivo(cat.id)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors text-left ${
                    isActivo 
                      ? "bg-teal-50 text-teal-800 border border-teal-100" 
                      : "text-gray-600 hover:bg-gray-50 border border-transparent"
                  }`}
                >
                  <Icon size={18} className={isActivo ? "text-teal-600" : "text-gray-400"} />
                  {cat.nombre}
                </button>
              );
            })}
          </nav>
        </div>

        {/* PANEL DERECHO: Tabla de Datos */}
        <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden w-full">
          
          {/* Barra de herramientas de la tabla */}
          <div className="p-4 border-b border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 bg-white">
            <h2 className="text-lg font-bold text-gray-800">{categoriaSeleccionada?.nombre}</h2>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Buscar en este catálogo..." 
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>
          </div>

          {/* Tabla Dinámica */}
          <div className="overflow-x-auto">
            {datosActuales.length === 0 ? (
              <div className="p-12 text-center text-gray-500">
                Seleccione un catálogo o agregue nuevos registros.
              </div>
            ) : (
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                  <tr>
                    {columnasDinámicas.map((col) => (
                      <th key={col} className="px-6 py-4 font-bold">{col}</th>
                    ))}
                    <th className="px-6 py-4 font-bold">Estado</th>
                    <th className="px-6 py-4 font-bold text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {datosActuales.map((fila) => (
                    <tr key={fila.id} className="border-b hover:bg-gray-50/50 transition-colors">
                      
                      {/* Celdas Dinámicas */}
                      {columnasDinámicas.map((col) => (
                        <td key={`${fila.id}-${col}`} className="px-6 py-4">
                          {col === 'codigo' ? (
                            <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded border border-gray-200 text-gray-700">
                              {fila[col]}
                            </span>
                          ) : col === 'nombre' ? (
                            <span className="font-semibold text-gray-900">{fila[col]}</span>
                          ) : (
                            fila[col]
                          )}
                        </td>
                      ))}

                      {/* Celda de Estado */}
                      <td className="px-6 py-4">
                        {fila.estado === "Activo" ? (
                          <span className="flex items-center gap-1 text-green-700 bg-green-50 px-2 py-1 rounded text-xs font-semibold w-fit border border-green-200">
                            <CheckCircle2 size={14} /> Activo
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-gray-500 bg-gray-100 px-2 py-1 rounded text-xs font-semibold w-fit border border-gray-200">
                            <XCircle size={14} /> Inactivo
                          </span>
                        )}
                      </td>

                      {/* Celda de Acciones */}
                      <td className="px-6 py-4 text-right">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors tooltip" title="Editar Registro">
                          <Edit2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          
          {/* Paginación (Visual) */}
          <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-between items-center text-sm text-gray-500">
            <span>Mostrando {datosActuales.length} registros</span>
            <div className="flex gap-1">
              <button className="px-3 py-1 border rounded bg-white hover:bg-gray-50 disabled:opacity-50" disabled>Anterior</button>
              <button className="px-3 py-1 border rounded bg-white hover:bg-gray-50 disabled:opacity-50" disabled>Siguiente</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}