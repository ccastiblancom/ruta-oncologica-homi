// components/LayoutWrapper.tsx
"use client";

import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import PortalNav from './PortalNav'; // Importamos el nuevo menú del portal
import { UserRole } from '@/lib/config';

export default function LayoutWrapper({ children, role }: { children: React.ReactNode, role: UserRole }) {
  const pathname = usePathname();
  const esPortalFamiliar = pathname?.startsWith('/portal');

  // 1. VISTA PORTAL FAMILIAR: Contenedor tipo "Móvil"
  if (esPortalFamiliar) {
    return (
      <div className="bg-gray-200 h-screen w-full flex justify-center overflow-hidden">
        {/* Pantalla del celular (max-w-md) */}
        <div className="w-full max-w-md bg-gray-50 h-full flex flex-col relative shadow-2xl">
          
          {/* Área de contenido con scroll libre */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            {children}
          </div>

          {/* Menú inferior anclado obligatoriamente abajo */}
          <PortalNav />

        </div>
      </div>
    );
  }

  // 2. VISTA ADMINISTRATIVA INTERNA
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden w-full">
      <Sidebar currentRole={role} />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto flex flex-col relative">
          <div className="p-8 flex-1">
            {children}
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}