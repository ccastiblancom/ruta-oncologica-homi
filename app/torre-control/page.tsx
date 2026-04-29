// app/torre-control/page.tsx
import { Activity, Users, AlertTriangle, Clock } from "lucide-react";

export default function TorreControl() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Torre de Control UCADs</h1>
        <p className="text-gray-500 mt-1">Visión global de la ruta de navegación - Unidad Clínica Alto Desempeño</p>
      </div>

      {/* Tarjetas de Indicadores (KPI Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KpiCard title="Pacientes Activos" value="142" icon={<Users className="text-blue-600" />} />
        <KpiCard title="Casos Críticos" value="12" icon={<AlertTriangle className="text-red-600" />} />
        <KpiCard title="En Fase de Inducción" value="28" icon={<Activity className="text-teal-600" />} />
        <KpiCard title="Barreras Identificadas" value="7" icon={<Clock className="text-orange-500" />} />
      </div>

      {/* Tabla de Actividad Reciente y Alertas */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Pacientes con Alertas Activas (Leucemia)</h3>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">Ver todos</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3">Paciente</th>
                <th className="px-6 py-3">Diagnóstico</th>
                <th className="px-6 py-3">Fase Actual</th>
                <th className="px-6 py-3">Alerta / Barrera</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900">Sofía M.</td>
                <td className="px-6 py-4">Leucemia Linfoblástica Aguda</td>
                <td className="px-6 py-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">Tratamiento</span>
                </td>
                <td className="px-6 py-4 text-red-600 font-medium flex items-center gap-2">
                  <AlertTriangle size={16} /> Demora en autorización de medicamento
                </td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900">Mateo R.</td>
                <td className="px-6 py-4">Leucemia Mieloide Aguda</td>
                <td className="px-6 py-4">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-semibold">Diagnóstico</span>
                </td>
                <td className="px-6 py-4 text-orange-600 font-medium flex items-center gap-2">
                  <Clock size={16} /> Pendiente valoración Psicosocial
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Sub-componente para las tarjetas (Lo definimos en el mismo archivo para simplificar)
function KpiCard({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border flex items-center gap-4 hover:shadow-md transition-shadow">
      <div className="p-3 bg-blue-50 rounded-lg">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500 font-medium">{title}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
}