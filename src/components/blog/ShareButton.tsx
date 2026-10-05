'use client';

import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';

export default function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    }
  };

  return (
    <button 
      type="button"
      onClick={handleShare}
      className="p-2 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs flex items-center space-x-1.5 transition-colors"
      title="Copiar enlace del artículo"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-600" />
          <span className="text-emerald-700 font-semibold">¡Enlace Copiado!</span>
        </>
      ) : (
        <>
          <Share2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Compartir</span>
        </>
      )}
    </button>
  );
}
