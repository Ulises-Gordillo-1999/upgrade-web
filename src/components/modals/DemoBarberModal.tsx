'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  Check, 
  ArrowRight, 
  MessageSquare, 
  Calendar, 
  CreditCard, 
  Fingerprint, 
  Truck, 
  Sparkles,
  Scissors,
  Smartphone,
  ExternalLink
} from 'lucide-react';
import { BARBER_DEMO_TABS } from '@/data/softwareData';
import { getWhatsAppUrl } from '@/config/contacts';

interface DemoBarberModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoBarberModal({ isOpen, onClose }: DemoBarberModalProps) {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(BARBER_DEMO_TABS[0].id);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const currentTabData = BARBER_DEMO_TABS.find((t) => t.id === activeTab) || BARBER_DEMO_TABS[0];
  const whatsappDemoUrl = getWhatsAppUrl(
    'Hola UPGRADE, quiero agendar una demostración en vivo de UPGRADE Barber OS para mi barbería.'
  );

  return createPortal(
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[90dvh] bg-white dark:bg-[#0c0e17] border border-slate-200 dark:border-zinc-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100 dark:border-zinc-800/80 bg-slate-50/50 dark:bg-zinc-900/40">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 id="demo-modal-title" className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  UPGRADE Barber OS
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 font-semibold">
                  DEMO INTERACTIVA
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-zinc-400">
                Explora el ecosistema operativo para barberías de alta demanda
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Cerrar modal de demo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center overflow-x-auto p-2 sm:p-3 border-b border-slate-100 dark:border-zinc-800/80 bg-slate-100/40 dark:bg-zinc-900/20 gap-2 shrink-0">
          {BARBER_DEMO_TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all min-h-[44px] ${
                  isActive
                    ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-white shadow-xs border border-slate-200 dark:border-zinc-700'
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 hover:bg-white/50 dark:hover:bg-zinc-800/50'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Body Content (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Feature explanation */}
            <div className="md:col-span-7 space-y-4">
              <span className={`inline-block text-xs font-mono font-semibold px-2.5 py-1 rounded-full border ${currentTabData.badgeColor}`}>
                Módulo Activo
              </span>
              <h4 className="text-2xl font-black text-slate-900 dark:text-white">
                {currentTabData.title}
              </h4>
              <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                {currentTabData.subtitle}
              </p>
              
              <div className="space-y-3 pt-2">
                {currentTabData.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-zinc-300">
                    <div className="p-0.5 rounded-full bg-emerald-500/10 text-emerald-500 mt-0.5 shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Simulated Visual Interface */}
            <div className="md:col-span-5">
              <div className="relative rounded-2xl p-4 bg-slate-950 text-white border border-zinc-800 shadow-xl font-mono text-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-[11px] text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>APP BARBER OS</span>
                  </div>
                  <span>100% ONLINE</span>
                </div>

                {activeTab === 'turnos' && (
                  <div className="space-y-2 py-1">
                    <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                      <div className="text-[10px] text-zinc-400">Próximo Turno: 17:30 hs</div>
                      <div className="font-bold text-amber-400 text-sm">Corte Fade + Perfilado Barba</div>
                      <div className="text-zinc-300 text-[11px]">Cliente: Marcos D. // Sillón #2</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
                      <div className="text-[10px] text-zinc-400">Siguiente: 18:15 hs</div>
                      <div className="font-semibold text-zinc-200">Corte Clásico + Lavado</div>
                    </div>
                  </div>
                )}

                {activeTab === 'pagos' && (
                  <div className="space-y-2 py-1">
                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/50">
                      <div className="text-[10px] text-emerald-400">Pago Recibido Mercado Pago</div>
                      <div className="font-bold text-emerald-300 text-sm">$ 9.500,00 ARS</div>
                      <div className="text-zinc-300 text-[11px]">Seña 100% acreditada</div>
                    </div>
                    <div className="text-[11px] text-zinc-400 text-center">
                      Ausentismo del mes: <span className="text-emerald-400 font-bold">0.4%</span>
                    </div>
                  </div>
                )}

                {activeTab === 'pwa' && (
                  <div className="space-y-2 py-1 text-center">
                    <div className="flex justify-center py-2">
                      <div className="p-3 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        <Fingerprint className="w-8 h-8 animate-pulse" />
                      </div>
                    </div>
                    <div className="font-bold text-white text-xs">Acceso Biométrico Verificado</div>
                    <div className="text-[11px] text-zinc-400">Barbero: Santiago R. (ID #04)</div>
                  </div>
                )}

                {activeTab === 'cadeteria' && (
                  <div className="space-y-2 py-1">
                    <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-800/50">
                      <div className="text-[10px] text-purple-400">Orden de Envío #142</div>
                      <div className="font-bold text-purple-300 text-sm">2x Cera Mate + Óleo Barba</div>
                      <div className="text-zinc-300 text-[11px]">Cadete en Camino // Entrega 25 min</div>
                    </div>
                    <div className="text-[11px] text-zinc-400 flex justify-between">
                      <span>Caja Diaria Productos:</span>
                      <span className="text-emerald-400 font-bold">$ 48.000</span>
                    </div>
                  </div>
                )}

                <div className="pt-2 border-t border-zinc-800 text-[10px] text-zinc-500 text-center">
                  UPGRADE Barber Engine v2.4
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-100 dark:border-zinc-800/80 bg-slate-50/70 dark:bg-zinc-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 dark:text-zinc-400 text-center sm:text-left">
            ¿Quieres probar Barber OS en tu salón? Te lo configuramos en 24 horas.
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors min-h-[44px]"
            >
              Cerrar
            </button>

            <a
              href="https://barberia.upgrade-informatica.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-amber-500/40 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 transition-colors min-h-[44px]"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Ver App en Vivo</span>
            </a>

            <a
              href={whatsappDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 shadow-md shadow-amber-500/20 transition-all min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Solicitar Demo Guiada</span>
            </a>
          </div>
        </div>

      </div>
    </div>,
    document.body
  );
}

