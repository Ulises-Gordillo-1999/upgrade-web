'use client';

import React, { useState } from 'react';
import { 
  CASE_CATEGORIES, 
  CASE_STUDIES, 
  CaseStudy 
} from '@/data/caseStudiesData';
import { 
  Award, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Building,
  Layers,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { getWhatsAppUrl } from '@/config/contacts';

export function CaseStudiesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCases = selectedCategory === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.category === selectedCategory);

  const getWhatsAppCaseInquiry = (title: string) => {
    return getWhatsAppUrl(`Hola UPGRADE, vi el caso de éxito "${title}" y me gustaría consultar por una solución similar para mi empresa.`);
  };

  return (
    <section 
      id="casos" 
      className="py-20 md:py-28 relative scroll-mt-16"
      aria-labelledby="cases-heading"
    >
      {/* Background Glow */}
      <div 
        className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/10 blur-[140px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Casos Reales // Obras & Despliegues</span>
          </div>

          <h2 
            id="cases-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-6"
          >
            Trabajos Ejecutados con Estándar Corporativo
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            No prometemos sobre renders: mostramos resultados tangibles. Conoce algunas de nuestras instalaciones de racks, redes inalámbricas de alta densidad y despliegues de software en la región.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {CASE_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 min-h-[44px] cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-102'
                    : 'bg-white/80 dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800'
                }`}
                aria-pressed={isSelected}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCases.map((item: CaseStudy) => {
            const ClientIcon = item.icon;

            return (
              <div
                key={item.id}
                className="rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-zinc-800/80 bg-white/90 dark:bg-[#0c0e17]/90 shadow-xl flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div>
                  {/* Top metadata */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-zinc-800/80 mb-5 text-xs">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-zinc-400">
                      <ClientIcon className="w-4 h-4 text-cyan-500" />
                      <span className="font-semibold text-slate-800 dark:text-zinc-200">
                        {item.clientType}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-zinc-400 font-mono text-[11px]">
                      <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                    {item.summary}
                  </p>

                  {/* Challenge & Solution Blocks */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60">
                      <div className="font-bold text-red-500 dark:text-red-400 mb-1">
                        Desafío Previo:
                      </div>
                      <div className="text-slate-600 dark:text-zinc-300 leading-normal">
                        {item.challenge}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60">
                      <div className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                        Solución UPGRADE:
                      </div>
                      <div className="text-slate-600 dark:text-zinc-300 leading-normal">
                        {item.solution}
                      </div>
                    </div>
                  </div>

                  {/* Metrics Banner */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-100/70 dark:bg-zinc-900/70 border border-slate-200/60 dark:border-zinc-800/60 mb-6 text-center">
                    {item.metrics.map((metric, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-base sm:text-lg font-black text-cyan-600 dark:text-cyan-400">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-zinc-400 font-medium">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.techTags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-zinc-800/80 text-slate-600 dark:text-zinc-400 border border-slate-200/40 dark:border-zinc-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/80">
                  <a
                    href={getWhatsAppCaseInquiry(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-zinc-200 bg-slate-100/80 dark:bg-zinc-800/60 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all min-h-[44px]"
                  >
                    <span>Quiero una solución similar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

