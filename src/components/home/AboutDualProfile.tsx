import React from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  Award, 
  ShieldCheck, 
  Scale, 
  Apple, 
  CheckCircle2, 
  FileCheck2, 
  ArrowRight 
} from 'lucide-react';

export default function AboutDualProfile() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-legal-700 uppercase bg-legal-50 px-3.5 py-1.5 rounded-full border border-legal-100">
            Perfil Profesional Dual
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Una sinergia única: <br />
            <span className="text-legal-900">Defensa Jurídica Estratégica</span> y <span className="text-nutrition-800">Ciencia Nutricional Clínica</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            La salud de una persona no solo reside en sus parámetros biológicos, sino también en la tranquilidad jurídica de su patrimonio y sus derechos. Conoce la visión del Lic. & Nut. Carlos E. Morales.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden bg-slate-900 text-white shadow-2xl border border-slate-800 p-8">
              
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-legal-500 via-amber-400 to-nutrition-500" />
              
              {/* Badge & Avatar simulation */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-legal-800 to-nutrition-800 p-1 flex items-center justify-center shadow-inner">
                  <div className="w-full h-full rounded-xl bg-slate-950 flex items-center justify-center text-white">
                    <span className="font-serif text-2xl font-bold tracking-tighter">CM</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Lic. & Nut. Carlos E. Morales</h3>
                  <p className="text-xs text-amber-300 font-medium">Especialista en Derecho Sanitario & Nutrición Clínica</p>
                  <div className="flex items-center space-x-2 mt-1 text-[11px] text-slate-400">
                    <span>Oaxaca, México</span>
                    <span>•</span>
                    <span className="text-emerald-400">Consultas Presenciales & Online</span>
                  </div>
                </div>
              </div>

              {/* Verified Credentials Box */}
              <div className="space-y-3 p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 mb-6">
                <div className="flex items-start space-x-3 text-xs">
                  <GraduationCap className="w-4 h-4 text-legal-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Licenciado en Derecho</span>
                    <span className="text-slate-400">Facultad de Derecho | Cédula Prof. Fed. D-8472910</span>
                  </div>
                </div>

                <div className="h-px bg-slate-700/60" />

                <div className="flex items-start space-x-3 text-xs">
                  <Award className="w-4 h-4 text-nutrition-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Licenciado en Nutrición Clínica</span>
                    <span className="text-slate-400">Facultad de Medicina y Nutrición | Cédula Prof. Fed. N-6184902</span>
                  </div>
                </div>

                <div className="h-px bg-slate-700/60" />

                <div className="flex items-start space-x-3 text-xs">
                  <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Acreditación Sanitaria COFEPRIS</span>
                    <span className="text-slate-400">Consultorio Registrado | Reg. Sanitario 23-OAX-991</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-xs italic text-slate-300 border-l-2 border-amber-400 pl-3 py-1">
                "La justicia protege tu futuro y la nutrición asegura tu presente. Ningún proyecto prospera si descuidamos la salud o dejamos desprotegidos nuestros derechos."
              </blockquote>

              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-400">Colegiado Activo</span>
                <span className="text-emerald-400 font-semibold flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Citas Disponibles Esta Semana</span>
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Values & Differentiator */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-nutrition-700">
                ¿Por qué una práctica interdisciplinaria?
              </span>
              <h3 className="mt-1 text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                La certeza de la ley y la precisión de la ciencia en un solo lugar
              </h3>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                A lo largo de más de una década de trayectoria, descubrí que las familias y los profesionales independientes enfrentan problemáticas donde la salud y el derecho se entrelazan: médicos que requieren blindar su práctica clínica, emprendedores de alimentos que necesitan cumplir con regulaciones sanitarias de COFEPRIS, o personas que buscan recuperar su vitalidad física mientras resuelven un conflicto patrimonial.
              </p>
            </div>

            {/* Value Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-legal-300 transition-all">
                <div className="flex items-center space-x-2.5 mb-2 text-legal-800">
                  <Scale className="w-4 h-4" />
                  <h4 className="font-bold text-sm text-slate-900">Rigor Ético y Jurídico</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Defensa transparente, análisis objetivo de riesgos y confidencialidad absoluta protegida por el secreto profesional de la abogacía.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-nutrition-300 transition-all">
                <div className="flex items-center space-x-2.5 mb-2 text-nutrition-800">
                  <Apple className="w-4 h-4" />
                  <h4 className="font-bold text-sm text-slate-900">Evidencia Científica</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dietoterapia individualizada sustentada en analíticas clínicas y fisiología, erradicando mitos y protocolos sin aval científico.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-amber-300 transition-all">
                <div className="flex items-center space-x-2.5 mb-2 text-amber-700">
                  <FileCheck2 className="w-4 h-4" />
                  <h4 className="font-bold text-sm text-slate-900">Expediente Centralizado</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Acceso a tu portal de cliente con historial de consultas, menús descargables o documentos legales firmados con seguridad cifrada.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all">
                <div className="flex items-center space-x-2.5 mb-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4" />
                  <h4 className="font-bold text-sm text-slate-900">Atención Personalizada</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sin intermediarios. Cada caso legal y cada plan de nutrición es gestionado y atendido directamente por el especialista titular.
                </p>
              </div>

            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/agendar"
                className="px-6 py-3 rounded-xl text-xs font-bold bg-legal-900 text-white hover:bg-legal-800 shadow-sm transition-all"
              >
                Agendar con el Especialista
              </Link>
              <Link
                href="/nosotros"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-legal-800 hover:text-legal-950 group"
              >
                <span>Leer biografía y formación completa</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
