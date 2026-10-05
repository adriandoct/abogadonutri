import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Lic. & Nut. Morales | Abogado & Nutriólogo Clínico',
  description: 'Práctica profesional integral que combina el rigor del derecho civil, laboral y sanitario con la ciencia clínica de la nutrición metabólica. Agenda tu consulta presencial u online.',
  keywords: [
    'Abogado',
    'Nutriólogo',
    'Derecho Sanitario',
    'COFEPRIS',
    'Nutrición Clínica',
    'Diabetes',
    'Contratos',
    'Oaxaca',
    'Consultoría Legal'
  ],
  authors: [{ name: 'Lic. & Nut. Carlos E. Morales' }],
  openGraph: {
    title: 'Lic. & Nut. Morales | Abogado & Nutriólogo Clínico',
    description: 'Defensa de tus derechos y cuidado de tu salud integral en una sola práctica profesional de excelencia.',
    type: 'website',
    locale: 'es_MX',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-amber-100 selection:text-amber-900">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
