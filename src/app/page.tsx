import React from 'react';
import DualHero from '@/components/home/DualHero';
import AboutDualProfile from '@/components/home/AboutDualProfile';
import ServicesSection from '@/components/home/ServicesSection';
import BookingStepGuide from '@/components/home/BookingStepGuide';
import Testimonials from '@/components/home/Testimonials';
import DualBlogPreview from '@/components/home/DualBlogPreview';
import Link from 'next/link';
import { Phone, MessageSquare, MapPin, Calendar, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section with dual value proposition & specialty toggle */}
      <DualHero />

      {/* 2. Professional Profile & Credentials */}
      <AboutDualProfile />

      {/* 3. Services with dual tabs (Legal vs Nutrition) */}
      <ServicesSection />

      {/* 4. 5-Step Booking Guide */}
      <BookingStepGuide />

      {/* 5. Patient & Client Testimonials */}
      <Testimonials />

      {/* 6. Blog Preview */}
      <DualBlogPreview />

      {/* 7. Immediate Action / Urgencias & Contact Banner */}
      <section className="bg-slate-900 text-white py-16 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-3xl bg-gradient-to-r from-legal-950 via-slate-900 to-nutrition-950 p-8 sm:p-12 border border-slate-700/60 shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Atención Profesional Oportuna</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                ¿Tienes un asunto jurídico urgente o requieres asesoría nutricional inmediata?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Estamos a tu disposición en nuestro consultorio en Oaxaca o vía remota por videollamada para clientes de toda la República Mexicana.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href="https://wa.me/529511234567?text=Hola,%20requiero%20asesoría%20con%20el%20Lic.%20y%20Nut.%20Morales"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-900/30 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Escribir por WhatsApp</span>
              </a>

              <Link
                href="/agendar"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-amber-400 hover:bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 transition-all"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Agendar Consulta</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
