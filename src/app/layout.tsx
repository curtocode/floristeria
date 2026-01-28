import type { Metadata } from "next";
// 1. Importamos las fuentes desde Google Fonts (incluido en Next.js)
import { Nunito, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

// 2. Configuramos Nunito (para Títulos)
const nunito = Nunito({ 
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["500", "600", "700", "800"], 
  display: 'swap',
});

// 3. Configuramos DM Sans (para Textos)
const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400"], 
});

export const metadata: Metadata = {
  title: "Dulces Pétalos",
  description: "Catálogo de flores",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      {/* 4. Inyectamos las variables en el body */}
      <body 
        className={`${nunito.variable} ${dmSans.variable} font-sans`}
        style={{
          width: '100%',
          minHeight: '100vh',
          background: '#F9F9F9',
          margin: 0,
          padding: 0,
          overflowX: 'hidden',
        }}
      >
        <Header />
        <main style={{ marginTop: '66px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}