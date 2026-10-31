'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Server, 
  Menu, 
  X, 
  MessageSquare, 
  ChevronRight, 
  Layers, 
  Wrench, 
  Award, 
  Calculator,
  ArrowUpRight
} from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { getWhatsAppUrl } from '@/config/contacts';

export const NAV_LINKS = [
  { href: '#infraestructura', label: 'Infraestructura IT', icon: Server },
  { href: '#software', label: 'Software Suites', icon: Layers },
  { href: '#soporte', label: 'Soporte Técnico', icon: Wrench },
  { href: '#casos', label: 'Casos Reales', icon: Award },
  { href: '#cotizador', label: 'Cotizador', icon: Calculator },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to dismiss mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const whatsappUrl = getWhatsAppUrl("Hola UPGRADE, deseo consultar por servicios tecnológicos.");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-[#090a0f]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-zinc-800/80 shadow-xs'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-16 sm:h-20 w-full gap-2">
            {/* Brand Logo */}
            <Link
              href="#hero"
              className="flex items-center gap-2 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-xl min-w-0 shrink"
              aria-label="UPGRADE - Inicio"
            >
              <div className="relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl overflow-hidden border border-cyan-500/40 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow bg-[#090a0f] shrink-0">
                <Image
                  src="/logo_upgrade_solo.jpg"
                  alt="UPGRADE Isotipo"
                  width={44}
                  height={44}
                  className="object-cover w-full h-full scale-105 group-hover:scale-110 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-base sm:text-xl font-extrabold tracking-tight text-slate-900 dark:text-white truncate">
                    UPGRADE
                  </span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                </div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest text-slate-500 dark:text-zinc-400 font-medium truncate">
                  Informática & Seguridad
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-2 rounded-xl text-sm font-medium text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800/60 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Right Actions */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <ThemeToggle />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-linear-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-md shadow-emerald-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>

            {/* Mobile Actions & Hamburger */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="flex items-center justify-center min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/80 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                aria-label="Abrir menú de navegación"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Off-Canvas Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs lg:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Off-Canvas Drawer */}
      <aside
        className={`fixed top-0 bottom-0 right-0 z-50 w-80 max-w-[85vw] bg-white dark:bg-[#090a0f] border-l border-slate-200 dark:border-zinc-800/90 p-6 shadow-2xl lg:hidden transform transition-all duration-300 ease-in-out flex flex-col justify-between ${
          mobileMenuOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible pointer-events-none'
        }`}
        aria-label="Menú móvil de navegación"
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-zinc-800/80 mb-6">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-cyan-500/40 bg-[#090a0f]">
                <Image
                  src="/logo_upgrade_solo.jpg"
                  alt="UPGRADE Isotipo"
                  width={36}
                  height={36}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
                  UPGRADE
                </span>
                <span className="text-[10px] text-slate-500 dark:text-zinc-400">
                  Informática & Seguridad
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Cerrar menú"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <nav className="space-y-1.5">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-slate-700 dark:text-zinc-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-zinc-900/60 transition-all min-h-[44px]"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-cyan-500" />
                    <span>{link.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer Actions */}
        <div className="pt-6 border-t border-slate-100 dark:border-zinc-800/80 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400 px-1">
            <span>Preferencia de tema</span>
            <ThemeToggle />
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold text-white bg-linear-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-md shadow-emerald-500/20 transition-all min-h-[44px]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Contactar por WhatsApp</span>
          </a>
        </div>
      </aside>
    </>
  );
}

