import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'UPGRADE | Informática, Infraestructura IT & Soluciones de Software',
    short_name: 'UPGRADE',
    description:
      'Infraestructura IT, cableado estructurado Cat 6/FO, redes Wi-Fi de alta densidad (MikroTik/UniFi), servidores, CCTV 4K, soporte corporativo y software sectorial en Catamarca y NOA.',
    start_url: '/',
    id: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#090a0f',
    theme_color: '#090a0f',
    orientation: 'portrait-primary',
    categories: ['business', 'productivity', 'utilities'],
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}

