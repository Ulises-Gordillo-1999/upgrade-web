'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme, ThemeMode } from '@/components/theme/ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div 
        className="w-10 h-10 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-100/50 dark:bg-zinc-900/50 animate-pulse" 
        aria-hidden="true" 
      />
    );
  }

  const cycleTheme = () => {
    const sequence: ThemeMode[] = ['dark', 'light', 'system'];
    const nextIndex = (sequence.indexOf(theme) + 1) % sequence.length;
    setTheme(sequence[nextIndex]);
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-4 h-4 text-amber-500 transition-transform duration-300 rotate-0 scale-100" />;
      case 'dark':
        return <Moon className="w-4 h-4 text-cyan-400 transition-transform duration-300 rotate-0 scale-100" />;
      case 'system':
      default:
        return <Monitor className="w-4 h-4 text-emerald-400 transition-transform duration-300 rotate-0 scale-100" />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Tema: Claro (clic para alternar)';
      case 'dark':
        return 'Tema: Oscuro (clic para alternar)';
      case 'system':
        return 'Tema: Sistema (clic para alternar)';
    }
  };

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className="relative flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl border border-slate-200 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/80 hover:bg-slate-100 dark:hover:bg-zinc-800/90 text-slate-700 dark:text-zinc-200 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 shadow-xs"
      aria-label={getLabel()}
      title={getLabel()}
    >
      <span className="sr-only">{getLabel()}</span>
      {getIcon()}
    </button>
  );
}

