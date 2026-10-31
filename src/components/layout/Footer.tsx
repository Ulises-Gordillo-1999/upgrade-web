'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Server, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  MessageSquare, 
  ArrowUp,
  ChevronRight,
  Layers,
  Wrench,
  Award,
  Calculator
} from 'lucide-react';
import { NAV_LINKS } from './Navbar';
import { WHATSAPP_CONTACTS, getWhatsAppUrl } from '@/config/contacts';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="border-t border-slate-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#07080c] text-slate-700 dark:text-zinc-300 transition-colors overflow-hidden w-full max-w-full"
      aria-label="Pie de página institucional"
    >
      {/* Top Banner: Regional Coverage */}
      <div className="border-b border-slate-100 dark:border-zinc-900 py-6 bg-slate-50/50 dark:bg-zinc-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-semibold text-slate-800 dark:text-zinc-200">
              Cobertura Activa:
            </span>
            <span className="text-slate-600 dark:text-zinc-400">
              San Fernando del Valle de Catamarca, Valle Viejo, Fray Mamerto Esquiú y región NOA.
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-500 dark:text-zinc-400 font-mono text-[11px]">
            <span>RED CERTIFICADA TIA/EIA</span>
            <span>•</span>
            <span>MIKROTIK & UNIFI COMPLIANT</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-cyan-500/40 shadow-md shadow-cyan-500/20 bg-[#090a0f]">
                <Image
                  src="/logo_upgrade_solo.jpg"
                  alt="UPGRADE Isotipo"
                  width={44}
                  height={44}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  UPGRADE
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-zinc-400 font-medium">
                  Informática & Seguridad
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
              Infraestructura tecnológica de alta fiabilidad, redes empresariales, videovigilancia IP y desarrollo de software sectorial para empresas con requerimiento de servicio ininterrumpido.
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Hola UPGRADE, deseo comunicarme con el equipo técnico y comercial.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-linear-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-md shadow-emerald-500/20 transition-all min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Hablar con un Especialista</span>
              </a>
            </div>
          </div>

          {/* Navigation Links (Col 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Soluciones & Servicios
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#infraestructura" className="text-slate-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                  <span>Cableado & Fibra Cat 6</span>
                </Link>
              </li>
              <li>
                <Link href="#infraestructura" className="text-slate-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                  <span>Wi-Fi Empresarial UniFi & MikroTik</span>
                </Link>
              </li>
              <li>
                <Link href="#software" className="text-slate-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                  <span>UPGRADE Barber OS (SaaS)</span>
                </Link>
              </li>
              <li>
                <Link href="#software" className="text-slate-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                  <span>UPGRADE Gym & Fitness OS</span>
                </Link>
              </li>
              <li>
                <Link href="#soporte" className="text-slate-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                  <span>Abonos de Mantenimiento IT</span>
                </Link>
              </li>
              <li>
                <Link href="#casos" className="text-slate-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                  <span>Casos de Éxito en Catamarca</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Operational Hours (Col 8-9) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Horarios & Guardia
            </div>
            <div className="space-y-3 text-xs text-slate-600 dark:text-zinc-400">
              <div>
                <div className="font-semibold text-slate-800 dark:text-zinc-200">Oficina Comercial:</div>
                <div className="mt-0.5">Lun a Vie: 08:30 a 13:00</div>
                <div>y 16:30 a 20:30 hs.</div>
              </div>

              <div>
                <div className="font-semibold text-slate-800 dark:text-zinc-200">Sábados:</div>
                <div className="mt-0.5">09:00 a 13:00 hs.</div>
              </div>

              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                <div className="font-bold flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>Guardia 24/7</span>
                </div>
                <div className="text-[11px] mt-0.5">
                  Para clientes con abono corporativo activo.
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Contacto Directo
            </div>
            <div className="space-y-2.5 text-xs text-slate-600 dark:text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <span>San Fernando del Valle de Catamarca, Argentina (CP 4700)</span>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <a 
                    href={`https://wa.me/${WHATSAPP_CONTACTS.ulises.international}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-500 transition-colors"
                  >
                    Ulises Gordillo: <span className="font-semibold">{WHATSAPP_CONTACTS.ulises.display}</span>
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <a 
                    href={`https://wa.me/${WHATSAPP_CONTACTS.gabriel.international}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Gabriel Estani: <span className="font-semibold">{WHATSAPP_CONTACTS.gabriel.display}</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>contacto@upgrade-informatica.com</span>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors min-h-[44px]"
                  aria-label="Volver arriba"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Volver al inicio</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & tech credits */}
        <div className="pt-10 mt-12 border-t border-slate-100 dark:border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-zinc-500">
          <div>
            &copy; {currentYear} UPGRADE Soluciones Tecnológicas. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span>Next.js 16</span>
            <span>•</span>
            <span>Tailwind CSS v4</span>
            <span>•</span>
            <span>Hetzner Cloud + Coolify</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

