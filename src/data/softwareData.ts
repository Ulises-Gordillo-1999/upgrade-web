import { 
  Scissors, 
  Dumbbell, 
  Terminal, 
  Smartphone, 
  CreditCard, 
  Fingerprint, 
  Truck, 
  Calendar,
  Sparkles,
  BarChart3,
  ShieldCheck,
  Zap
} from 'lucide-react';

export interface SoftwareProduct {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  description: string;
  icon: any;
  accentColor: string;
  features: { title: string; desc: string; icon: any }[];
  actionLabel: string;
  isFlagship?: boolean;
}

export const SOFTWARE_PRODUCTS: SoftwareProduct[] = [
  {
    id: 'barber-os',
    name: 'UPGRADE Barber OS',
    tagline: 'El sistema definitivo para barberías y salones de alta gama',
    badge: 'SaaS Destacado',
    isFlagship: true,
    accentColor: 'from-amber-500 to-orange-500',
    icon: Scissors,
    description:
      'Solución integral que combina turnero en vivo para clientes, cobro anticipado por Mercado Pago para eliminar el ausentismo, PWA móvil con acceso por huella y despacho de productos con cadetería propia.',
    features: [
      {
        title: 'Turnos Online en Vivo',
        desc: 'El cliente reserva en 3 clicks eligiendo barbero, servicio y horario disponible en tiempo real.',
        icon: Calendar
      },
      {
        title: 'Cobro por Mercado Pago',
        desc: 'Cobro de seña o servicio 100% anticipado para erradicar las cancelaciones de último momento.',
        icon: CreditCard
      },
      {
        title: 'PWA con Huella Dactilar',
        desc: 'App instalable sin pasar por App Store con login biométrico instantáneo y ultra seguro.',
        icon: Fingerprint
      },
      {
        title: 'Cadetería & Stock Propio',
        desc: 'Venta online de pomadas y productos con cálculo de envío y asignación de cadetes en vivo.',
        icon: Truck
      }
    ],
    actionLabel: 'Ver Demo en Vivo'
  },
  {
    id: 'gym-fitness',
    name: 'UPGRADE Gym & Fitness',
    tagline: 'Gestión inteligente para gimnasios, boxes de crossfit y clubes',
    badge: 'Sectorial',
    isFlagship: false,
    accentColor: 'from-emerald-500 to-teal-500',
    icon: Dumbbell,
    description:
      'Control total de socios, cobro recurrente automático de cuotas, integración con molinetes de acceso por QR o biometría y reportes ejecutivos de retención de alumnos.',
    features: [
      {
        title: 'Control de Acceso Automático',
        desc: 'Habilitación por código QR dinámico o huella. Bloqueo automático para cuotas vencidas.',
        icon: ShieldCheck
      },
      {
        title: 'Cuotas & Débito Recurrente',
        desc: 'Cobranza mensual automática con recordatorios automáticos por WhatsApp.',
        icon: CreditCard
      },
      {
        title: 'Métricas de Retención',
        desc: 'Alertas tempranas de socios inactivos para prevenir bajas y aumentar la facturación.',
        icon: BarChart3
      },
      {
        title: 'Planes de Entrenamiento',
        desc: 'Rutinas digitales asignadas por profesores accesibles desde el celular del socio.',
        icon: Zap
      }
    ],
    actionLabel: 'Consultar para mi Gimnasio'
  },
  {
    id: 'custom-erp',
    name: 'Software a Medida & ERPs',
    tagline: 'Sistemas a la medida exacta de tu flujo de negocio',
    badge: 'A Medida',
    isFlagship: false,
    accentColor: 'from-cyan-500 to-blue-600',
    icon: Terminal,
    description:
      'Diseñamos software comercial, sistemas de facturación electrónica AFIP, control de inventario multisucursal y paneles de control administrativo optimizados para la nube.',
    features: [
      {
        title: 'Facturación Electrónica',
        desc: 'Conexión homologada con web services de AFIP/ARCA para emisión masiva de comprobantes A y B.',
        icon: CreditCard
      },
      {
        title: 'Inventario Multisucursal',
        desc: 'Control de stock físico en tiempo real con trazabilidad de movimientos y transferencias.',
        icon: BarChart3
      },
      {
        title: 'Arquitectura en la Nube',
        desc: 'Despliegue de bases de datos PostgreSQL y Next.js en VPS dedicados de alto rendimiento.',
        icon: Zap
      },
      {
        title: 'Cero Licencias Mensuales Ocultas',
        desc: 'Software propio, escalable y sin límites artificiales de usuarios ni registros.',
        icon: ShieldCheck
      }
    ],
    actionLabel: 'Cotizar Proyecto de Software'
  }
];

export const BARBER_DEMO_TABS = [
  {
    id: 'turnos',
    label: '1. Turnos en Vivo',
    title: 'Reserva Online Sin Fricciones',
    subtitle: 'El cliente ve la agenda real del barbero y agenda en 30 segundos',
    details: [
      'Agenda sincronizada en tiempo real entre todos los barberos',
      'Selección de servicio (Corte, Barba, Combo, Colorimetría)',
      'Confirmación instantánea con recordatorio por WhatsApp',
      'Historial de visitas y preferencias guardadas del cliente'
    ],
    badgeColor: 'bg-amber-500/10 text-amber-500 border-amber-500/20'
  },
  {
    id: 'pagos',
    label: '2. Cobro Mercado Pago',
    title: 'Señas y Pagos 100% Anticipados',
    subtitle: 'Reduce el ausentismo del 35% a menos del 1%',
    details: [
      'Cobro del 50% o 100% del turno antes de confirmar la reserva',
      'Integración directa con checkout oficial de Mercado Pago',
      'Dinero acreditado en la cuenta del comercio al instante',
      'Política de cancelación configurable con reintegro o reprogramación'
    ],
    badgeColor: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
  },
  {
    id: 'pwa',
    label: '3. PWA con Huella',
    title: 'Acceso Biométrico Instantáneo',
    subtitle: 'Experiencia nativa para el barbero y administrador',
    details: [
      'Sin descargas pesadas desde Play Store ni comisiones del 30%',
      'Login seguro con huella digital o FaceID en iOS y Android',
      'Notificaciones push inmediatas al ingresar un nuevo turno o pago',
      'Modo fuera de línea para consultar la agenda del día sin internet'
    ],
    badgeColor: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20'
  },
  {
    id: 'cadeteria',
    label: '4. Cadetería & Stock',
    title: 'Venta de Productos & Despacho',
    subtitle: 'Monetiza ceras, aceites y accesorios con delivery propio',
    details: [
      'Catálogo visual de productos con stock descontado en vivo',
      'Módulo de asignación para cadetes propios con mapa de entrega',
      'Comisiones por venta divididas automáticamente por barbero',
      'Reporte de cierre de caja diario y rendición de cadetería'
    ],
    badgeColor: 'bg-purple-500/10 text-purple-500 border-purple-500/20'
  }
];

