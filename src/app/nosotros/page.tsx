import React from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  Award, 
  ShieldCheck, 
  Scale, 
  Apple, 
  CheckCircle2, 
  Heart, 
  BookOpen, 
  Calendar 
} from 'lucide-react';

export const metadata = {
  title: 'Nosotros | Perfil del Lic. & Nut. Carlos E. Morales',
  description: 'Conoce la trayectoria académica y profesional dual del Licenciado en Derecho y Nutriólogo Clínico Carlos E. Morales en Oaxaca.',
};

export default function NosotrosPage() {
  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Breadcrumb & Title */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-slate-700 uppercase bg-white px-3.5 py-1.5 rounded-full border border-slate-200">
            Sobre el Especialista
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Ética Jurídica y Ciencia de la Salud <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-legal-800 to-nutrition-800">
              unidas por tu bienestar
            </span>
          </h1>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Una trayectoria forjada en dos facultades complementarias con el objetivo de brindar certidumbre legal y salud metabólica integral.
          </p>
        </div>

        {/* Dual Accreditation Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card Legal */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-legal-800" />
            <div className="w-12 h-12 rounded-2xl bg-legal-50 text-legal-800 flex items-center justify-center mb-6 border border-legal-100">
              <Scale className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-serif font-bold text-slate-900">
              Formación Jurídica & Litigio
            </h2>
            <div className="mt-3 space-y-1 text-xs text-slate-500">
              <p className="font-semibold text-slate-700">Licenciado en Derecho</p>
              <p>Cédula Profesional Federal: <strong>D-8472910</strong></p>
              <p>Especialización en Derecho Civil, Corporativo y Regulación Sanitaria COFEPRIS</p>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Con más de 12 años asesorando a empresas, consultorios médicos y particulares. Mi enfoque prioriza la prevención de litigios mediante contratos blindados y la defensa estratégica implacable ante tribunales.
            </p>
          </div>

          {/* Card Nutrition */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-nutrition-800" />
            <div className="w-12 h-12 rounded-2xl bg-nutrition-50 text-nutrition-800 flex items-center justify-center mb-6 border border-nutrition-100">
              <Apple className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-serif font-bold text-slate-900">
              Formación Clínica & Nutrición
            </h2>
            <div className="mt-3 space-y-1 text-xs text-slate-500">
              <p className="font-semibold text-slate-700">Licenciado en Nutrición Clínica</p>
              <p>Cédula Profesional Federal: <strong>N-6184902</strong></p>
              <p>Diplomado en Dietoterapia de Síndrome Metabólico y Antropometría ISAK</p>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tratamiento riguroso basado en evidencia científica y fisiología metabólica. Mi objetivo es guiar a mis pacientes a remisiones de resistencia a la insulina, control glucémico y vitalidad física duradera sin recurrir a dietas insostenibles.
            </p>
          </div>

        </div>

        {/* Philosophy & Code of Ethics */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 shadow-xl">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <ShieldCheck className="w-12 h-12 text-amber-400 mx-auto" />
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Nuestros Principios y Compromiso Deontológico
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Toda consulta, ya sea jurídica o clínica, está regida por los más altos estándares éticos de confidencialidad, secreto profesional y respeto irrestricto a los derechos humanos del paciente y cliente.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-left">
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                <span className="text-amber-400 font-bold text-sm block mb-1">1. Secreto Profesional</span>
                <p className="text-xs text-slate-400">
                  Toda tu información personal, patrimonial o médica permanece estrictamente confidencial.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                <span className="text-amber-400 font-bold text-sm block mb-1">2. Ciencia & Verdad</span>
                <p className="text-xs text-slate-400">
                  Sin promesas infundadas en litigios ni soluciones milagro en nutrición: diagnósticos honestos y medibles.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                <span className="text-amber-400 font-bold text-sm block mb-1">3. Calidez Humana</span>
                <p className="text-xs text-slate-400">
                  Escucha activa y empatía para entender las circunstancias particulares de cada persona.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="/agendar"
                className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-amber-400 hover:bg-amber-500 text-slate-950 shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Agendar una Consulta</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
