'use client';

import React, { useState } from 'react';
import { 
  Calculator, 
  MessageSquare, 
  Send, 
  Building2, 
  MapPin, 
  User, 
  Check, 
  Sparkles,
  Server,
  Wifi,
  Video,
  Scissors,
  Dumbbell,
  Terminal,
  Wrench,
  Calendar,
  PhoneCall
} from 'lucide-react';
import { QuoteData, buildWhatsAppMessage, generateWhatsAppUrl } from '@/utils/whatsapp';
import { PRIMARY_WHATSAPP, SECONDARY_WHATSAPP, WHATSAPP_CONTACTS, getWhatsAppUrl } from '@/config/contacts';

const SERVICES = [
  { id: 'Cableado Estructurado & Racks Cat 6/FO', label: 'Cableado & Racks', icon: Server },
  { id: 'Redes Wi-Fi Empresariales (MikroTik / UniFi)', label: 'Wi-Fi Empresarial', icon: Wifi },
  { id: 'CCTV Cámaras IP & Seguridad IA', label: 'Cámaras CCTV 4K', icon: Video },
  { id: 'UPGRADE Barber OS (Turnos + MP + PWA)', label: 'Barber OS SaaS', icon: Scissors },
  { id: 'UPGRADE Gym & Fitness (Socios + Accesos)', label: 'Gym & Fitness', icon: Dumbbell },
  { id: 'Software a Medida & ERP Comercial', label: 'Software a Medida', icon: Terminal },
  { id: 'Abono Mensual de Mantenimiento IT', label: 'Abono Soporte', icon: Wrench },
];

const SCALES = [
  { id: 'Local / Comercio (1 a 5 puestos)', label: 'Comercio / Local', desc: '1 a 5 puestos o equipos' },
  { id: 'Pyme en Expansión (6 a 20 puestos)', label: 'Pyme', desc: '6 a 20 puestos o equipos' },
  { id: 'Corporativo / Industria (+20 puestos)', label: 'Corporativo', desc: '+20 puestos o naves' },
];

const SCOPES = [
  { id: 'Instalación Nueva desde Cero', label: 'Obra / Proyecto Nuevo' },
  { id: 'Reestructuración y Solución a Fallas', label: 'Optimizar Sistema Actual' },
  { id: 'Auditoría & Presupuesto Formal', label: 'Relevamiento Técnico' },
];

export function InteractiveQuoteSection() {
  const [service, setService] = useState(SERVICES[0].id);
  const [scale, setScale] = useState(SCALES[1].id);
  const [scope, setScope] = useState(SCOPES[0].id);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('Catamarca');
  const [notes, setNotes] = useState('');
  const [targetContact, setTargetContact] = useState<'ulises' | 'gabriel'>('ulises');

  const quoteData: QuoteData = {
    service,
    scale,
    scope,
    name,
    company,
    location,
    additionalNotes: notes
  };

  const previewMessage = buildWhatsAppMessage(quoteData);
  const activePhone = targetContact === 'ulises' ? PRIMARY_WHATSAPP : SECONDARY_WHATSAPP;
  const whatsappUrl = generateWhatsAppUrl(activePhone, quoteData);

  return (
    <section 
      id="cotizador" 
      className="py-20 md:py-28 relative scroll-mt-16"
      aria-labelledby="quote-heading"
    >
      {/* Background Glow */}
      <div 
        className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Cotizador Express // Presupuesto Inmediato</span>
          </div>

          <h2 
            id="quote-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-6"
          >
            Configura tu Proyecto y Recibe Presupuesto en Minutos
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Selecciona el rubro, la dimensión de tu empresa y tus necesidades clave. Nuestro sistema estructurará el mensaje oficial para que nuestro equipo técnico te responda de inmediato por WhatsApp.
          </p>
        </div>

        {/* Interactive Calculator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form Column (Steps 1, 2, 3 & Contact) */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-zinc-800/80 bg-white/90 dark:bg-[#0c0e17]/90 shadow-xl space-y-8">
            
            {/* Step 1: Service Selection */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-slate-700 dark:text-zinc-300 mb-3">
                1. Selecciona el Servicio o Producto Principal:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {SERVICES.map((item) => {
                  const SIcon = item.icon;
                  const isSelected = service === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setService(item.id)}
                      className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all duration-150 min-h-[44px] cursor-pointer ${
                        isSelected
                          ? 'border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 text-cyan-950 dark:text-cyan-200 shadow-xs ring-1 ring-cyan-500'
                          : 'border-slate-200/80 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 text-slate-700 dark:text-zinc-300 hover:border-slate-300 dark:hover:border-zinc-700'
                      }`}
                    >
                      <SIcon className={`w-4 h-4 mb-2 ${isSelected ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-400 dark:text-zinc-500'}`} />
                      <span className="text-xs font-bold leading-tight">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Scale Selection */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-slate-700 dark:text-zinc-300 mb-3">
                2. Escala de tu Establecimiento / Empresa:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {SCALES.map((item) => {
                  const isSelected = scale === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setScale(item.id)}
                      className={`flex flex-col p-3.5 rounded-xl border text-left transition-all min-h-[44px] cursor-pointer ${
                        isSelected
                          ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 text-blue-950 dark:text-blue-200 shadow-xs ring-1 ring-blue-500'
                          : 'border-slate-200/80 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 text-slate-700 dark:text-zinc-300 hover:border-slate-300 dark:hover:border-zinc-700'
                      }`}
                    >
                      <span className="text-xs font-bold text-slate-900 dark:text-white">{item.label}</span>
                      <span className="text-[11px] text-slate-500 dark:text-zinc-400 mt-1">{item.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Scope Type */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-slate-700 dark:text-zinc-300 mb-3">
                3. Tipo de Intervención:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {SCOPES.map((item) => {
                  const isSelected = scope === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setScope(item.id)}
                      className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all min-h-[44px] cursor-pointer ${
                        isSelected
                          ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-200 shadow-xs ring-1 ring-emerald-500'
                          : 'border-slate-200/80 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 text-slate-700 dark:text-zinc-300 hover:border-slate-300 dark:hover:border-zinc-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Contact details (Font size >= 16px to prevent iOS auto-zoom) */}
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-zinc-800/80">
              <label className="block text-xs uppercase tracking-wider font-bold text-slate-700 dark:text-zinc-300">
                4. Tus Datos de Contacto (Opcional para personalizar el mensaje):
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-name" className="block text-xs text-slate-500 dark:text-zinc-400 mb-1">
                    Nombre o Contacto
                  </label>
                  <input
                    id="quote-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Carlos Morales"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/50 text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 min-h-[44px]"
                  />
                </div>

                <div>
                  <label htmlFor="quote-company" className="block text-xs text-slate-500 dark:text-zinc-400 mb-1">
                    Empresa / Local Comercial
                  </label>
                  <input
                    id="quote-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Ej. Distribuidora NOA"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/50 text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 min-h-[44px]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="quote-location" className="block text-xs text-slate-500 dark:text-zinc-400 mb-1">
                  Localidad / Ciudad
                </label>
                <input
                  id="quote-location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Ej. San Fernando del Valle de Catamarca"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/50 text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 min-h-[44px]"
                />
              </div>

              <div>
                <label htmlFor="quote-notes" className="block text-xs text-slate-500 dark:text-zinc-400 mb-1">
                  Detalles o Comentarios Adicionales
                </label>
                <textarea
                  id="quote-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ej. Necesitamos 12 puestos de red y 3 cámaras de seguridad en depósito..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/50 text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

          </div>

          {/* Right Preview Column: WhatsApp live preview */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            <div className="rounded-3xl p-6 border border-emerald-500/30 bg-white/95 dark:bg-[#0c0e17]/95 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-zinc-800/80 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-700 dark:text-zinc-300">
                    Mensaje Generado para WhatsApp
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-bold">
                  PRE-CARGADO
                </span>
              </div>

              {/* Message Preview Box */}
              <div className="p-4 rounded-2xl bg-slate-950 text-emerald-400 font-mono text-xs whitespace-pre-wrap leading-relaxed border border-zinc-800 shadow-inner max-h-64 overflow-y-auto">
                {previewMessage}
              </div>

              {/* WhatsApp Action Button */}
              <div className="mt-6 space-y-3">
                {/* Advisor Selector */}
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs">
                  <div className="text-[11px] text-slate-500 dark:text-zinc-400 font-semibold mb-1.5">
                    Enviar cotización a:
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setTargetContact('ulises')}
                      className={`p-2 rounded-lg text-left transition-all ${
                        targetContact === 'ulises'
                          ? 'bg-emerald-500 text-white font-bold shadow-xs'
                          : 'bg-white/60 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300'
                      }`}
                    >
                      <div className="text-xs">{WHATSAPP_CONTACTS.ulises.name}</div>
                      <div className="text-[10px] opacity-80">{WHATSAPP_CONTACTS.ulises.display}</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setTargetContact('gabriel')}
                      className={`p-2 rounded-lg text-left transition-all ${
                        targetContact === 'gabriel'
                          ? 'bg-emerald-500 text-white font-bold shadow-xs'
                          : 'bg-white/60 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300'
                      }`}
                    >
                      <div className="text-xs">{WHATSAPP_CONTACTS.gabriel.name}</div>
                      <div className="text-[10px] opacity-80">{WHATSAPP_CONTACTS.gabriel.display}</div>
                    </button>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full px-6 py-4 rounded-2xl text-base font-bold text-white bg-linear-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:via-teal-500 hover:to-emerald-400 shadow-xl shadow-emerald-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] min-h-[52px]"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Cotización a {targetContact === 'ulises' ? 'Ulises Gordillo' : 'Gabriel Estani'}</span>
                </a>

                <div className="text-center text-[11px] text-slate-500 dark:text-zinc-400">
                  ⚡ Respuesta técnica garantizada en menos de 2 horas hábiles.
                </div>
              </div>

            </div>

            {/* Direct Agenda Call Option */}
            <div className="rounded-2xl p-5 border border-slate-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">¿Prefieres coordinar una llamada?</div>
                  <div className="text-slate-500 dark:text-zinc-400">Podemos coordinar una reunión técnica o visita.</div>
                </div>
              </div>
              <a
                href={getWhatsAppUrl("Hola UPGRADE, deseo agendar una llamada o visita técnica.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl text-blue-600 dark:text-cyan-400 hover:bg-blue-50 dark:hover:bg-zinc-800 font-semibold transition-colors shrink-0"
              >
                Agendar &rarr;
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

