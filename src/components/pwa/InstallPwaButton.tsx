"use client";

import { useEffect, useState } from "react";
import { Download, Smartphone, CheckCircle, Share, X } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function InstallPwaButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIosGuide, setShowIosGuide] = useState(false);

  useEffect(() => {
    // 1. Check if already installed in standalone mode
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      // @ts-expect-error iOS Safari proprietary property
      window.navigator.standalone === true
    ) {
      setIsInstalled(true);
      return;
    }

    // 2. Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isAppleDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isAppleDevice);

    // 3. Listen for Android/Chromium install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isInstalled) return;

    if (deferredPrompt) {
      // Trigger native Chrome/Android install dialog
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === "accepted") {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else if (isIOS) {
      setShowIosGuide(true);
    } else {
      // Fallback for browsers that support install via browser menu
      alert("Para instalar UPGRADE en tu dispositivo, abrí el menú de tu navegador y seleccioná 'Instalar aplicación' o 'Agregar a la pantalla principal'.");
    }
  };

  if (isInstalled) {
    return (
      <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium">
        <CheckCircle className="w-4 h-4 shrink-0" />
        <span>Aplicación UPGRADE instalada</span>
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={handleInstallClick}
        className="flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-cyan-500/50 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all min-h-[44px] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
        aria-label="Instalar aplicación UPGRADE en este dispositivo"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-cyan-500/10 text-cyan-500 group-hover:scale-105 transition-transform">
            <Smartphone className="w-3.5 h-3.5" />
          </div>
          <span>Instalar App en el Celular</span>
        </div>
        <Download className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
      </button>

      {/* iOS Safari Install Guide Modal */}
      {showIosGuide && (
        <div className="fixed inset-0 z-60 flex items-end sm:items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="w-full max-w-sm rounded-2xl bg-white dark:bg-[#0c0d14] border border-slate-200 dark:border-zinc-800 p-5 shadow-2xl space-y-4 animate-in fade-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-cyan-500" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Instalar UPGRADE en iOS
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowIosGuide(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800"
                aria-label="Cerrar instrucciones"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <ol className="text-xs text-slate-600 dark:text-zinc-300 space-y-3 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-500 font-bold shrink-0 mt-0.5">
                  1
                </span>
                <span>
                  Tocá el botón <strong>Compartir</strong> <Share className="inline w-3.5 h-3.5 mx-1 text-cyan-500" /> en la barra inferior de Safari.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-500 font-bold shrink-0 mt-0.5">
                  2
                </span>
                <span>
                  Deslizá hacia abajo y seleccioná <strong>&quot;Agregar a la pantalla de inicio&quot;</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-500 font-bold shrink-0 mt-0.5">
                  3
                </span>
                <span>
                  Tocá <strong>&quot;Agregar&quot;</strong> arriba a la derecha. ¡Listo! Quedará como app nativa.
                </span>
              </li>
            </ol>

            <button
              type="button"
              onClick={() => setShowIosGuide(false)}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-cyan-500 hover:bg-cyan-400 transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </>
  );
}

