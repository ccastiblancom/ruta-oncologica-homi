// components/Header.tsx
"use client";

import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  // Diccionario para mapear la URL actual al nombre profesional del módulo
  const nombresModulos: Record<string, string> = {
    '/torre-control': 'Torre de Control',
    '/registro': 'Registro de Pacientes',
    '/bandeja': 'Bandeja de Navegación',
    '/alertas': 'Centro de Alertas',
    '/tareas': 'Gestión de Tareas',
    '/dashboard': 'Dashboard de Indicadores (KPI)',
    '/catalogos': 'Configuración de Catálogos',
    '/sistema': 'Configuración del Sistema',
    '/pedsql': 'Evaluación Instrumento Calidad de Vida (PedsQL)'
  };

  // Buscamos el nombre del módulo actual.
  const moduloActual = nombresModulos[pathname] || 'Panel de Gestión';

  return (
    <header className="h-24 bg-white border-b flex items-center px-8 justify-between shadow-sm shrink-0 z-10">
      
      {/* Espacio izquierdo para balance (invisible) */}
      <div className="w-12"></div>

      {/* Título y Subtítulo Centrados */}
      <div className="flex flex-col items-center justify-center flex-1 text-center">
        <h1 
          className="text-3xl font-black uppercase tracking-[0.2em]" 
          style={{ color: '#324D6D' }}
        >
          Ruta Oncológica
        </h1>
        <h2 className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mt-1">
          {moduloActual}
        </h2>
      </div>

      {/* Avatar de Usuario (Derecha) */}
      <div className="flex items-center gap-4">
        <span 
          className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center font-bold border shadow-sm"
          style={{ color: '#324D6D', borderColor: '#324D6D' }}
        >
          CM
        </span>
      </div>
    </header>
  );
}