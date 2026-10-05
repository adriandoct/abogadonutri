import React from 'react';
import DualBlogPreview from '@/components/home/DualBlogPreview';

export const metadata = {
  title: 'Blog & Artículos | Lic. & Nut. Carlos E. Morales',
  description: 'Artículos de análisis jurídico, normativa sanitaria COFEPRIS y nutrición clínica basada en evidencia.',
};

export default function BlogPage() {
  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <DualBlogPreview showAll={true} />
    </div>
  );
}
