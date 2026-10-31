import { 
  Server, 
  Wifi, 
  Video, 
  Laptop, 
  Layers, 
  Building2, 
  Hotel, 
  ShoppingBag, 
  Factory 
} from 'lucide-react';

export interface CaseStudy {
  id: string;
  category: 'racks' | 'wifi' | 'cctv' | 'software';
  title: string;
  clientType: string;
  location: string;
  icon: any;
  summary: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  techTags: string[];
}

export const CASE_CATEGORIES = [
  { id: 'all', label: 'Todos los Trabajos' },
  { id: 'racks', label: 'Racks & Cableado', icon: Server },
  { id: 'wifi', label: 'Redes Wi-Fi', icon: Wifi },
  { id: 'cctv', label: 'CCTV & Seguridad', icon: Video },
  { id: 'software', label: 'Software Suites', icon: Layers }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'rack-distribuidora',
    category: 'racks',
    title: 'Ordenamiento de Rack 42U y Certificación Cat 6',
    clientType: 'Centro de Distribución Mayorista',
    location: 'San Fernando del Valle de Catamarca',
    icon: Factory,
    summary:
      'Reestructuración completa del centro de cómputos principal: migración de cableado desordenado a patch panels modulares de alta densidad y tendido de fibra óptica inter-naves.',
    challenge:
      'Cables sueltos sin rotular provocaban caídas intermitentes en la facturación y demoras en el despacho de mercadería.',
    solution:
      'Instalación de Rack de piso 42U con organizadores horizontales/verticales, 48 bocas Cat 6 certificadas con reporte de atenuación y enlace de fibra monomodo.',
    metrics: [
      { label: 'Puestos Certificados', value: '48 bocas' },
      { label: 'Tiempo de Ejecución', value: '48 hs' },
      { label: 'Uptime Posterior', value: '100%' }
    ],
    techTags: ['Rack 42U', 'Cat 6 Cobre', 'Fibra Óptica', 'TIA/EIA-568', 'Patch Panels']
  },
  {
    id: 'wifi-hotel',
    category: 'wifi',
    title: 'Despliegue Wi-Fi 6 de Alta Densidad con Roaming',
    clientType: 'Complejo Hotelero & Convenciones',
    location: 'Catamarca Capital',
    icon: Hotel,
    summary:
      'Cobertura inalámbrica homogénea para 40 habitaciones, áreas comunes, restaurante y salón de eventos sin pérdida de paquetes ni desconexiones.',
    challenge:
      'Zonas ciegas en pisos superiores y quejas continuas de huéspedes por desconexiones al desplazarse por el edificio.',
    solution:
      'Arquitectura con 14 Access Points Ubiquiti UniFi 6 Pro gestionados por Cloud Gateway y balanceo de carga MikroTik con 2 proveedores de fibra.',
    metrics: [
      { label: 'Dispositivos Simultáneos', value: '+300' },
      { label: 'Cobertura', value: '100%' },
      { label: 'Velocidad Media', value: '180 Mbps' }
    ],
    techTags: ['Ubiquiti UniFi 6', 'MikroTik RouterOS', 'Fast Roaming', 'VLANs', 'Dual WAN']
  },
  {
    id: 'cctv-industria',
    category: 'cctv',
    title: 'Circuito Cerrado CCTV 4K con IA Perimetral',
    clientType: 'Planta de Producción & Logística',
    location: 'Parque Industrial El Pantanillo, Catamarca',
    icon: Building2,
    summary:
      'Sistema de videovigilancia perimetral de 24 cámaras IP de ultra alta definición con analítica de cruce de línea nocturno y alertas automáticas al móvil.',
    challenge:
      'Puntos ciegos en accesos vehiculares de carga y necesidad de registrar patentes tanto de día como en plena oscuridad.',
    solution:
      'Cámaras IP 4K ColorVu con sensor de baja luminosidad, NVR de 32 canales con discos en RAID y enlace protegido con respaldo de energía mediante UPS.',
    metrics: [
      { label: 'Cámaras IP 4K', value: '24 unidades' },
      { label: 'Retención de Grabación', value: '45 días' },
      { label: 'Falsas Alarmas', value: '0%' }
    ],
    techTags: ['Cámaras IP 4K', 'NVR 32ch', 'ColorVu', 'Analítica IA', 'UPS Smart']
  },
  {
    id: 'barber-cadena',
    category: 'software',
    title: 'Despliegue de UPGRADE Barber OS en Cadena de Salones',
    clientType: 'Cadena de Barberías (3 Sucursales)',
    location: 'Catamarca & Valle Viejo',
    icon: ShoppingBag,
    summary:
      'Digitalización total de agenda con cobro anticipado por Mercado Pago, PWA móvil instalable para el staff y control de stock centralizado con cadete.',
    challenge:
      'Pérdida mensual de más de 60 horas-sillón por clientes que reservaban y no asistían (ausentismo del 28%).',
    solution:
      'Implementación de Barber OS con cobro del 50% anticipado en la reserva online y módulo de comisiones automáticas por cada corte realizado.',
    metrics: [
      { label: 'Reducción de Ausentismo', value: '-96%' },
      { label: 'Turnos Mensuales', value: '+1.800' },
      { label: 'Ventas de Productos', value: '+45%' }
    ],
    techTags: ['Barber OS', 'Mercado Pago QR', 'PWA Biometría', 'Stock en Tiempo Real', 'Next.js']
  }
];

