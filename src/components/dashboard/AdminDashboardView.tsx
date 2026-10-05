'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  Users, 
  DollarSign, 
  Scale, 
  Apple, 
  CheckCircle, 
  XCircle, 
  Filter, 
  FileText, 
  Plus, 
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { MOCK_APPOINTMENTS, MOCK_SERVICES } from '@/lib/mock-data';
import { Appointment, AppointmentStatus, ServiceCategory } from '@/types';

export default function AdminDashboardView() {
  const [appointments, setAppointments] = useState<Appointment[]>(MOCK_APPOINTMENTS);
  const [categoryFilter, setCategoryFilter] = useState<'all' | ServiceCategory>('all');
  const [activeTab, setActiveTab] = useState<'citas' | 'expedientes' | 'disponibilidad' | 'blog'>('citas');

  const filteredAppointments = appointments.filter(a => {
    if (categoryFilter === 'all') return true;
    return a.service?.category === categoryFilter;
  });

  const updateStatus = (id: string, newStatus: AppointmentStatus) => {
    setAppointments(prev => prev.map(a => a.id === id ? { ...a, status: newStatus } : a));
  };

  const totalRevenue = appointments
    .filter(a => a.status === 'confirmed' || a.status === 'completed')
    .reduce((sum, a) => sum + (a.service?.price || 0), 0);

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Top Welcome & Metrics Bar */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
              Panel Administrativo Central • Rol: Admin Titular
            </span>
            <h2 className="text-2xl font-serif font-bold text-white mt-1">
              Lic. & Nut. Carlos E. Morales
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Control de agenda clínica y jurídica, expedientes de pacientes y publicación de contenidos.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="/agendar"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Nueva Cita Manual</span>
            </Link>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60">
            <div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
              <Calendar className="w-3.5 h-3.5 text-legal-300" />
              <span>Citas Programadas</span>
            </div>
            <span className="text-2xl font-bold text-white">{appointments.length}</span>
            <span className="text-[10px] text-emerald-400 block mt-1">+2 nuevas hoy</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60">
            <div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
              <Scale className="w-3.5 h-3.5 text-blue-400" />
              <span>Área Jurídica</span>
            </div>
            <span className="text-2xl font-bold text-white">
              {appointments.filter(a => a.service?.category === 'legal').length}
            </span>
            <span className="text-[10px] text-slate-400 block mt-1">Casos activos</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60">
            <div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
              <Apple className="w-3.5 h-3.5 text-nutrition-400" />
              <span>Área Nutrición</span>
            </div>
            <span className="text-2xl font-bold text-white">
              {appointments.filter(a => a.service?.category === 'nutrition').length}
            </span>
            <span className="text-[10px] text-slate-400 block mt-1">Pacientes en control</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60">
            <div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
              <DollarSign className="w-3.5 h-3.5 text-amber-400" />
              <span>Honorarios Estimados</span>
            </div>
            <span className="text-2xl font-bold text-white">
              ${totalRevenue.toLocaleString('es-MX')}
            </span>
            <span className="text-[10px] text-slate-400 block mt-1">Semana actual MXN</span>
          </div>
        </div>

      </div>

      {/* Admin Tabs */}
      <div className="flex border-b border-slate-200 space-x-6 text-sm">
        <button
          onClick={() => setActiveTab('citas')}
          className={`pb-3 font-bold transition-all relative ${
            activeTab === 'citas'
              ? 'text-slate-900 border-b-2 border-slate-900'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Agenda & Citas ({filteredAppointments.length})
        </button>

        <button
          onClick={() => setActiveTab('expedientes')}
          className={`pb-3 font-bold transition-all relative ${
            activeTab === 'expedientes'
              ? 'text-slate-900 border-b-2 border-slate-900'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Expedientes Clínicos & Legales
        </button>

        <button
          onClick={() => setActiveTab('disponibilidad')}
          className={`pb-3 font-bold transition-all relative ${
            activeTab === 'disponibilidad'
              ? 'text-slate-900 border-b-2 border-slate-900'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Horarios de Disponibilidad
        </button>

        <button
          onClick={() => setActiveTab('blog')}
          className={`pb-3 font-bold transition-all relative ${
            activeTab === 'blog'
              ? 'text-slate-900 border-b-2 border-slate-900'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Gestor del Blog
        </button>
      </div>

      {/* TAB 1: CITAS */}
      {activeTab === 'citas' && (
        <div className="space-y-4">
          
          {/* Filters Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-bold text-slate-700">Filtrar por especialidad:</span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCategoryFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  categoryFilter === 'all'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Todas las áreas
              </button>
              <button
                onClick={() => setCategoryFilter('legal')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  categoryFilter === 'legal'
                    ? 'bg-legal-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Scale className="w-3.5 h-3.5 text-blue-300" />
                <span>Solo Legal</span>
              </button>
              <button
                onClick={() => setCategoryFilter('nutrition')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  categoryFilter === 'nutrition'
                    ? 'bg-nutrition-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Apple className="w-3.5 h-3.5 text-emerald-300" />
                <span>Solo Nutrición</span>
              </button>
            </div>
          </div>

          {/* Appointments Table / Cards */}
          <div className="space-y-3">
            {filteredAppointments.map((apt) => {
              const isLegal = apt.service?.category === 'legal';
              return (
                <div
                  key={apt.id}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                >
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center space-x-1 ${
                        isLegal ? 'bg-legal-100 text-legal-800' : 'bg-nutrition-100 text-nutrition-800'
                      }`}>
                        {isLegal ? <Scale className="w-3 h-3" /> : <Apple className="w-3 h-3" />}
                        <span>{isLegal ? 'Área Legal' : 'Área Nutrición'}</span>
                      </span>

                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        apt.status === 'confirmed' 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : apt.status === 'pending'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-rose-100 text-rose-800'
                      }`}>
                        {apt.status === 'confirmed' ? 'Confirmada' : apt.status === 'pending' ? 'Por Confirmar' : 'Cancelada'}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-slate-900">
                        {apt.client_name}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {apt.client_email} • {apt.client_phone}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1">
                      <span className="font-semibold text-slate-800">
                        Servicio: {apt.service?.title}
                      </span>
                      <div className="flex items-center space-x-1 text-slate-500">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{new Date(apt.start_time).toLocaleDateString('es-MX', { weekday: 'short', day: 'numeric', month: 'short' })}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-slate-500">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{new Date(apt.start_time).toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })} hrs</span>
                      </div>
                    </div>

                    {apt.client_notes && (
                      <p className="text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 text-slate-600 max-w-2xl">
                        <strong>Nota del cliente:</strong> "{apt.client_notes}"
                      </p>
                    )}
                  </div>

                  {/* Status Actions */}
                  <div className="flex flex-col sm:flex-row items-end lg:items-center space-y-2 sm:space-y-0 sm:space-x-2 shrink-0">
                    {apt.status === 'pending' && (
                      <button
                        onClick={() => updateStatus(apt.id, 'confirmed')}
                        className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all"
                      >
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Confirmar Cita</span>
                      </button>
                    )}

                    {apt.status === 'confirmed' && (
                      <button
                        onClick={() => updateStatus(apt.id, 'completed')}
                        className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-900 text-white transition-all"
                      >
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Marcar Completada</span>
                      </button>
                    )}

                    {apt.status !== 'cancelled' && (
                      <button
                        onClick={() => updateStatus(apt.id, 'cancelled')}
                        className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-all"
                      >
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Rechazar / Cancelar</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* TAB 2: EXPEDIENTES */}
      {activeTab === 'expedientes' && (
        <div className="p-8 rounded-3xl bg-white border border-slate-200 text-center space-y-4">
          <FileText className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-slate-900">Gestor de Expedientes Clínicos y Legales</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Crea notas clínicas con bioimpedancia, analíticas de sangre o dictámenes jurídicos confidenciales asociados al perfil de cada cliente.
          </p>
          <button 
            onClick={() => alert("Abriendo modal para agregar expediente confidencial...")}
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800"
          >
            + Crear Nuevo Expediente de Cliente
          </button>
        </div>
      )}

      {/* TAB 3: DISPONIBILIDAD */}
      {activeTab === 'disponibilidad' && (
        <div className="p-8 rounded-3xl bg-white border border-slate-200 text-center space-y-4">
          <Clock className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-slate-900">Configuración de Horarios de Consulta</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Configura los turnos matutinos y vespertinos para el área legal y el área de nutrición sincronizados con la tabla <code>public.availability</code>.
          </p>
          <div className="inline-flex space-x-2 text-xs font-semibold text-slate-700 bg-slate-100 p-2 rounded-xl">
            <span>Lun a Vie: 9:00 - 14:00 (Legal)</span>
            <span>•</span>
            <span>Lun a Vie: 16:00 - 20:00 (Nutrición)</span>
          </div>
        </div>
      )}

      {/* TAB 4: BLOG */}
      {activeTab === 'blog' && (
        <div className="p-8 rounded-3xl bg-white border border-slate-200 text-center space-y-4">
          <BookOpen className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-slate-900">Editor & Publicador de Artículos</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Redacta y publica nuevos artículos especializados en Derecho, Nutrición o Salud y Sociedad.
          </p>
          <button 
            onClick={() => alert("Abriendo editor Markdown de nuevo post...")}
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800"
          >
            + Redactar Nuevo Artículo
          </button>
        </div>
      )}

    </div>
  );
}
