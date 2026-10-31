'use client';

import React from 'react';
import { 
  INFRASTRUCTURE_SERVICES, 
  InfrastructureItem 
} from '@/data/infrastructureData';
import { 
  Check, 
  ArrowRight, 
  MessageSquare, 
  Server, 
  ShieldCheck, 
  Cable,
  Cpu
} from 'lucide-react';
import { getWhatsAppUrl } from '@/config/contacts';

export function InfrastructureSection() {
  const getWhatsAppServiceLink = (serviceName: string) => {
    return getWhatsAppUrl(`Hola UPGRADE, me interesa solicitar un relevamiento técnico para: ${serviceName}.`);
  };

  return (
    <section 
      id="infraestructura" 
      className="py-20 md:py-28 relative scroll-mt-16"
      aria-labelledby="infrastructure-heading"
    >
      {/* Background Glow */}
      <div 
        className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Pilar 1 // Especialidad Activa</span>
          </div>
          
          <h2 
            id="infrastructure-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-6"
          >
            Infraestructura IT, Redes & Seguridad Perimetral
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Eliminamos cortes de señal, conexiones desprolijas y riesgos de seguridad. Implementamos soluciones de conectividad física y lógica diseñadas para el trabajo corporativo ininterrumpido.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INFRASTRUCTURE_SERVICES.map((item: InfrastructureItem, index: number) => {
            const Icon = item.icon;
            const isFeatured = index === 0 || index === 1;

            return (
              <div
                key={item.id}
                className={`relative group rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between ${
                  isFeatured 
                    ? 'border border-cyan-500/40 dark:border-cyan-500/30 bg-linear-to-b from-white via-cyan-50/20 to-white dark:from-[#0f121d] dark:via-[#090b12] dark:to-[#090b12] shadow-xl shadow-cyan-500/5' 
                    : 'border border-slate-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-[#0c0e17]/80 hover:border-slate-300 dark:hover:border-zinc-700 shadow-md'
                }`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 border border-slate-200/60 dark:border-zinc-700/60">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-3">
                    {item.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Specs Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-zinc-800/80 mb-6">
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 dark:text-zinc-500">
                      Especificaciones Clave:
                    </div>
                    {item.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-zinc-300">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/80">
                  <a
                    href={getWhatsAppServiceLink(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-zinc-200 bg-slate-100/80 dark:bg-zinc-800/60 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-600 dark:hover:text-white transition-all duration-200 min-h-[44px]"
                  >
                    <span>Consultar por este servicio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Infrastructure Banner */}
        <div className="mt-12 rounded-2xl p-6 sm:p-8 border border-cyan-500/30 bg-linear-to-r from-cyan-950/30 via-blue-950/20 to-transparent backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-cyan-500/20 text-cyan-400 shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <div className="text-lg font-bold text-slate-900 dark:text-white">
                ¿Tu empresa sufre caídas de internet o conexiones inestables?
              </div>
              <div className="text-sm text-slate-600 dark:text-zinc-300 mt-1">
                Realizamos un relevamiento de infraestructura sin cargo en la ciudad de Catamarca y diseñamos el esquema a medida.
              </div>
            </div>
          </div>

          <a
            href={getWhatsAppUrl("Hola UPGRADE, deseo coordinar un relevamiento de infraestructura en nuestro establecimiento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all duration-200 shrink-0 min-h-[48px] w-full md:w-auto"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Coordinar Relevamiento</span>
          </a>
        </div>

      </div>
    </section>
  );
}

