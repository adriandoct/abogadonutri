'use client';

import React, { useState } from 'react';
import ClientDashboardView from '@/components/dashboard/ClientDashboardView';
import AdminDashboardView from '@/components/dashboard/AdminDashboardView';
import { UserRole } from '@/types';
import { Shield, UserCheck, ShieldAlert, KeyRound } from 'lucide-react';

export default function DashboardPage() {
  const [activeRole, setActiveRole] = useState<UserRole>('admin');

  return (
    <div className="py-10 bg-slate-100/70 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Interactive RBAC Simulator Switcher Bar */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-slate-900 text-amber-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-slate-900">Demostrador de Roles (RBAC Supabase)</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900">
                  Modo Interactivo
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                Alterna entre los roles configurados en la tabla <code>public.profiles</code> para explorar la experiencia de usuario de cada uno.
              </p>
            </div>
          </div>

          <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setActiveRole('client')}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeRole === 'client'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 text-legal-600" />
              <span>Vista: Cliente</span>
            </button>

            <button
              onClick={() => setActiveRole('admin')}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeRole === 'admin'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <KeyRound className="w-3.5 h-3.5 text-amber-400" />
              <span>Vista: Admin / Titular</span>
            </button>
          </div>
        </div>

        {/* Dynamic Component by Role */}
        {activeRole === 'client' ? (
          <ClientDashboardView />
        ) : (
          <AdminDashboardView />
        )}

      </div>
    </div>
  );
}
