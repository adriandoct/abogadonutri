'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Scale, 
  Apple, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  FileText, 
  HeartHandshake
} from 'lucide-react';

export default function DualHero() {
  const [activeTab, setActiveTab] = useState<'both' | 'legal' | 'nutrition'>('both');

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-legal-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-nutrition-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Interactive Mode Pill Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md shadow-lg">
            <button
              onClick={() => setActiveTab('both')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'both'
                  ? 'bg-gradient-to-r from-legal-800 to-nutrition-800 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <HeartHandshake className="w-4 h-4 text-amber-300" />
              <span>Visión Dual Integral</span>
            </button>
            <button
              onClick={() => setActiveTab('legal')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'legal'
                  ? 'bg-legal-700 text-white shadow-md'
                  : 'text-slate-400 hover:text-legal-300'
              }`}
            >
              <Scale className="w-4 h-4 text-blue-300" />
              <span>Área Jurídica</span>
            </button>
            <button
              onClick={() => setActiveTab('nutrition')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'nutrition'
                  ? 'bg-nutrition-700 text-white shadow-md'
                  : 'text-slate-400 hover:text-emerald-300'
              }`}
            >
              <Apple className="w-4 h-4 text-emerald-300" />
              <span>Área Nutrición</span>
            </button>
          </div>
        </div>

        {/* Central Content */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Subtle Tagline */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/60 text-xs font-medium text-slate-300">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Doble Cédula Profesional Federal | Atención Presencial & Online</span>
          </div>

          {/* Dynamic Headline depending on selected mode */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
            {activeTab === 'both' && (
              <>
                Defensa de tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-legal-200">Derechos</span> y Cuidado de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-nutrition-300">Salud Integral</span>
              </>
            )}
            {activeTab === 'legal' && (
              <>
                Estrategia Legal Rigurosa, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-legal-200">Certeza Jurídica & Blindaje Patrimonial</span>
              </>
            )}
            {activeTab === 'nutrition' && (
              <>
                Nutrición Clínica Basada en Ciencia, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-nutrition-300">Vitalidad & Salud Metabólica</span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            {activeTab === 'both' &&
              "Una práctica profesional única donde la ética y precisión jurídica convergen con la ciencia de la salud biológica. Diseñado para resolver controversias legales complejas y transformar la calidad de vida de mis pacientes."}
            {activeTab === 'legal' &&
              "Asesoría y representación en derecho corporativo, civil, familiar y regulatorio en salud. Blindamos tus intereses con ética intachable y solvencia técnica."}
            {activeTab === 'nutrition' &&
              "Planes dietoterapéuticos individualizados para diabetes, hipertensión, recomposición corporal y rendimiento deportivo. Sin dietas mágicas, con resultados medibles."}
          </p>

          {/* Main CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/agendar"
              className="w-full sm:w-auto flex items-center justify-center space-x-2.5 px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20 hover:scale-[1.02] hover:shadow-amber-500/30 transition-all duration-200"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Agendar Consulta de Valoración</span>
            </Link>

            <Link
              href="/servicios?cat=legal"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-800/90 text-slate-200 border border-slate-700 hover:bg-slate-700/80 hover:text-white transition-all"
            >
              <Scale className="w-4 h-4 text-blue-300" />
              <span>Servicios Legales</span>
            </Link>

            <Link
              href="/servicios?cat=nutrition"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-800/90 text-slate-200 border border-slate-700 hover:bg-slate-700/80 hover:text-white transition-all"
            >
              <Apple className="w-4 h-4 text-emerald-300" />
              <span>Servicios de Nutrición</span>
            </Link>
          </div>

          {/* Quick Pillars Grid (Inspired by medical hero cards) */}
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
            
            {/* Card 1: Legal */}
            <div className={`p-6 rounded-2xl border transition-all duration-300 ${
              activeTab === 'legal' || activeTab === 'both'
                ? 'bg-slate-800/70 border-legal-600/40 shadow-lg shadow-legal-900/30'
                : 'bg-slate-800/30 border-slate-700/40 opacity-60'
            }`}>
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2.5 rounded-xl bg-legal-950/80 border border-legal-700/50 text-blue-300">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">Área Jurídica</h2>
                  <span className="text-[11px] text-legal-300 font-medium">Litigio, Contratos & Sanitario</span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Protección patrimonial, litigio estratégico y asesoría especializada en normativa sanitaria COFEPRIS para consultorios.
              </p>
              <Link
                href="/servicios?cat=legal"
                className="mt-4 inline-flex items-center text-xs font-semibold text-blue-300 hover:text-blue-200 group"
              >
                <span>Conocer servicios legales</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 2: Nutrición */}
            <div className={`p-6 rounded-2xl border transition-all duration-300 ${
              activeTab === 'nutrition' || activeTab === 'both'
                ? 'bg-slate-800/70 border-nutrition-600/40 shadow-lg shadow-nutrition-900/30'
                : 'bg-slate-800/30 border-slate-700/40 opacity-60'
            }`}>
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2.5 rounded-xl bg-nutrition-950/80 border border-nutrition-700/50 text-emerald-300">
                  <Apple className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">Área Nutrición</h2>
                  <span className="text-[11px] text-nutrition-300 font-medium">Clínica, Síndrome Metabólico & Deporte</span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Diagnóstico por bioimpedancia, manejo de diabetes, resistencia a la insulina y planes de recomposición muscular sin mitos.
              </p>
              <Link
                href="/servicios?cat=nutrition"
                className="mt-4 inline-flex items-center text-xs font-semibold text-emerald-300 hover:text-emerald-200 group"
              >
                <span>Conocer servicios de nutrición</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 3: Por qué la dualidad */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-amber-500/30 shadow-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2.5 rounded-xl bg-amber-950/70 border border-amber-600/40 text-amber-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">Garantía Profesional</h2>
                  <span className="text-[11px] text-amber-300 font-medium">Validez legal & rigor científico</span>
                </div>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Doble titulación y cédula profesional</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Confidencialidad amparada por secreto profesional</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Seguimiento continuo y expediente digital</span>
                </li>
              </ul>
              <Link
                href="/nosotros"
                className="mt-4 inline-flex items-center text-xs font-semibold text-amber-300 hover:text-amber-200 group"
              >
                <span>Ver perfil y credenciales</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          {/* Social Proof Bar */}
          <div className="pt-10 border-t border-slate-800 flex flex-wrap items-center justify-around gap-6 text-slate-400 text-xs">
            <div className="flex items-center space-x-2">
              <span className="text-white font-bold text-base">12+</span>
              <span>Años de Práctica Profesional</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-white font-bold text-base">1,500+</span>
              <span>Casos Jurídicos Resueltos</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-white font-bold text-base">2,800+</span>
              <span>Pacientes en Control Nutricional</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-white font-bold text-base">100%</span>
              <span>Atención Confidencial</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
