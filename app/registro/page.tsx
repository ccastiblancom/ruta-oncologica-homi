"use client";

import { Save, User, MapPin, Activity, FileText } from "lucide-react";

export default function RegistroPaciente() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      <div className="flex justify-between items-end border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <User className="text-blue-600" size={32} />
            Registro de Nuevo Paciente
          </h1>
          <p className="text-gray-500 mt-1">
            Ingrese los datos demográficos y clínicos para iniciar la ruta de navegación.
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-sm">
          <Save size={20} />
          Guardar Paciente
        </button>
      </div>

      <form className="space-y-8 mt-6">
        
        {/* BLOQUE 1: Identificación */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4 flex items-center gap-2">
            <FileText className="text-gray-400" size={20} />
            1. Identificación del Paciente
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Primer Nombre *</label>
              <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Ej. Juan" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Segundo Nombre</label>
              <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Primer Apellido *</label>
              <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Segundo Apellido</label>
              <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Tipo Documento *</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option value="">Seleccione...</option>
                <option value="RC">Registro Civil</option>
                <option value="TI">Tarjeta de Identidad</option>
                <option value="CC">Cédula de Ciudadanía</option>
                <option value="PA">Pasaporte</option>
                <option value="CE">Cédula de Extranjería</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Documento *</label>
              <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Fecha de Nacimiento *</label>
              <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Edad</label>
                <input type="number" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-50 cursor-not-allowed" placeholder="Auto" readOnly />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Sexo *</label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                  <option value="M">M</option>
                  <option value="F">F</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE 2: Ubicación y Contacto */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4 flex items-center gap-2">
            <MapPin className="text-gray-400" size={20} />
            2. Ubicación y Datos de Contacto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">País de Nacimiento</label>
              <input type="text" defaultValue="Colombia" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Departamento</label>
              <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Ej. Cundinamarca" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Municipio Procedencia</label>
              <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Ej. Bogotá" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Dirección de Residencia</label>
              <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div className="space-y-1 md:col-start-1">
              <label className="text-sm font-medium text-gray-700">Celular 1 (Principal) *</label>
              <input type="tel" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Celular 2 (Opcional)</label>
              <input type="tel" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
          </div>
        </section>

        {/* BLOQUE 3: Administrativo y Clínico */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4 flex items-center gap-2">
            <Activity className="text-gray-400" size={20} />
            3. Sistema de Salud e Información Clínica
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">EAPBS (EPS) *</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option value="">Seleccione EPS...</option>
                <option value="Compensar">Compensar</option>
                <option value="Sanitas">Sanitas</option>
                <option value="SaludTotal">Salud Total</option>
                <option value="CapitalSalud">Capital Salud</option>
                <option value="NuevaEPS">Nueva EPS</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Régimen *</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option value="">Seleccione...</option>
                <option value="Contributivo">Contributivo</option>
                <option value="Subsidiado">Subsidiado</option>
                <option value="Especial">Especial/Excepción</option>
                <option value="Vinculado">Vinculado</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Diagnóstico (CIE-10) *</label>
              <div className="relative">
                <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent uppercase" placeholder="Ej. C910 - Leucemia..." />
              </div>
            </div>
          </div>
        </section>

      </form>
    </div>
  );
}