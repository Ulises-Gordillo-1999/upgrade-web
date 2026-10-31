import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#090a0f" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://upgrade-informatica.com"),
  title: "UPGRADE | Informática, Infraestructura IT & Soluciones de Software",
  description:
    "Especialistas en cableado estructurado Cat 6/FO, redes Wi-Fi de alta densidad (MikroTik/UniFi), servidores, videovigilancia CCTV 4K, soporte corporativo y software sectorial (Barber OS, ERP) en Catamarca y NOA.",
  keywords: [
    "UPGRADE Informática",
    "UPGRADE Informática y Seguridad",
    "Infraestructura IT",
    "Cableado Estructurado Cat 6",
    "Fibra Óptica",
    "Redes Wi-Fi Empresariales",
    "MikroTik",
    "Ubiquiti UniFi",
    "Cámaras de Seguridad CCTV",
    "Servidores y Racks 42U",
    "Software a Medida",
    "Barber OS",
    "Gym OS",
    "Soporte Técnico Corporativo",
    "Catamarca",
    "NOA",
  ],
  authors: [{ name: "UPGRADE Informática y Seguridad", url: "https://upgrade-informatica.com" }],
  creator: "UPGRADE Informática",
  publisher: "UPGRADE",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "UPGRADE | Informática, Infraestructura IT & Seguridad",
    description:
      "Infraestructura tecnológica robusta y software a medida para empresas que no se detienen. Catamarca y región NOA.",
    url: "https://upgrade-informatica.com",
    siteName: "UPGRADE Informática y Seguridad",
    images: [
      {
        url: "/logo_upgrade_informatica_y_seguridad.jpg",
        width: 1200,
        height: 630,
        alt: "UPGRADE Informática y Seguridad",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UPGRADE | Informática, Infraestructura IT & Seguridad",
    description:
      "Cableado estructurado, redes empresariales, CCTV 4K, soporte corporativo y software sectorial.",
    images: ["/logo_upgrade_informatica_y_seguridad.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && supportDarkMode) || !theme) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh bg-slate-50 dark:bg-[#090a0f] text-slate-900 dark:text-zinc-100 transition-colors duration-200 selection:bg-cyan-500/20 selection:text-cyan-400`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
