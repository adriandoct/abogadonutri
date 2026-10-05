'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  FileText, 
  Download, 
  Video, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  Scale, 
  Apple, 
  PlusCircle,
  XCircle
} from 'lucide-react';
import { MOCK_APPOINTMENTS, MOCK_CLIENT_RECORDS } from '@/lib/mock-data';
import { Appointment } from '@/types';

export default function ClientDashboardView() {
  const [appointments, setAppointments] = useState<Appointment[]>(MOCK_APPOINTMENTS.slice(0, 2));
  const records = MOCK_CLIENT_RECORDS;

  const cancelAppointment = (id: string) => {
    if (confirm('¿Estás seguro de que deseas cancelar esta cita?')) {
      setAppointments(prev => prev.map(a => a.id === id ? { ...a, status: 'cancelled' } : a));
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Client Welcome Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-legal-900 to-nutrition-900 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            Portal del Cliente / Paciente
          </span>
          <h2 className="text-2xl font-serif font-bold text-white mt-1">
            Bienvenido, Lic. Roberto Méndez
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            Desde este portal puedes consultar tus citas agendadas, ingresar a sesiones virtuales y descargar tus expedientes y planes nutricionales.
          </p>
        </div>

        <Link
          href="/agendar"
          className="shrink-0 inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-md transition-all"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Agendar Nueva Cita</span>
        </Link>
      </div>

      {/* Grid: Appointments & Records */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Citas Programadas */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-legal-700" />
              <span>Mis Citas Programadas</span>
            </h3>
            <span className="text-xs text-slate-500">{appointments.length} consultas</span>
          </div>

          <div className="space-y-3">
            {appointments.map((apt) => {
              const isLegal = apt.service?.category === 'legal';
              const isPending = apt.status === 'pending';
              const isConfirmed = apt.status === 'confirmed';
              const isCancelled = apt.status === 'cancelled';

              return (
                <div
                  key={apt.id}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-4"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex items-center space-x-1 ${
                          isLegal ? 'bg-legal-100 text-legal-800' : 'bg-nutrition-100 text-nutrition-800'
                        }`}>
                          {isLegal ? <Scale className="w-3 h-3" /> : <Apple className="w-3 h-3" />}
                          <span>{isLegal ? 'Derecho' : 'Nutrición'}</span>
                        </span>
                        
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          isConfirmed 
                            ? 'bg-emerald-100 text-emerald-800' 
                            : isPending 
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-rose-100 text-rose-800'
                        }`}>
                          {isConfirmed ? 'Confirmada' : isPending ? 'Pendiente' : 'Cancelada'}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 pt-1">
                        {apt.service?.title}
                      </h4>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-1">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{new Date(apt.start_time).toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'short' })}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{new Date(apt.start_time).toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })} hrs</span>
                        </div>
                      </div>
                    </div>

                    <span className="text-xs font-bold text-slate-900">
                      ${apt.service?.price.toLocaleString('es-MX')} MXN
                    </span>
                  </div>

                  {/* Meeting link / Actions */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    {apt.meeting_url && !isCancelled ? (
                      <a
                        href={apt.meeting_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700"
                      >
                        <Video className="w-3.5 h-3.5" />
                        <span>Entrar a Consulta Virtual</span>
                      </a>
                    ) : (
                      <span className="text-slate-400 text-[11px]">
                        {isCancelled ? 'Cita cancelada' : 'Modalidad presencial en consultorio'}
                      </span>
                    )}

                    {!isCancelled && (
                      <button
                        onClick={() => cancelAppointment(apt.id)}
                        className="inline-flex items-center space-x-1 text-slate-400 hover:text-rose-600 transition-colors"
                      >
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Cancelar Cita</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Expedientes y Documentos Descargables */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
              <FileText className="w-4 h-4 text-nutrition-700" />
              <span>Mis Expedientes & Documentos</span>
            </h3>
            <span className="text-xs text-slate-500">Confidencial</span>
          </div>

          <div className="space-y-3">
            {records.map((rec) => {
              const isLegal = rec.category === 'legal';
              return (
                <div
                  key={rec.id}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isLegal ? 'bg-legal-100 text-legal-800' : 'bg-nutrition-100 text-nutrition-800'
                      }`}>
                        {isLegal ? 'Documento Jurídico' : 'Plan Nutricional'}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 mt-2">
                        {rec.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {rec.content}
                  </p>

                  {/* Attachments */}
                  {rec.attachments && (
                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      {rec.attachments.map((file, i) => (
                        <a
                          key={i}
                          href={file.url}
                          onClick={(e) => {
                            e.preventDefault();
                            alert(`Descargando documento confidencial: ${file.name}`);
                          }}
                          className="flex items-center justify-between p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors"
                        >
                          <div className="flex items-center space-x-2 truncate">
                            <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span className="truncate">{file.name}</span>
                          </div>
                          <div className="flex items-center space-x-1.5 text-slate-400 shrink-0">
                            <span className="text-[10px]">{file.size}</span>
                            <Download className="w-3.5 h-3.5 text-legal-700" />
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
