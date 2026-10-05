'use client';

import React, { useState, useEffect } from 'react';
import { 
  Scale, 
  Apple, 
  Clock, 
  Calendar, 
  Check, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Video, 
  FileText,
  ShieldCheck,
  CalendarPlus,
  MessageSquare
} from 'lucide-react';
import { MOCK_SERVICES } from '@/lib/mock-data';
import { ServiceCategory, ServiceItem } from '@/types';

interface AppointmentBookingFlowProps {
  initialServiceId?: string;
  initialCategory?: ServiceCategory;
}

export default function AppointmentBookingFlow({
  initialServiceId,
  initialCategory = 'legal'
}: AppointmentBookingFlowProps) {
  // Step state: 1: Categoria, 2: Servicio, 3: Fecha y Hora, 4: Datos Cliente, 5: Confirmación
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>(initialCategory);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  
  // Date & Time state
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  const [modality, setModality] = useState<'presencial' | 'virtual'>('presencial');

  // Client info state
  const [clientData, setClientData] = useState({
    fullName: '',
    email: '',
    phone: '',
    notes: '',
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingFolio, setBookingFolio] = useState('');

  // Preselect service if given via props
  useEffect(() => {
    if (initialServiceId) {
      const found = MOCK_SERVICES.find(s => s.id === initialServiceId);
      if (found) {
        setSelectedCategory(found.category);
        setSelectedService(found);
        setCurrentStep(3); // Jump directly to date & time
      }
    }
  }, [initialServiceId]);

  // Generate next 10 business days for appointment picker
  const generateAvailableDays = () => {
    const days = [];
    const today = new Date();
    let count = 0;
    let offset = 1;

    while (count < 8) {
      const date = new Date(today);
      date.setDate(today.getDate() + offset);
      // Skip Sundays (0)
      if (date.getDay() !== 0) {
        const dateStr = date.toISOString().split('T')[0];
        const dayName = date.toLocaleDateString('es-MX', { weekday: 'short' });
        const dayNumber = date.getDate();
        const monthName = date.toLocaleDateString('es-MX', { month: 'short' });
        days.push({ dateStr, dayName, dayNumber, monthName, rawDate: date });
        count++;
      }
      offset++;
    }
    return days;
  };

  const availableDays = generateAvailableDays();

  // Set default selected date once days are generated
  useEffect(() => {
    if (!selectedDate && availableDays.length > 0) {
      setSelectedDate(availableDays[0].dateStr);
    }
  }, [availableDays, selectedDate]);

  // Available slots for demo
  const timeSlots = [
    { time: '09:00', period: 'Mañana' },
    { time: '10:30', period: 'Mañana' },
    { time: '12:00', period: 'Mañana' },
    { time: '16:00', period: 'Tarde' },
    { time: '17:30', period: 'Tarde' },
    { time: '19:00', period: 'Tarde' }
  ];

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!selectedService) return;
      setCurrentStep(3);
    } else if (currentStep === 3) {
      if (!selectedDate || !selectedTimeSlot) return;
      setCurrentStep(4);
    } else if (currentStep === 4) {
      if (!clientData.fullName || !clientData.email || !clientData.phone) return;
      // Complete booking
      const generatedId = 'CITA-' + Math.floor(100000 + Math.random() * 900000);
      setBookingFolio(generatedId);
      setBookingConfirmed(true);
      setCurrentStep(5);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Top Wizard Steps Bar */}
      <div className="bg-slate-900 text-white p-6 sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
              Reserva de Cita Online
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">
              Agenda tu Consulta Profesional
            </h2>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
            Paso {currentStep} de 5
          </span>
        </div>

        {/* Progress indicator */}
        <div className="grid grid-cols-5 gap-2">
          {['Especialidad', 'Servicio', 'Fecha & Hora', 'Tus Datos', 'Confirmación'].map((label, idx) => {
            const stepNum = idx + 1;
            const isCompleted = currentStep > stepNum;
            const isCurrent = currentStep === stepNum;
            return (
              <div key={idx} className="flex flex-col space-y-1">
                <div className={`h-1.5 rounded-full transition-all duration-300 ${
                  isCompleted 
                    ? 'bg-emerald-400' 
                    : isCurrent 
                      ? 'bg-amber-400' 
                      : 'bg-slate-700'
                }`} />
                <span className={`text-[10px] hidden sm:block truncate ${
                  isCurrent ? 'text-amber-300 font-bold' : isCompleted ? 'text-emerald-300' : 'text-slate-500'
                }`}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Wizard Content */}
      <div className="p-6 sm:p-8">
        
        {/* ================= STEP 1: CATEGORY SELECTION ================= */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center max-w-lg mx-auto mb-6">
              <h3 className="text-lg font-bold text-slate-900">
                Selecciona la especialidad que necesitas
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Puedes agendar una consulta jurídica o una consulta de nutrición clínica.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Option 1: Legal */}
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('legal');
                  setSelectedService(null);
                }}
                className={`p-6 rounded-2xl border-2 text-left transition-all relative ${
                  selectedCategory === 'legal'
                    ? 'border-legal-800 bg-legal-50/50 shadow-md ring-2 ring-legal-800/10'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                {selectedCategory === 'legal' && (
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-legal-900 text-white flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                )}
                <div className="w-12 h-12 rounded-xl bg-legal-900 text-blue-200 flex items-center justify-center mb-4 shadow-sm">
                  <Scale className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Área Jurídica & Legal</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Asesoría en contratos, litigio, controversias civiles, familiares y asesoría normativa sanitaria COFEPRIS.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center text-[11px] font-semibold text-legal-800">
                  <span>Tarifas desde $950 MXN</span>
                </div>
              </button>

              {/* Option 2: Nutrition */}
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('nutrition');
                  setSelectedService(null);
                }}
                className={`p-6 rounded-2xl border-2 text-left transition-all relative ${
                  selectedCategory === 'nutrition'
                    ? 'border-nutrition-800 bg-nutrition-50/50 shadow-md ring-2 ring-nutrition-800/10'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                {selectedCategory === 'nutrition' && (
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-nutrition-900 text-white flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                )}
                <div className="w-12 h-12 rounded-xl bg-nutrition-900 text-emerald-200 flex items-center justify-center mb-4 shadow-sm">
                  <Apple className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Área de Nutrición Clínica</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Tratamiento de resistencia a insulina, diabetes, recomposición corporal, nutrición deportiva y planes individualizados.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center text-[11px] font-semibold text-nutrition-800">
                  <span>Tarifas desde $600 MXN</span>
                </div>
              </button>

            </div>
          </div>
        )}

        {/* ================= STEP 2: SERVICE SELECTION ================= */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Elige el servicio de {selectedCategory === 'legal' ? 'Derecho' : 'Nutrición'}
                </h3>
                <p className="text-xs text-slate-500">
                  Selecciona la modalidad específica para tu consulta.
                </p>
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                selectedCategory === 'legal' ? 'bg-legal-100 text-legal-800' : 'bg-nutrition-100 text-nutrition-800'
              }`}>
                {selectedCategory === 'legal' ? 'Legal' : 'Nutrición'}
              </span>
            </div>

            <div className="space-y-3">
              {MOCK_SERVICES.filter(s => s.category === selectedCategory).map((service) => {
                const isSelected = selectedService?.id === service.id;
                return (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      isSelected
                        ? selectedCategory === 'legal' 
                          ? 'border-legal-800 bg-legal-50/40 shadow-sm'
                          : 'border-nutrition-800 bg-nutrition-50/40 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-sm text-slate-900">{service.title}</span>
                        <div className="flex items-center space-x-1 text-slate-500 text-xs">
                          <Clock className="w-3 h-3" />
                          <span>{service.duration_minutes} min</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-2 max-w-xl">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end space-x-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                      <span className="text-base font-bold text-slate-900">
                        ${service.price.toLocaleString('es-MX')} MXN
                      </span>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        isSelected 
                          ? selectedCategory === 'legal' ? 'border-legal-800 bg-legal-800 text-white' : 'border-nutrition-800 bg-nutrition-800 text-white' 
                          : 'border-slate-300'
                      }`}>
                        {isSelected && <Check className="w-3 h-3" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= STEP 3: DATE & TIME ================= */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Selecciona la fecha y hora de tu consulta
              </h3>
              <p className="text-xs text-slate-500">
                Horarios en zona horaria Ciudad de México (CST).
              </p>
            </div>

            {/* Modality choice */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-700 block mb-2">
                Modalidad de la sesión:
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setModality('presencial')}
                  className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                    modality === 'presencial'
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Presencial en Consultorio (Oaxaca)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setModality('virtual')}
                  className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                    modality === 'virtual'
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <Video className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Videollamada Online HD</span>
                </button>
              </div>
            </div>

            {/* Date Picker Carousel */}
            <div>
              <span className="text-xs font-bold text-slate-700 block mb-2">
                Día de la consulta:
              </span>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {availableDays.map((day) => {
                  const isSelected = selectedDate === day.dateStr;
                  return (
                    <button
                      key={day.dateStr}
                      type="button"
                      onClick={() => setSelectedDate(day.dateStr)}
                      className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center ${
                        isSelected
                          ? 'bg-slate-900 text-white border-slate-900 shadow-sm ring-2 ring-slate-900/10'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <span className={`text-[10px] uppercase font-semibold ${isSelected ? 'text-amber-300' : 'text-slate-400'}`}>
                        {day.dayName}
                      </span>
                      <span className="text-base font-bold my-0.5">
                        {day.dayNumber}
                      </span>
                      <span className={`text-[10px] ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                        {day.monthName}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slots Grid */}
            <div>
              <span className="text-xs font-bold text-slate-700 block mb-2">
                Horario disponible:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {timeSlots.map((slot) => {
                  const isSelected = selectedTimeSlot === slot.time;
                  return (
                    <button
                      key={slot.time}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot.time)}
                      className={`py-3 px-4 rounded-xl border text-left flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div>
                        <span className="text-sm font-bold block">{slot.time} hrs</span>
                        <span className={`text-[10px] ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                          Turno {slot.period}
                        </span>
                      </div>
                      <Clock className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-300'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        )}

        {/* ================= STEP 4: CLIENT DATA ================= */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Información de contacto del cliente / paciente
              </h3>
              <p className="text-xs text-slate-500">
                Estos datos se usarán para enviarte el recordatorio y preparar tu expediente confidencial.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nombre Completo *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Ej. Ana Laura Cruz Ruiz"
                    value={clientData.fullName}
                    onChange={(e) => setClientData({ ...clientData, fullName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Correo Electrónico *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="ejemplo@correo.com"
                    value={clientData.email}
                    onChange={(e) => setClientData({ ...clientData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Teléfono / WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="+52 951 000 0000"
                    value={clientData.phone}
                    onChange={(e) => setClientData({ ...clientData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Motivo de Consulta o Antecedentes (Opcional)
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <textarea
                    rows={2}
                    placeholder="Describe brevemente tus dudas legales o tus metas de salud..."
                    value={clientData.notes}
                    onChange={(e) => setClientData({ ...clientData, notes: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>
              </div>
            </div>

            {/* Privacy notice */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Tus datos están protegidos bajo secreto profesional médico y legal con estricta confidencialidad.</span>
            </div>

          </div>
        )}

        {/* ================= STEP 5: CONFIRMATION SCREEN ================= */}
        {currentStep === 5 && bookingConfirmed && (
          <div className="space-y-6 text-center animate-fadeIn py-4">
            
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                ¡Cita Agendada Exitosamente!
              </span>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mt-2">
                Folio de Consulta: {bookingFolio}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Hemos enviado un correo con todos los detalles a <strong>{clientData.email}</strong>
              </p>
            </div>

            {/* Digital Ticket */}
            <div className="max-w-md mx-auto p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                <span className="text-xs text-slate-500">Servicio:</span>
                <span className="text-xs font-bold text-slate-900">{selectedService?.title}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                <span className="text-xs text-slate-500">Fecha y Hora:</span>
                <span className="text-xs font-bold text-slate-900">
                  {selectedDate} a las {selectedTimeSlot} hrs
                </span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                <span className="text-xs text-slate-500">Modalidad:</span>
                <span className="text-xs font-bold text-slate-900 capitalize">
                  {modality === 'presencial' ? 'Presencial (Oaxaca)' : 'Videollamada Online'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500">Honorarios a liquidar en consulta:</span>
                <span className="text-sm font-bold text-slate-900">
                  ${selectedService?.price.toLocaleString('es-MX')} MXN
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/529511234567?text=Hola,%20acabo%20de%20agendar%20mi%20cita%20con%20folio%20${bookingFolio}%20para%20el%20servicio%20${encodeURIComponent(selectedService?.title || '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirmar por WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  alert("Descargando archivo .ics para Google Calendar y Apple Calendar...");
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl text-xs font-bold border border-slate-300 text-slate-700 hover:bg-slate-50 transition-all"
              >
                <CalendarPlus className="w-4 h-4" />
                <span>Agregar a mi Calendario</span>
              </button>
            </div>

          </div>
        )}

        {/* Wizard Navigation Footer */}
        {currentStep < 5 && (
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Atrás</span>
              </button>
            ) : <div />}

            <button
              type="button"
              onClick={handleNext}
              disabled={
                (currentStep === 2 && !selectedService) ||
                (currentStep === 3 && (!selectedDate || !selectedTimeSlot)) ||
                (currentStep === 4 && (!clientData.fullName || !clientData.email || !clientData.phone))
              }
              className={`inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-xs font-bold text-white transition-all shadow-md ${
                ((currentStep === 2 && !selectedService) ||
                 (currentStep === 3 && (!selectedDate || !selectedTimeSlot)) ||
                 (currentStep === 4 && (!clientData.fullName || !clientData.email || !clientData.phone)))
                  ? 'bg-slate-300 cursor-not-allowed opacity-70'
                  : 'bg-gradient-to-r from-legal-900 to-nutrition-900 hover:opacity-95'
              }`}
            >
              <span>{currentStep === 4 ? 'Confirmar Cita' : 'Continuar'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
