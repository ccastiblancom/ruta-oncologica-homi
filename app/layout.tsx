// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Navegación Oncológica - HOMI",
  description: "Plataforma de seguimiento clínico y navegación de pacientes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* CORRECCIÓN: El body ahora es libre, sin bloqueos de scroll */}
      <body className={`${inter.className} bg-slate-50 text-slate-800`}>
        <LayoutWrapper role="Administrador">
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}