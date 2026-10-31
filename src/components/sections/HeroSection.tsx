'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Server, 
  Wifi, 
  Video, 
  CheckCircle2,
  Sparkles,
  Layers
} from 'lucide-react';
import { getWhatsAppUrl } from '@/config/contacts';

export function HeroSection() {
  const whatsappUrl = getWhatsAppUrl("Hola UPGRADE, deseo asesoramiento técnico e infraestructura.");

  return (
    <section 
      id="hero" 
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden"
      aria-label="Presentación de UPGRADE Soluciones Tecnológicas"
    >
      {/* Ambient Glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] md:w-[900px] md:h-[450px] bg-cyan-500/10 dark:bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-blue-600/10 dark:bg-blue-600/15 blur-[100px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Availability Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/30 dark:border-cyan-500/20 bg-cyan-500/5 dark:bg-cyan-950/40 backdrop-blur-md mb-6 shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-cyan-900 dark:text-cyan-300">
                Disponibilidad inmediata en Catamarca y región NOA
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
              Infraestructura tecnológica robusta y{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-500">
                software a medida
              </span>{' '}
              para empresas que no se detienen.
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-zinc-300 max-w-2xl font-normal leading-relaxed mb-8">
              Diseñamos, desplegamos y certificamos redes de alta densidad, cableado estructurado, circuitos de videovigilancia IP y plataformas de software especializadas para optimizar la continuidad operativa de tu negocio.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Link
                href="#infraestructura"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-linear-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:via-blue-500 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] min-h-[48px]"
              >
                <span>Explorar Soluciones</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-800 dark:text-zinc-200 bg-white/80 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] min-h-[48px] shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 pt-6 border-t border-slate-200/80 dark:border-zinc-800/80 w-full text-xs text-slate-600 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>SLA <span className="font-semibold text-slate-900 dark:text-zinc-200">Garantizado</span></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>MikroTik & UniFi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Desarrollo Propio</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Enterprise Tech Monitor Widget */}
          <div className="lg:col-span-5 relative">
            {/* Blueprint Decorative Border */}
            <div className="relative rounded-2xl p-[1px] bg-linear-to-b from-cyan-500/40 via-blue-500/20 to-transparent shadow-2xl">
              <div className="rounded-2xl bg-white/95 dark:bg-[#0c0e17]/95 backdrop-blur-xl p-5 sm:p-6 border border-slate-200/60 dark:border-zinc-800/80">
                
                {/* Panel Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/60 dark:border-zinc-800/80 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-500 dark:text-zinc-400">
                      UPGRADE Core // Telemetría
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <Activity className="w-3 h-3 animate-pulse" />
                    <span>EN LÍNEA</span>
                  </div>
                </div>

                {/* Simulated Telemetry Nodes */}
                <div className="space-y-3 font-mono text-xs">
                  
                  {/* Node 1: Red Empresarial */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                        <Wifi className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800 dark:text-zinc-200">MikroTik + UniFi 6 APs</div>
                        <div className="text-[11px] text-slate-500 dark:text-zinc-400">Dual WAN Failover Activo</div>
                      </div>
                    </div>
                    <span className="text-emerald-500 font-medium">99.99% Up</span>
                  </div>

                  {/* Node 2: Servidor & Racks */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                        <Server className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800 dark:text-zinc-200">Rack 42U + Storage NAS</div>
                        <div className="text-[11px] text-slate-500 dark:text-zinc-400">Cat 6 Certificado & Proxmox</div>
                      </div>
                    </div>
                    <span className="text-cyan-500 font-medium">10 GbE SFP+</span>
                  </div>

                  {/* Node 3: CCTV & Seguridad */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        <Video className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800 dark:text-zinc-200">Cámaras IP 4K + NVR IA</div>
                        <div className="text-[11px] text-slate-500 dark:text-zinc-400">Analítica perimetral 24/7</div>
                      </div>
                    </div>
                    <span className="text-emerald-500 font-medium">Grabando</span>
                  </div>

                  {/* Node 4: Barber OS SaaS */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800 dark:text-zinc-200">UPGRADE Barber OS</div>
                        <div className="text-[11px] text-slate-500 dark:text-zinc-400">Turnos en vivo + Mercado Pago</div>
                      </div>
                    </div>
                    <span className="text-purple-400 font-medium">Cloud v2.4</span>
                  </div>

                </div>

                {/* Bottom Banner */}
                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-zinc-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-zinc-400 font-mono">
                  <span>LATENCIA MEDIA: 2ms</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-semibold">SEGURIDAD AES-256</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-200/80 dark:border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="flex flex-col">
            <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-blue-500">
              +50
            </span>
            <span className="text-sm font-semibold text-slate-800 dark:text-zinc-200 mt-1">
              Empresas Conectadas
            </span>
            <span className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
              En Catamarca y región NOA
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-teal-400">
              99.9%
            </span>
            <span className="text-sm font-semibold text-slate-800 dark:text-zinc-200 mt-1">
              Uptime en Redes
            </span>
            <span className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
              Dual WAN contra caídas
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-indigo-500">
              &lt; 2 hs
            </span>
            <span className="text-sm font-semibold text-slate-800 dark:text-zinc-200 mt-1">
              Respuesta Técnica
            </span>
            <span className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
              Abonos de soporte corporativo
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500">
              100%
            </span>
            <span className="text-sm font-semibold text-slate-800 dark:text-zinc-200 mt-1">
              Software Propio
            </span>
            <span className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
              Barber OS & ERPs a medida
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

