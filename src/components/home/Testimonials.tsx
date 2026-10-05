import React from 'react';
import { Star, ShieldCheck, Scale, Apple } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Lic. Fernando Guzmán',
      role: 'Director Médico de Clínica Privada',
      category: 'legal',
      text: 'El Lic. Morales blindó por completo nuestro aviso de funcionamiento COFEPRIS y actualizó nuestros consentimientos informados bajo la NOM-004. Su doble formación en derecho y salud le otorga una comprensión que ningún otro abogado posee.',
      stars: 5,
      date: 'Hace 1 mes'
    },
    {
      name: 'Mariana Valenzuela',
      role: 'Paciente en Control Metabólico',
      category: 'nutrition',
      text: 'Llegué con diagnóstico de resistencia a la insulina y fatiga constante. En 3 meses normalicé mis niveles de glucosa sin pasar hambre ni dietas extremas. El seguimiento y la calidez en cada consulta son inigualables.',
      stars: 5,
      date: 'Hace 3 semanas'
    },
    {
      name: 'Arq. Esteban Morales Ramos',
      role: 'Cliente Corporativo & Familiar',
      category: 'legal',
      text: 'Resolvió una controversia sucesoria de alta complejidad con una ética intachable y total empatía familiar. Te brinda una tranquilidad y claridad jurídica que pocos profesionales logran transmitir.',
      stars: 5,
      date: 'Hace 2 meses'
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-legal-700 uppercase bg-legal-50 px-3.5 py-1.5 rounded-full border border-legal-100">
            Opiniones & Casos de Éxito
          </span>
          <h2 className="mt-3 text-3xl font-serif font-bold text-slate-900 tracking-tight">
            Confianza respaldada por pacientes y clientes
          </h2>
          <p className="mt-3 text-slate-600 text-sm">
            Experiencias reales de personas que encontraron claridad legal y salud integral en nuestra práctica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => {
            const isLegal = rev.category === 'legal';
            return (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all"
              >
                <div>
                  {/* Rating Stars & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400 space-x-1">
                      {[...Array(rev.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex items-center space-x-1 ${
                      isLegal 
                        ? 'bg-legal-100 text-legal-800' 
                        : 'bg-nutrition-100 text-nutrition-800'
                    }`}>
                      {isLegal ? <Scale className="w-3 h-3" /> : <Apple className="w-3 h-3" />}
                      <span>{isLegal ? 'Área Jurídica' : 'Área Nutrición'}</span>
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">{rev.name}</h4>
                    <span className="text-[11px] text-slate-500">{rev.role}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-[10px] text-emerald-600 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verificado</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
