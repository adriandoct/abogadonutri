'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Scale, 
  Apple, 
  ShieldCheck 
} from 'lucide-react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'legal',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-slate-700 uppercase bg-white px-3.5 py-1.5 rounded-full border border-slate-200">
            Canales de Atención
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Comunícate con Nosotros
          </h1>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm">
            Estamos disponibles para responder tus dudas, coordinar una reunión de evaluación o atender asuntos sanitarios y legales urgentes.
          </p>
        </div>

        {/* Grid: Info Cards + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct channels and office location */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Cards */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                <span>Información del Despacho & Consultorio</span>
              </h2>

              <div className="space-y-4 text-xs">
                
                <div className="flex items-start space-x-3 text-slate-700">
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 shrink-0">
                    <MapPin className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <strong className="block text-slate-900">Ubicación Física:</strong>
                    <span>Av. Las Palmas 402, Colonia Reforma, C.P. 68050, Oaxaca de Juárez, Oaxaca.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-700">
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 shrink-0">
                    <Phone className="w-4 h-4 text-legal-700" />
                  </div>
                  <div>
                    <strong className="block text-slate-900">Llamadas Directas & Citas:</strong>
                    <a href="tel:+529511234567" className="hover:text-legal-900 font-semibold">
                      +52 (951) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-700">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <strong className="block text-slate-900">WhatsApp Inmediato:</strong>
                    <a 
                      href="https://wa.me/529511234567" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-800 font-semibold"
                    >
                      Enviar mensaje al especialista
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-700">
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 shrink-0">
                    <Mail className="w-4 h-4 text-slate-700" />
                  </div>
                  <div>
                    <strong className="block text-slate-900">Correo Oficial:</strong>
                    <span>contacto@abogadonutriologo.mx</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-700">
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 shrink-0">
                    <Clock className="w-4 h-4 text-nutrition-700" />
                  </div>
                  <div>
                    <strong className="block text-slate-900">Horario de Consulta:</strong>
                    <span>Lunes a Viernes: 09:00 - 20:00 hrs <br /> Sábados: 09:00 - 14:00 hrs</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Map Mockup with interactive coordinates */}
            <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm p-4 space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700 px-1">
                <span>Mapa de Localización</span>
                <span className="text-[10px] text-slate-400">Colonia Reforma, Oaxaca</span>
              </div>
              
              <div className="h-48 rounded-2xl bg-slate-100 border border-slate-200 relative overflow-hidden flex items-center justify-center text-center p-4">
                <div className="space-y-2">
                  <MapPin className="w-8 h-8 text-rose-500 mx-auto animate-bounce" />
                  <p className="text-xs font-bold text-slate-900">Despacho & Consultorio Titular</p>
                  <p className="text-[11px] text-slate-500">Estacionamiento privado disponible</p>
                  <a
                    href="https://maps.google.com/?q=Oaxaca+de+Juarez+Colonia+Reforma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-[11px] font-bold text-legal-800 underline hover:text-legal-950"
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div>
                <h2 className="text-xl font-serif font-bold text-slate-900">
                  Envíanos un Mensaje
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Completa los campos a continuación y te responderemos en un lapso menor a 24 horas hábiles.
                </p>
              </div>

              {sent ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h3 className="text-base font-bold text-emerald-900">¡Mensaje Recibido!</h3>
                  <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                    Gracias por ponerte en contacto. Nuestro equipo revisará tu solicitud y se comunicará a la brevedad al correo o teléfono proporcionado.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-700 text-white"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Tu nombre y apellidos"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tu@correo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+52 951 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Área de Interés *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                      >
                        <option value="legal">Servicios Legales & Contratos</option>
                        <option value="nutrition">Nutrición Clínica & Planes</option>
                        <option value="both">Doble Enfoque (Salud & Derecho)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mensaje o Descripción del Caso *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Cuéntanos brevemente qué necesitas resolver o cuál es tu consulta..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>

                  <div className="flex items-center space-x-2 text-[11px] text-slate-500 py-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Tus datos no serán compartidos y cuentan con protección legal y médica.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-md transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Mensaje de Contacto</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
