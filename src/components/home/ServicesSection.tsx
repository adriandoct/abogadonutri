'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Scale, 
  Apple, 
  Clock, 
  Check, 
  ArrowRight, 
  Calendar,
  Sparkles,
  Search
} from 'lucide-react';
import { MOCK_SERVICES } from '@/lib/mock-data';
import { ServiceCategory } from '@/types';

interface ServicesSectionProps {
  initialCategory?: ServiceCategory;
  showSearch?: boolean;
}

export default function ServicesSection({ 
  initialCategory = 'legal',
  showSearch = false 
}: ServicesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = MOCK_SERVICES.filter(service => {
    const matchesCategory = service.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="servicios" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-slate-700 uppercase bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm">
            Especialidades & Consultas
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Servicios Profesionales de Excelencia
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Selecciona el área de tu interés para explorar nuestras modalidades de atención con tarifas transparentes y tiempos de consulta definidos.
          </p>

          {/* Interactive Dual Tabs */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <button
                onClick={() => setSelectedCategory('legal')}
                className={`flex items-center space-x-2.5 px-6 py-3 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 ${
                  selectedCategory === 'legal'
                    ? 'bg-legal-900 text-white shadow-md'
                    : 'text-slate-600 hover:text-legal-900 hover:bg-slate-50'
                }`}
              >
                <Scale className={`w-4 h-4 ${selectedCategory === 'legal' ? 'text-blue-300' : 'text-slate-400'}`} />
                <span>Área Legal & Sanitaria</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  selectedCategory === 'legal' ? 'bg-legal-800 text-blue-200' : 'bg-slate-100 text-slate-500'
                }`}>
                  4 servicios
                </span>
              </button>

              <button
                onClick={() => setSelectedCategory('nutrition')}
                className={`flex items-center space-x-2.5 px-6 py-3 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 ${
                  selectedCategory === 'nutrition'
                    ? 'bg-nutrition-900 text-white shadow-md'
                    : 'text-slate-600 hover:text-nutrition-900 hover:bg-slate-50'
                }`}
              >
                <Apple className={`w-4 h-4 ${selectedCategory === 'nutrition' ? 'text-emerald-300' : 'text-slate-400'}`} />
                <span>Área de Nutrición Clínica</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  selectedCategory === 'nutrition' ? 'bg-nutrition-800 text-emerald-200' : 'bg-slate-100 text-slate-500'
                }`}>
                  4 servicios
                </span>
              </button>
            </div>
          </div>

          {/* Optional Search Bar */}
          {showSearch && (
            <div className="mt-6 max-w-md mx-auto relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por servicio, trámite o condición..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
              />
            </div>
          )}

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => {
            const isLegal = service.category === 'legal';
            return (
              <div
                key={service.id}
                className="group rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-card-hover transition-all duration-300 p-8 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Accent Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 transition-colors ${
                  isLegal ? 'bg-legal-700' : 'bg-nutrition-700'
                }`} />

                <div>
                  {/* Category & Duration header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      isLegal 
                        ? 'bg-legal-50 text-legal-800 border border-legal-200' 
                        : 'bg-nutrition-50 text-nutrition-800 border border-nutrition-200'
                    }`}>
                      {isLegal ? 'Derecho & Asesoría' : 'Nutrición Clínica'}
                    </span>
                    <div className="flex items-center space-x-1 text-slate-500 text-xs">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{service.duration_minutes} minutos</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-legal-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  {service.features && (
                    <div className="mt-6 pt-6 border-t border-slate-100 space-y-2.5">
                      <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                        Qué incluye esta consulta:
                      </p>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                          <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isLegal ? 'text-legal-600' : 'text-nutrition-600'
                          }`} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Pricing & Booking CTA */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Honorarios:</span>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-2xl font-bold text-slate-900">
                        ${service.price.toLocaleString('es-MX')}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">MXN</span>
                    </div>
                  </div>

                  <Link
                    href={`/agendar?serviceId=${service.id}&category=${service.category}`}
                    className={`inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white transition-all shadow-sm group-hover:scale-105 ${
                      isLegal
                        ? 'bg-legal-900 hover:bg-legal-800'
                        : 'bg-nutrition-900 hover:bg-nutrition-800'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Agendar este servicio</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-slate-700">
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 border border-amber-200">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">
                ¿Requieres una atención combinada legal y de salud?
              </p>
              <p className="text-xs text-slate-500">
                Contamos con paquetes especiales para consultorios médicos, clínicas y empresas de alimentos que buscan blindaje integral.
              </p>
            </div>
          </div>
          <Link
            href="/contacto"
            className="shrink-0 px-4 py-2.5 text-xs font-bold rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 transition-all"
          >
            Consultar caso a medida
          </Link>
        </div>

      </div>
    </section>
  );
}
