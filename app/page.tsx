// app/page.tsx
import Link from "next/link";
import { Heart, ShieldCheck } from "lucide-react";

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans">
      
      {/* Contenedor Principal */}
      <div className="max-w-3xl w-full bg-white rounded-[2.5rem] shadow-xl p-10 md:p-16 text-center border border-slate-100">
        
        {/* Logo HOMI */}
        <img
          src="/logo-homi.png"
          alt="Fundación HOMI"
          className="h-16 mx-auto mb-8 object-contain"
        />
        
        <h1 className="text-3xl md:text-4xl font-black text-[#1e3a8a] mb-3 tracking-tight">
          Navegación Oncológica
        </h1>
        <p className="text-slate-500 mb-12 font-medium">
          Selecciona tu portal de acceso para continuar
        </p>

        {/* Tarjetas de Acceso */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Botón: Portal Familiar */}
          <Link 
            href="/portal/inicio" 
            className="group bg-teal-50 hover:bg-teal-100/80 border-2 border-teal-100 hover:border-teal-300 rounded-3xl p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="bg-white w-20 h-20 rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Heart size={36} className="text-teal-500 fill-teal-100" />
            </div>
            <h2 className="text-xl font-black text-teal-900 mb-2">Portal Familiar</h2>
            <p className="text-sm text-teal-700 font-medium">
              Acceso para pacientes y sus familias al plan de tratamiento.
            </p>
          </Link>

          {/* Botón: Módulo Interno / Administrativo */}
          <Link 
            href="/pedsql" // Lo mandamos a PedsQL por ahora, o cámbialo a tu dashboard principal
            className="group bg-blue-50 hover:bg-blue-100/80 border-2 border-blue-100 hover:border-blue-300 rounded-3xl p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="bg-white w-20 h-20 rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck size={36} className="text-blue-600" />
            </div>
            <h2 className="text-xl font-black text-[#1e3a8a] mb-2">Panel Médico</h2>
            <p className="text-sm text-blue-700 font-medium">
              Gestión interna para navegadores y equipo médico.
            </p>
          </Link>

        </div>
      </div>

      {/* Footer simple de la landing */}
      <p className="text-xs text-slate-400 font-bold tracking-widest uppercase mt-12">
        &copy; {new Date().getFullYear()} HOMI • Todos los derechos reservados
      </p>
    </div>
  );
}