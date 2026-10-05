'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ServicesSection from '@/components/home/ServicesSection';
import { ServiceCategory } from '@/types';

function ServicesContent() {
  const searchParams = useSearchParams();
  const catParam = searchParams.get('cat') as ServiceCategory | null;
  const initialCategory: ServiceCategory = catParam === 'nutrition' ? 'nutrition' : 'legal';

  return (
    <div className="py-8">
      <ServicesSection 
        initialCategory={initialCategory} 
        showSearch={true} 
      />
    </div>
  );
}

export default function ServiciosPage() {
  return (
    <Suspense fallback={
      <div className="py-20 text-center text-slate-500 text-sm">
        Cargando catálogo de servicios...
      </div>
    }>
      <ServicesContent />
    </Suspense>
  );
}
