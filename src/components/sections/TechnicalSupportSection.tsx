'use client';

import React from 'react';
import { 
  WORKSHOP_SERVICES, 
  SUPPORT_PLANS, 
  SupportPlan 
} from '@/data/supportData';
import { 
  Wrench, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Sparkles, 
  MessageSquare,
  BadgeCheck
} from 'lucide-react';
import { getWhatsAppUrl } from '@/config/contacts';

export function TechnicalSupportSection() {
  const getWhatsAppPlanLink = (planName: string) => {
    return getWhatsAppUrl(`Hola UPGRADE, deseo cotizar el abono de soporte técnico: ${planName} para mi empresa.`);
  };

  return (
    <section 
      id="soporte" 
      className="py-20 md:py-28 relative scroll-mt-16"
      aria-labelledby="support-heading"
    >
      {/* Background Glow */}
      <div 
        className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Wrench className="w-3.5 h-3.5" />
            <span>Pilar 3 // Taller de Precisión & Abonos Corporativos</span>
          </div>

          <h2 
            id="support-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-6"
          >
            Soporte Técnico Especializado: Cero Tiempos Muertos
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Una computadora lenta o rota detiene la facturación y la atención al cliente. Brindamos mantenimiento preventivo, limpieza térmica profunda y abonos mensuales con tiempos de respuesta garantizados por contrato.
          </p>
        </div>

        {/* Workshop Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {WORKSHOP_SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div 
                key={idx}
                className="rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-[#0c0e17]/80 hover:border-slate-300 dark:hover:border-zinc-700 shadow-md flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                      {srv.highlight}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subscription Plans Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
            Abonos Mensuales de Mantenimiento Corporativo
          </h3>
          <p className="text-sm text-slate-600 dark:text-zinc-400">
            Tranquilidad total para tu empresa: un equipo técnico dedicado sin los costos fijos de un empleado en relación de dependencia.
          </p>
        </div>

        {/* Subscription Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {SUPPORT_PLANS.map((plan: SupportPlan) => {
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'border-2 border-emerald-500 bg-linear-to-b from-white via-emerald-50/20 to-white dark:from-[#0d1514] dark:via-[#090b12] dark:to-[#090b12] shadow-xl shadow-emerald-500/10 scale-100 lg:-translate-y-2'
                    : 'border border-slate-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-[#0c0e17]/80 hover:border-slate-300 dark:hover:border-zinc-700 shadow-md'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase text-white bg-linear-to-r from-emerald-500 to-teal-500 shadow-md shadow-emerald-500/30">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {plan.name}
                  </h4>
                  <div className="text-xs text-slate-500 dark:text-zinc-400 mb-4">
                    {plan.target}
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60 mb-6 flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-zinc-400 font-medium">Garantía SLA:</span>
                    <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {plan.sla}
                    </span>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-zinc-300">
                        <BadgeCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div>
                  <a
                    href={getWhatsAppPlanLink(plan.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[44px] ${
                      plan.popular
                        ? 'bg-linear-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-lg shadow-emerald-500/20 hover:scale-[1.02]'
                        : 'bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 hover:bg-slate-200 dark:hover:bg-zinc-700'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Contratar o Cotizar Plan</span>
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

