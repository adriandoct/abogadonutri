'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Scale, 
  Apple, 
  Phone, 
  Clock, 
  MapPin, 
  Calendar, 
  Menu, 
  X, 
  UserCircle,
  MessageSquare
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Bar - Contact & Location (Inspired by neurocirugiaoaxaca.com) */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a 
              href="tel:+529511234567" 
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-legal-400" />
              <span>Citas & Urgencias: +52 (951) 123-4567</span>
            </a>
            <div className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-nutrition-400" />
              <span>Lun - Vie: 9:00 - 20:00 hrs | Sáb: 9:00 - 14:00 hrs</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Av. Las Palmas 402, Reforma, Oaxaca</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://wa.me/529511234567?text=Hola,%20solicito%20información%20para%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Directo</span>
            </a>
            <span className="text-slate-600">|</span>
            <Link 
              href="/dashboard"
              className="flex items-center space-x-1 hover:text-white transition-colors"
            >
              <UserCircle className="w-3.5 h-3.5 text-legal-300" />
              <span>Portal de Clientes / Admin</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100' 
          : 'bg-white py-4 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Dual Brand Identity Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-legal-900 to-nutrition-900 text-white shadow-md group-hover:scale-105 transition-transform duration-300">
              <Scale className="w-5 h-5 absolute -translate-x-1 -translate-y-0.5 text-blue-200" />
              <Apple className="w-4 h-4 absolute translate-x-2 translate-y-1.5 text-emerald-300" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-serif font-bold text-lg md:text-xl text-slate-900 tracking-tight">
                  Lic. & Nut. Morales
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded bg-amber-50 text-amber-800 border border-amber-200">
                  Dual
                </span>
              </div>
              <p className="text-[11px] font-medium tracking-wide text-slate-500 uppercase flex items-center space-x-1">
                <span className="text-legal-700 font-semibold">Derecho</span>
                <span>•</span>
                <span className="text-nutrition-700 font-semibold">Nutrición Clínica</span>
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-legal-700 relative py-1 ${
                    isActive 
                      ? 'text-legal-900 font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-legal-800 after:to-nutrition-700' 
                      : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Quick CTA Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              href="/servicios"
              className="text-xs font-semibold px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              Ver Servicios
            </Link>
            <Link
              href="/agendar"
              className="flex items-center space-x-2 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-lg bg-gradient-to-r from-legal-900 via-legal-800 to-nutrition-800 text-white shadow-sm hover:shadow-md hover:opacity-95 transition-all"
            >
              <Calendar className="w-4 h-4 text-emerald-300" />
              <span>Agendar Cita</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Link
              href="/agendar"
              className="sm:hidden text-xs font-semibold px-3 py-1.5 rounded-md bg-legal-900 text-white"
            >
              Agendar
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${
                    pathname === link.href 
                      ? 'bg-slate-100 text-legal-900 font-bold' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-slate-100 flex flex-col space-y-2">
                <Link
                  href="/agendar"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 text-center text-sm font-bold py-2.5 rounded-lg bg-legal-900 text-white"
                >
                  <Calendar className="w-4 h-4 text-emerald-300" />
                  <span>Agendar Cita Online</span>
                </Link>
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center text-xs font-semibold py-2 rounded-lg border border-slate-200 text-slate-700"
                >
                  Acceso a Mi Portal
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
