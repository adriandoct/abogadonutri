'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Scale, 
  Apple, 
  ShieldAlert, 
  Search 
} from 'lucide-react';
import { MOCK_BLOG_POSTS } from '@/lib/mock-data';
import { BlogCategory } from '@/types';

interface DualBlogPreviewProps {
  showAll?: boolean;
}

export default function DualBlogPreview({ showAll = false }: DualBlogPreviewProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | BlogCategory>('all');
  const [search, setSearch] = useState('');

  const filteredPosts = MOCK_BLOG_POSTS.filter(post => {
    const matchesCategory = selectedFilter === 'all' || post.category === selectedFilter;
    const matchesSearch = search === '' ||
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryBadge = (category: BlogCategory) => {
    switch (category) {
      case 'derecho':
        return {
          label: 'Derecho & Legislación',
          bg: 'bg-legal-50 text-legal-800 border-legal-200',
          icon: Scale
        };
      case 'nutricion':
        return {
          label: 'Nutrición Clínica',
          bg: 'bg-nutrition-50 text-nutrition-800 border-nutrition-200',
          icon: Apple
        };
      case 'salud_sociedad':
        return {
          label: 'Salud, Ley & Sociedad',
          bg: 'bg-amber-50 text-amber-800 border-amber-200',
          icon: ShieldAlert
        };
    }
  };

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest text-slate-700 uppercase bg-white px-3.5 py-1.5 rounded-full border border-slate-200">
              Artículos & Divulgación
            </span>
            <h2 className="mt-3 text-3xl font-serif font-bold text-slate-900 tracking-tight">
              Blog de Derecho & Nutrición
            </h2>
            <p className="mt-2 text-slate-600 text-sm max-w-xl">
              Artículos rigurosos sobre jurisprudencia sanitaria, contratos, crononutrición y evidencia clínica para pacientes y colegas profesionistas.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-legal-800 hover:text-legal-950 group"
          >
            <span>Ver biblioteca completa</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Categories Bar & Search Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Todos los temas
            </button>
            <button
              onClick={() => setSelectedFilter('derecho')}
              className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === 'derecho'
                  ? 'bg-legal-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Derecho</span>
            </button>
            <button
              onClick={() => setSelectedFilter('nutricion')}
              className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === 'nutricion'
                  ? 'bg-nutrition-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Apple className="w-3.5 h-3.5" />
              <span>Nutrición</span>
            </button>
            <button
              onClick={() => setSelectedFilter('salud_sociedad')}
              className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === 'salud_sociedad'
                  ? 'bg-amber-800 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Salud & Ley</span>
            </button>
          </div>

          <div className="w-full sm:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => {
            const badge = getCategoryBadge(post.category);
            const Icon = badge.icon;
            return (
              <article
                key={post.id}
                className="group rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Cover Simulation */}
                  <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                    <img 
                      src={post.cover_image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center space-x-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-md shadow-sm ${badge.bg}`}>
                        <Icon className="w-3 h-3" />
                        <span>{badge.label}</span>
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-[11px] text-slate-500 mb-3">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{post.reading_time_minutes} min de lectura</span>
                      <span>•</span>
                      <span>{new Date(post.published_at).toLocaleDateString('es-MX', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>

                    <h3 className="font-serif font-bold text-base text-slate-900 group-hover:text-legal-900 transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer link */}
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs font-bold text-legal-800 hover:text-legal-950 group-hover:translate-x-1 transition-all"
                  >
                    <span>Leer artículo completo</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
