import React from 'react';
import Link from 'next/link';
import { Scale, Apple, Phone, Mail, MapPin, ShieldCheck, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Identity & Credentials */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-legal-800 to-nutrition-800 text-white shadow-md">
                <Scale className="w-5 h-5 text-blue-200" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-white text-lg">Lic. & Nut. Morales</h3>
                <p className="text-xs text-slate-400">Derecho & Nutrición Integral</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Práctica interdisciplinaria pionera que combina la solidez y ética jurídica con la ciencia clínica de la nutrición para la protección y el bienestar integral de personas e instituciones.
            </p>
            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-legal-400 shrink-0" />
                <span>Cédula Profesional en Derecho: <strong>D-8472910</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-nutrition-400 shrink-0" />
                <span>Cédula Profesional en Nutrición: <strong>N-6184902</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Aviso de Funcionamiento COFEPRIS: <strong>23-OAX-991</strong></span>
              </div>
            </div>
          </div>

          {/* Col 2: Servicios Legales */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-legal-300 mb-4 flex items-center space-x-2">
              <Scale className="w-4 h-4" />
              <span>Servicios Legales</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/servicios?cat=legal" className="hover:text-white transition-colors">
                  Asesoría Jurídica Integral
                </Link>
              </li>
              <li>
                <Link href="/servicios?cat=legal" className="hover:text-white transition-colors">
                  Redacción y Blindaje de Contratos
                </Link>
              </li>
              <li>
                <Link href="/servicios?cat=legal" className="hover:text-white transition-colors">
                  Cumplimiento Sanitario y COFEPRIS
                </Link>
              </li>
              <li>
                <Link href="/servicios?cat=legal" className="hover:text-white transition-colors">
                  Derecho Familiar y Sucesorio
                </Link>
              </li>
              <li>
                <Link href="/servicios?cat=legal" className="hover:text-white transition-colors">
                  Litigio Civil y Mercantil
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Servicios de Nutrición */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-nutrition-300 mb-4 flex items-center space-x-2">
              <Apple className="w-4 h-4" />
              <span>Servicios de Nutrición</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/servicios?cat=nutrition" className="hover:text-white transition-colors">
                  Consulta Nutricional + Antropometría
                </Link>
              </li>
              <li>
                <Link href="/servicios?cat=nutrition" className="hover:text-white transition-colors">
                  Síndrome Metabólico y Diabetes
                </Link>
              </li>
              <li>
                <Link href="/servicios?cat=nutrition" className="hover:text-white transition-colors">
                  Nutrición Deportiva Avanzada
                </Link>
              </li>
              <li>
                <Link href="/servicios?cat=nutrition" className="hover:text-white transition-colors">
                  Recomposición Corporal
                </Link>
              </li>
              <li>
                <Link href="/servicios?cat=nutrition" className="hover:text-white transition-colors">
                  Seguimiento y Educación Alimentaria
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto & Ubicación */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-2">
              Consultorio & Despacho
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Av. Las Palmas 402, Colonia Reforma, C.P. 68050, Oaxaca de Juárez, Oaxaca.</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-slate-300 shrink-0" />
                <span>+52 (951) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-slate-300 shrink-0" />
                <span>contacto@abogadonutriologo.mx</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/agendar"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-legal-800 to-nutrition-800 text-white hover:opacity-95 shadow transition-all"
              >
                Solicitar Cita de Valoración
              </Link>
            </div>
          </div>

        </div>

        {/* Disclaimer & Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} Lic. & Nut. Morales. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/nosotros" className="hover:text-slate-400 transition-colors">
              Aviso de Privacidad
            </Link>
            <Link href="/contacto" className="hover:text-slate-400 transition-colors">
              Términos del Servicio
            </Link>
            <Link href="/dashboard" className="hover:text-slate-400 transition-colors">
              Acceso Staff / Pacientes
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
