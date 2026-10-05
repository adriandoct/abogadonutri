import React from 'react';
import Link from 'next/link';
import { 
  CheckCircle, 
  CalendarCheck, 
  UserCheck, 
  Layers, 
  FileCheck, 
  ArrowRight 
} from 'lucide-react';

export default function BookingStepGuide() {
  const steps = [
    {
      num: '01',
      icon: Layers,
      title: 'Elige tu Especialidad',
      desc: 'Selecciona entre el Área Legal o el Área de Nutrición según tus requerimientos.'
    },
    {
      num: '02',
      icon: FileCheck,
      title: 'Selecciona el Servicio',
      desc: 'Revisa duración, qué incluye y tarifa transparente sin cobros ocultos.'
    },
    {
      num: '03',
      icon: CalendarCheck,
      title: 'Fecha y Hora en Tiempo Real',
      desc: 'Elige el espacio disponible en la agenda del especialista que mejor se adapte a ti.'
    },
    {
      num: '04',
      icon: UserCheck,
      title: 'Datos de Contacto',
      desc: 'Ingresa tus datos básicos o inicia sesión para asociar tu expediente digital.'
    },
    {
      num: '05',
      icon: CheckCircle,
      title: 'Confirmación Inmediata',
      desc: 'Recibe detalles por correo, recordatorio por WhatsApp y tu enlace de videollamada si es online.'
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-legal-700 uppercase bg-legal-50 px-3.5 py-1.5 rounded-full border border-legal-100">
            Proceso de Cita Simple
          </span>
          <h2 className="mt-3 text-3xl font-serif font-bold text-slate-900 tracking-tight">
            ¿Cómo agendar tu consulta con el especialista?
          </h2>
          <p className="mt-3 text-slate-600 text-sm">
            Diseñamos un flujo intuitivo y automatizado para que programes tu sesión en menos de 2 minutos.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-md mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-1">
                  Paso {step.num}
                </span>
                <h3 className="text-sm font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <Link
            href="/agendar"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-legal-900 to-nutrition-900 text-white shadow-md hover:shadow-lg hover:opacity-95 transition-all"
          >
            <span>Iniciar Reserva de Cita Ahora</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
