'use client';

import React, { useState } from 'react';
import { 
  SOFTWARE_PRODUCTS, 
  SoftwareProduct 
} from '@/data/softwareData';
import { DemoBarberModal } from '@/components/modals/DemoBarberModal';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Play, 
  MessageSquare,
  Smartphone,
  ShieldCheck,
  Zap,
  BarChart3
} from 'lucide-react';
import { getWhatsAppUrl } from '@/config/contacts';

export function SoftwareSuitesSection() {
  const [demoOpen, setDemoOpen] = useState(false);

  const getWhatsAppProductLink = (productName: string) => {
    return getWhatsAppUrl(`Hola UPGRADE, me interesa conocer más y cotizar: ${productName}.`);
  };

  return (
    <section 
      id="software" 
      className="py-20 md:py-28 relative scroll-mt-16"
      aria-labelledby="software-heading"
    >
      {/* Background Glow */}
      <div 
        className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/10 blur-[140px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Pilar 2 // SaaS Sectoriales & Software a Medida</span>
          </div>

          <h2 
            id="software-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-6"
          >
            Plataformas de Software que Multiplican tus Ventas
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Desarrollamos soluciones verticales que resuelven los problemas reales de cada industria: cobros anticipados para erradicar el ausentismo, control biométrico de accesos y ERPs a medida sin licencias mensuales abusivas.
          </p>
        </div>

        {/* Flagship Product: UPGRADE Barber OS */}
        {(() => {
          const barber = SOFTWARE_PRODUCTS[0];
          const BarberIcon = barber.icon;

          return (
            <div className="relative rounded-3xl p-1 bg-linear-to-r from-amber-500/40 via-orange-500/30 to-purple-500/40 shadow-2xl mb-12">
              <div className="rounded-[23px] bg-white dark:bg-[#0c0e17] p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800/80">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column Info */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                        <BarberIcon className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                            {barber.name}
                          </h3>
                          <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
                            PRODUCTO ESTRELLA
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-amber-600 dark:text-amber-400">
                          {barber.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
                      {barber.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {barber.features.map((feat, fIdx) => {
                        const FIcon = feat.icon;
                        return (
                          <div 
                            key={fIdx}
                            className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60 flex items-start gap-3"
                          >
                            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500 shrink-0 mt-0.5">
                              <FIcon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-900 dark:text-white">
                                {feat.title}
                              </div>
                              <div className="text-[11px] text-slate-500 dark:text-zinc-400 mt-0.5 leading-snug">
                                {feat.desc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setDemoOpen(true)}
                        className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 shadow-lg shadow-orange-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] min-h-[48px]"
                      >
                        <Play className="w-4 h-4 fill-white" />
                        <span>Ver Demo en Vivo</span>
                      </button>

                      <a
                        href={getWhatsAppProductLink('UPGRADE Barber OS')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-all min-h-[48px]"
                      >
                        <MessageSquare className="w-4 h-4 text-emerald-500" />
                        <span>Cotizar para mi Salón</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column Visual Mock */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl p-5 bg-slate-950 text-white border border-zinc-800 shadow-xl space-y-4 font-mono">
                      <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-xs text-zinc-400">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                          PANEL DE GESTIÓN EN VIVO
                        </span>
                        <span className="text-amber-400 font-bold">Catamarca</span>
                      </div>

                      {/* Mocked Metrics */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                          <div className="text-[10px] text-zinc-400">Turnos Hoy</div>
                          <div className="text-xl font-bold text-white">42 Reservas</div>
                          <div className="text-[10px] text-emerald-400">100% Abonadas</div>
                        </div>
                        <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                          <div className="text-[10px] text-zinc-400">Ausentismo</div>
                          <div className="text-xl font-bold text-emerald-400">0%</div>
                          <div className="text-[10px] text-zinc-400">Con seña anticipada</div>
                        </div>
                      </div>

                      {/* Live Booking item */}
                      <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-800/40 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-amber-300 font-bold">Reserva confirmada</span>
                          <span className="text-zinc-400 text-[10px]">Hace 2 min</span>
                        </div>
                        <div className="text-zinc-300 mt-1">Juan P. // Barba + Corte Degradé</div>
                        <div className="text-[10px] text-emerald-400 mt-0.5">Pagado con Mercado Pago QR</div>
                      </div>

                      <div className="text-center pt-2">
                        <button
                          type="button"
                          onClick={() => setDemoOpen(true)}
                          className="text-xs text-cyan-400 hover:text-cyan-300 underline underline-offset-4 cursor-pointer"
                        >
                          Haz clic para interactuar con la demo guiada &rarr;
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })()}

        {/* Secondary Products Grid: Gym OS & Custom Software */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SOFTWARE_PRODUCTS.slice(1).map((product: SoftwareProduct) => {
            const ProductIcon = product.icon;

            return (
              <div
                key={product.id}
                className="rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-[#0c0e17]/80 hover:border-slate-300 dark:hover:border-zinc-700 shadow-md flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-white">
                      <ProductIcon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 border border-slate-200/60 dark:border-zinc-700/60">
                      {product.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {product.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 dark:text-zinc-400 mb-4">
                    {product.tagline}
                  </div>

                  <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800/80 mb-6">
                    {product.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 dark:text-white">{feat.title}:</strong> {feat.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/80">
                  <a
                    href={getWhatsAppProductLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl text-xs font-semibold text-slate-800 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-800/80 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-600 dark:hover:text-white transition-all min-h-[44px]"
                  >
                    <span>{product.actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Modal */}
      <DemoBarberModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}

