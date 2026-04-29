"use client";

import { useState } from "react";
import { Eye, FolderDot, X, Save, Search, Filter, Calendar, CheckSquare } from "lucide-react";

// Mock Data: Simulamos los pacientes que vienen de la base de datos
const pacientesMock = [
  { id: 1, name: "Sofía Martínez", docType: "RC", doc: "1029384756", age: "8 años", eapbs: "Sanitas", regimen: "Contributivo", dx: "C910 - Leucemia Linfoblástica", status: "Tratamiento Activo", alert: "Normal" },
  { id: 2, name: "Mateo Rodríguez", docType: "TI", doc: "1098273645", age: "12 años", eapbs: "Capital Salud", regimen: "Subsidiado", dx: "C719 - Tumor Maligno del Encéfalo", status: "Diagnóstico", alert: "Demora" },
  { id: 3, name: "Valeria Gómez", docType: "RC", doc: "1102938475", age: "5 años", eapbs: "Compensar", regimen: "Contributivo", dx: "C810 - Linfoma de Hodgkin", status: "Seguimiento", alert: "Atención" },
];

export default function BandejaNavegacion() {
  // Estados para controlar qué panel está abierto y qué paciente está seleccionado
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState<any>(null);
  const [panelAbierto, setPanelAbierto] = useState<"gestion" | "tareas" | null>(null);

  const abrirPanel = (paciente: any, tipo: "gestion" | "tareas") => {
    setPacienteSeleccionado(paciente);
    setPanelAbierto(tipo);
  };

  const cerrarPanel = () => {
    setPanelAbierto(null);
    setTimeout(() => setPacienteSeleccionado(null), 300); // Espera a que termine la animación
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 relative">
      {/* CABECERA */}
      <div className="flex justify-between items-end border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Bandeja de Navegación</h1>
          <p className="text-gray-500 mt-1">Gestión y seguimiento de rutas clínicas activas.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input type="text" placeholder="Buscar paciente..." className="pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none w-64" />
          </div>
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-50">
            <Filter size={18} /> Filtros
          </button>
        </div>
      </div>

      {/* TABLA PRINCIPAL */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4">Paciente / Documento</th>
              <th className="px-6 py-4">Diagnóstico</th>
              <th className="px-6 py-4">EPS / Régimen</th>
              <th className="px-6 py-4">Estado Ruta</th>
              <th className="px-6 py-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pacientesMock.map((p) => (
              <tr key={p.id} className="border-b hover:bg-blue-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-semibold text-gray-900">{p.name}</div>
                  <div className="text-xs text-gray-500">{p.docType} - {p.doc}</div>
                </td>
                <td className="px-6 py-4 text-gray-800">{p.dx}</td>
                <td className="px-6 py-4">
                  <div className="font-medium text-gray-800">{p.eapbs}</div>
                  <div className="text-xs text-gray-500">{p.regimen}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    p.alert === 'Demora' ? 'bg-red-100 text-red-800' : 
                    p.alert === 'Atención' ? 'bg-orange-100 text-orange-800' : 
                    'bg-teal-100 text-teal-800'
                  }`}>
                    {p.status}
                  </span>
                </td>
                <td className="px-6 py-4 flex justify-center gap-3">
                  {/* Botón 1: Ojo (Gestión Clínica) */}
                  <button 
                    onClick={() => abrirPanel(p, "gestion")}
                    className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors tooltip"
                    title="Ver/Editar Gestión Clínica"
                  >
                    <Eye size={20} />
                  </button>
                  {/* Botón 2: Carpeta (Tareas) */}
                  <button 
                    onClick={() => abrirPanel(p, "tareas")}
                    className="p-2 text-indigo-600 hover:bg-indigo-100 rounded-lg transition-colors tooltip"
                    title="Registrar Tarea/Seguimiento"
                  >
                    <FolderDot size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* OVERLAY OSCURO (Aparece cuando un panel está abierto) */}
      {panelAbierto && (
        <div className="fixed inset-0 bg-gray-900/40 z-40 backdrop-blur-sm transition-opacity" onClick={cerrarPanel} />
      )}

      {/* ========================================================
          PANEL LATERAL 1: GESTIÓN (El "Ojo")
          ======================================================== */}
      <div className={`fixed top-0 right-0 h-full w-[600px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${panelAbierto === 'gestion' ? 'translate-x-0' : 'translate-x-full'}`}>
        {pacienteSeleccionado && panelAbierto === 'gestion' && (
          <>
            <div className="flex justify-between items-center p-6 border-b bg-gray-50">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <Eye className="text-blue-600" /> Navegación y Seguimiento Clínico
              </h2>
              <button onClick={cerrarPanel} className="text-gray-400 hover:text-gray-700"><X size={24} /></button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Sección: Datos del Paciente (Solo Lectura) */}
              <section className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                <h3 className="text-sm font-bold text-blue-800 mb-3 uppercase tracking-wider">Datos del Paciente</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><span className="text-gray-500">Nombre:</span> <span className="font-semibold text-gray-900">{pacienteSeleccionado.name}</span></div>
                  <div><span className="text-gray-500">Edad:</span> <span className="font-semibold text-gray-900">{pacienteSeleccionado.age}</span></div>
                  <div><span className="text-gray-500">Documento:</span> <span className="font-semibold text-gray-900">{pacienteSeleccionado.docType} {pacienteSeleccionado.doc}</span></div>
                  <div><span className="text-gray-500">Aseguradora:</span> <span className="font-semibold text-gray-900">{pacienteSeleccionado.eapbs} ({pacienteSeleccionado.regimen})</span></div>
                </div>
              </section>

              {/* Sección: Diagnóstico */}
              <section>
                <h3 className="text-sm font-bold text-gray-700 border-b pb-2 mb-4">DIAGNÓSTICO</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-600">Fecha Dx / Recaída</label>
                    <input type="date" className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-600">Dx CIE-10</label>
                    <input type="text" defaultValue={pacienteSeleccionado.dx} className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 uppercase" />
                  </div>
                  <div className="space-y-1 col-span-2">
                    <label className="text-xs font-medium text-gray-600">Diagnóstico Morfológico</label>
                    <input type="text" className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500" placeholder="Especifique..." />
                  </div>
                </div>
              </section>

              {/* Sección: Tratamiento */}
              <section>
                <h3 className="text-sm font-bold text-gray-700 border-b pb-2 mb-4">TRATAMIENTO</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1 col-span-2">
                    <label className="text-xs font-medium text-gray-600">Protocolo de Tratamiento</label>
                    <input type="text" className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500" placeholder="Ej. BFM 2009" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-600">Alta de Tratamiento (Si aplica)</label>
                    <input type="date" className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-600">Especialidad Tratante</label>
                    <select className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 bg-white">
                      <option>Oncología Pediátrica</option>
                      <option>Hematología</option>
                      <option>Cuidados Paliativos</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Sección: Gestión */}
              <section>
                <h3 className="text-sm font-bold text-gray-700 border-b pb-2 mb-4">NUEVA GESTIÓN DE RUTA</h3>
                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg border">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-600">Fecha de Gestión Actual</label>
                    <input type="date" className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-600">Estado / Fase</label>
                    <select className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 bg-white">
                      <option>Sospecha</option>
                      <option>Diagnóstico Confirmado</option>
                      <option>Tratamiento Activo</option>
                      <option>Seguimiento Post-Tratamiento</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-600">Fecha Último Contacto</label>
                    <input type="date" className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-600">Fecha Próximo Seguimiento</label>
                    <input type="date" className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="space-y-1 col-span-2">
                    <label className="text-xs font-medium text-gray-600">Detalle de Gestión (Notas)</label>
                    <textarea rows={3} className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500" placeholder="Registre hallazgos, llamadas, barreras identificadas..."></textarea>
                  </div>
                </div>
              </section>
            </div>

            {/* Footer con Botón Guardar */}
            <div className="p-4 border-t bg-gray-50 flex justify-end gap-3">
              <button onClick={cerrarPanel} className="px-4 py-2 border rounded-lg text-sm font-medium hover:bg-gray-100">Cancelar</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2 shadow-sm">
                <Save size={16} /> Guardar Navegación
              </button>
            </div>
          </>
        )}
      </div>

      {/* ========================================================
          PANEL LATERAL 2: TAREAS (La "Carpeta")
          ======================================================== */}
      <div className={`fixed top-0 right-0 h-full w-[450px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${panelAbierto === 'tareas' ? 'translate-x-0' : 'translate-x-full'}`}>
        {pacienteSeleccionado && panelAbierto === 'tareas' && (
          <>
            <div className="flex justify-between items-center p-6 border-b bg-indigo-50">
              <h2 className="text-xl font-bold text-indigo-900 flex items-center gap-2">
                <CheckSquare className="text-indigo-600" /> Nueva Tarea
              </h2>
              <button onClick={cerrarPanel} className="text-gray-400 hover:text-gray-700"><X size={24} /></button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="bg-indigo-50/50 p-3 rounded-lg border border-indigo-100 text-sm">
                Asignando tarea para: <span className="font-bold text-indigo-900">{pacienteSeleccionado.name}</span>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Título de la Tarea *</label>
                  <input type="text" className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500" placeholder="Ej. Solicitar autorización CTC" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Fecha Límite</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-2 text-gray-400" size={16} />
                      <input type="date" className="w-full border rounded-md pl-9 pr-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Prioridad</label>
                    <select className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 bg-white">
                      <option>Normal</option>
                      <option>Urgente</option>
                      <option className="text-red-600 font-bold">Crítica (24h)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Asignar a Rol</label>
                  <select className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 bg-white">
                    <option>Mi Gestión (Personal)</option>
                    <option>Psicosocial / Trabajo Social</option>
                    <option>Enfermería Oncológica</option>
                    <option>Coordinador Médico</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Descripción / Instrucciones</label>
                  <textarea rows={5} className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500" placeholder="Detalle lo que se debe hacer..."></textarea>
                </div>
              </div>
            </div>

            <div className="p-4 border-t bg-gray-50 flex justify-end gap-3">
              <button onClick={cerrarPanel} className="px-4 py-2 border rounded-lg text-sm font-medium hover:bg-gray-100">Cancelar</button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 flex items-center gap-2 shadow-sm">
                <FolderDot size={16} /> Crear Tarea
              </button>
            </div>
          </>
        )}
      </div>

    </div>
  );
}