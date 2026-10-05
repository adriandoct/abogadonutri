import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  User, 
  Scale, 
  Apple, 
  ShieldAlert
} from 'lucide-react';
import { MOCK_BLOG_POSTS } from '@/lib/mock-data';
import ShareButton from '@/components/blog/ShareButton';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return MOCK_BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = MOCK_BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const isLegal = post.category === 'derecho';
  const isNutrition = post.category === 'nutricion';

  return (
    <article className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a todos los artículos</span>
        </Link>

        {/* Post Header Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
              isLegal 
                ? 'bg-legal-50 text-legal-800 border-legal-200' 
                : isNutrition 
                  ? 'bg-nutrition-50 text-nutrition-800 border-nutrition-200'
                  : 'bg-amber-50 text-amber-800 border-amber-200'
            }`}>
              {isLegal ? 'Derecho & Legislación' : isNutrition ? 'Nutrición Clínica' : 'Salud, Ley & Sociedad'}
            </span>

            <div className="flex items-center space-x-1.5 text-xs text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.reading_time_minutes} min de lectura</span>
            </div>

            <div className="flex items-center space-x-1.5 text-xs text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>{new Date(post.published_at).toLocaleDateString('es-MX', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
            {post.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            {post.excerpt}
          </p>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                CM
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">{post.author_name}</span>
                <span className="text-[11px] text-slate-400">Especialista Titular</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <ShareButton title={post.title} />
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {post.cover_image && (
          <div className="rounded-3xl overflow-hidden shadow-lg h-72 sm:h-96 w-full">
            <img 
              src={post.cover_image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Post Body Content */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm prose prose-slate max-w-none">
          <div className="text-slate-800 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
            {post.content}
          </div>

          {/* Related CTA box */}
          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                ¿Necesitas orientación sobre este tema?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Agenda una sesión individual para analizar tu situación jurídica o clínica particular.
              </p>
            </div>
            <Link
              href="/agendar"
              className="shrink-0 px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-all"
            >
              Agendar Asesoría
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
}
