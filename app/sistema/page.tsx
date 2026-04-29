// app/sistema/page.tsx
"use client";

import { useState } from "react";
import { Settings, UserPlus, Search, Shield, Users, Mail, CheckCircle2, XCircle, MoreVertical, Filter } from "lucide-react";

// Mock Data: Base de datos de usuarios
const usuariosMock = [
  // Internos (Staff)
  { id: 1, tipo: "Interno", nombre: "Dra. Elena Vargas", email: "evargas@homi.org.co", rol: "Especialista", area: "Oncología Pediátrica", estado: "Activo", ultimoAcceso: "Hoy, 08:30 AM" },
  { id: 2, tipo: "Interno", nombre: "Carlos Mendoza", email: "cmendoza@homi.org.co", rol: "Coordinador", area: "Navegación Clínica", estado: "Activo", ultimoAcceso: "Hoy, 07:15 AM" },
  { id: 3, tipo: "Interno", nombre: "Andrea Ruiz", email: "aruiz@homi.org.co", rol: "Psicosocial", area: "Trabajo Social", estado: "Activo", ultimoAcceso: "Ayer, 04:20 PM" },
  { id: 4, tipo: "Interno", nombre: "Admin Principal", email: "admin@homi.org.co", rol: "Administrador", area: "TI y Sistemas", estado: "Activo", ultimoAcceso: "Hoy, 09:00 AM" },
  { id: 5, tipo: "Interno", nombre: "Laura Gómez", email: "lgomez@homi.org.co", rol: "Enfermeria", area: "Pabellón Quimioterapia", estado: "Inactivo", ultimoAcceso: "Hace 2 semanas" },
  
  // Externos (Acudientes / Portal Familiar)
  { id: 6, tipo: "Externo", nombre: "Roberto Martínez", email: "roberto.m@gmail.com", rol: "PortalFamiliar", pacienteAsociado: "Sofía Martínez", estado: "Activo", ultimoAcceso: "Ayer, 08:00 PM" },
  { id: 7, tipo: "Externo", nombre: "Diana Rodríguez", email: "dianita_r@hotmail.com", rol: "PortalFamiliar", pacienteAsociado: "Mateo Rodríguez", estado: "Activo", ultimoAcceso: "Hoy, 06:10 AM" },
];

// Colores para los roles
const obtenerColorRol = (rol: string) => {
  switch (rol) {
    case "Administrador": return "bg-purple-100 text-purple-800 border-purple-200";
    case "Coordinador": return "bg-blue-100 text-blue-800 border-blue-200";
    case "Especialista": return "bg-indigo-100 text-indigo-800 border-indigo-200";
    case "Navegador": return "bg-teal-100 text-teal-800 border-teal-200";
    case "Psicosocial": return "bg-orange-100 text-orange-800 border-orange-200";
    case "Enfermeria": return "bg-pink-100 text-pink-800 border-pink-200";
    default: return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export default function ModuloSistema() {
  const [pestañaActiva, setPestañaActiva] = useState<"Internos" | "Externos">("Internos");
  const [busqueda, setBusqueda] = useState("");

  // Filtramos por pestaña (Interno/Externo) y por la búsqueda de texto
  const usuariosFiltrados = usuariosMock.filter(u => 
    u.tipo === (pestañaActiva === "Internos" ? "Interno" : "Externo") &&
    (u.nombre.toLowerCase().includes(busqueda.toLowerCase()) || u.email.toLowerCase().includes(busqueda.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* CABECERA */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Settings className="text-gray-700" size={32} />
            Configuración del Sistema
          </h1>
          <p className="text-gray-500 mt-1">Gestión de accesos, roles y seguridad de la plataforma.</p>
        </div>
        <button className="bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors shadow-sm">
          <UserPlus size={18} /> Añadir Usuario
        </button>
      </div>

      {/* TARJETAS DE RESUMEN DE SEGURIDAD */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-4">
          <div className="p-3 bg-blue-50 rounded-lg"><Shield className="text-blue-600" size={24} /></div>
          <div>
            <p className="text-sm font-medium text-gray-500">Usuarios Staff Activos</p>
            <h3 className="text-2xl font-bold text-gray-800">42</h3>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-4">
          <div className="p-3 bg-green-50 rounded-lg"><Users className="text-green-600" size={24} /></div>
          <div>
            <p className="text-sm font-medium text-gray-500">Familias Conectadas</p>
            <h3 className="text-2xl font-bold text-gray-800">115</h3>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-4">
          <div className="p-3 bg-orange-50 rounded-lg"><Mail className="text-orange-600" size={24} /></div>
          <div>
            <p className="text-sm font-medium text-gray-500">Invitaciones Pendientes</p>
            <h3 className="text-2xl font-bold text-gray-800">7</h3>
          </div>
        </div>
      </div>

      {/* CONTENEDOR DE LA TABLA */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Toolbar: Pestañas y Búsqueda */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 bg-gray-50/50">
          <div className="flex w-full md:w-auto">
            <button 
              onClick={() => setPestañaActiva("Internos")}
              className={`flex-1 md:flex-none px-6 py-4 text-sm font-bold border-b-2 transition-colors ${
                pestañaActiva === "Internos" ? "border-gray-800 text-gray-900 bg-white" : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Staff del Hospital
            </button>
            <button 
              onClick={() => setPestañaActiva("Externos")}
              className={`flex-1 md:flex-none px-6 py-4 text-sm font-bold border-b-2 transition-colors ${
                pestañaActiva === "Externos" ? "border-gray-800 text-gray-900 bg-white" : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Acudientes (Portal Familiar)
            </button>
          </div>

          <div className="p-3 flex gap-2 w-full md:w-auto border-t md:border-t-0 border-gray-200">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Buscar por nombre o email..." 
                className="w-full pl-9 pr-4 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-gray-800 outline-none"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>
            <button className="px-3 py-1.5 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 flex items-center gap-2 text-sm bg-white">
              <Filter size={16} /> Filtros
            </button>
          </div>
        </div>

        {/* Tabla de Usuarios */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4">Usuario</th>
                <th className="px-6 py-4">{pestañaActiva === "Internos" ? "Rol y Área" : "Paciente Asociado"}</th>
                <th className="px-6 py-4">Último Acceso</th>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuariosFiltrados.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    No se encontraron usuarios con esos criterios de búsqueda.
                  </td>
                </tr>
              ) : (
                usuariosFiltrados.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-900">{user.nombre}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                        <Mail size={12} /> {user.email}
                      </div>
                    </td>
                    
                    <td className="px-6 py-4">
                      {pestañaActiva === "Internos" ? (
                        <div>
                          <span className={`px-2 py-0.5 rounded text-[11px] font-bold border uppercase tracking-wider ${obtenerColorRol(user.rol)}`}>
                            {user.rol}
                          </span>
                          <div className="text-xs text-gray-500 mt-1">{user.area}</div>
                        </div>
                      ) : (
                        <div className="font-medium text-gray-700 flex items-center gap-2">
                          <Users size={14} className="text-gray-400" />
                          {user.pacienteAsociado}
                        </div>
                      )}
                    </td>

                    <td className="px-6 py-4 text-xs font-medium text-gray-600">
                      {user.ultimoAcceso}
                    </td>

                    <td className="px-6 py-4">
                      {user.estado === "Activo" ? (
                        <span className="flex items-center gap-1 text-green-700 bg-green-50 px-2 py-1 rounded text-xs font-bold w-fit border border-green-200">
                          <CheckCircle2 size={14} /> Activo
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-gray-500 bg-gray-100 px-2 py-1 rounded text-xs font-bold w-fit border border-gray-200">
                          <XCircle size={14} /> Inactivo
                        </span>
                      )}
                    </td>

                    <td className="px-6 py-4 text-center">
                      <button className="p-1.5 text-gray-400 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors">
                        <MoreVertical size={20} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}