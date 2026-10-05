'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import AppointmentBookingFlow from '@/components/booking/AppointmentBookingFlow';
import { ServiceCategory } from '@/types';
import { ShieldCheck, Phone, Clock, MapPin } from 'lucide-react';

function BookingContent() {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get('serviceId') || undefined;
  const categoryParam = searchParams.get('category') as ServiceCategory | null;
  const initialCategory: ServiceCategory = categoryParam === 'nutrition' ? 'nutrition' : 'legal';

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Info Banner */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-slate-700 uppercase bg-white px-3.5 py-1.5 rounded-full border border-slate-200">
            Agenda en Línea
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Programa tu Consulta Profesional
          </h1>
          <p className="mt-2 text-slate-600 text-xs sm:text-sm">
            Disponibilidad en tiempo real para sesiones presenciales en Oaxaca o videollamadas virtuales.
          </p>
        </div>

        {/* Wizard Container */}
        <AppointmentBookingFlow 
          initialServiceId={serviceId} 
          initialCategory={initialCategory} 
        />

        {/* Support & Help Footer */}
        <div className="max-w-3xl mx-auto pt-6 text-center text-xs text-slate-500 flex flex-wrap justify-center items-center gap-6">
          <div className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Reserva segura y encriptada</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Phone className="w-4 h-4 text-slate-400" />
            <span>¿Dudas para agendar? Tel: +52 (951) 123-4567</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Clock className="w-4 h-4 text-amber-500" />
            <span>Cancelación gratuita hasta 24h antes</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function AgendarPage() {
  return (
    <Suspense fallback={
      <div className="py-20 text-center text-slate-500 text-sm">
        Cargando sistema de citas...
      </div>
    }>
      <BookingContent />
    </Suspense>
  );
}
