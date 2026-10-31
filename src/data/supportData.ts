import { 
  Wrench, 
  Cpu, 
  ShieldCheck, 
  Clock, 
  Laptop, 
  ThermometerSnowflake, 
  Headphones, 
  FileCheck 
} from 'lucide-react';

export interface SupportService {
  title: string;
  desc: string;
  icon: any;
  highlight: string;
}

export interface SupportPlan {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  target: string;
  priceDesc: string;
  features: string[];
  sla: string;
}

export const WORKSHOP_SERVICES: SupportService[] = [
  {
    title: 'Mantenimiento Preventivo & Correctivo',
    desc: 'Inspección periódica para evitar fallas imprevistas en PCs de oficina, workstations de render/ingeniería y portátiles corporativas.',
    icon: Laptop,
    highlight: 'Prolonga la vida útil 3x'
  },
  {
    title: 'Limpieza Térmica & Optimización',
    desc: 'Desarme completo, renovación de pasta térmica de alto rendimiento (Noctua/Arctic), reemplazo de pads térmicos y desobstrucción de disipadores.',
    icon: ThermometerSnowflake,
    highlight: 'Reduce temperaturas hasta 20°C'
  },
  {
    title: 'Diagnóstico Avanzado de Hardware',
    desc: 'Testeo de memorias RAM, integridad de discos SSD/NVMe (SMART), fuentes de poder certificadas y detección de pistas o capacitores dañados.',
    icon: Cpu,
    highlight: 'Diagnóstico en menos de 24 hs'
  },
  {
    title: 'Soporte Remoto Inmediato',
    desc: 'Mesa de ayuda remota segura para resolución de problemas de software, impresoras fiscales, certificados digitales y configuraciones de red.',
    icon: Headphones,
    highlight: 'Conexión cifrada sin esperas'
  }
];

export const SUPPORT_PLANS: SupportPlan[] = [
  {
    id: 'plan-comercio',
    name: 'Abono Comercio',
    target: 'Locales, estudios y comercios chicos (hasta 5 puestos)',
    priceDesc: 'Abono fijo mensual previsible',
    sla: 'Respuesta en < 6 hs hábiles',
    features: [
      'Hasta 5 puestos de trabajo cubiertos',
      'Mantenimiento preventivo bimensual',
      'Mesa de ayuda y soporte remoto ilimitado',
      'Configuración de impresoras y periféricos',
      'Limpieza lógica y optimización de SO'
    ]
  },
  {
    id: 'plan-pyme',
    name: 'Abono Pyme Pro',
    popular: true,
    badge: 'MÁS ELEGIDO',
    target: 'Empresas, sanatorios y distribuidores (hasta 15 puestos)',
    priceDesc: 'Máxima continuidad operativa',
    sla: 'Respuesta prioritaria < 3 hs',
    features: [
      'Hasta 15 estaciones de trabajo y notebooks',
      'Mantenimiento preventivo mensual on-site',
      'Soporte integral de red y Wi-Fi empresarial',
      'Gestión y verificación de backups automáticos',
      'Guardia técnica y visitas de emergencia incluidas',
      'Descuento especial en insumos y hardware'
    ]
  },
  {
    id: 'plan-enterprise',
    name: 'Corporativo Dedicado',
    badge: 'MISIÓN CRÍTICA',
    target: 'Industrias, centros médicos y cadenas multisucursal',
    priceDesc: 'SLA garantizado y soporte a medida',
    sla: 'Respuesta urgente < 1 hora',
    features: [
      'Puestos ilimitados y sucursales múltiples',
      'Auditoría y soporte de servidores y almacenamiento',
      'Equipos de contingencia inmediata ante roturas',
      'Monitoreo perimetral y seguridad proactiva 24/7',
      'Técnico asignado exclusivo para tu cuenta',
      'Informes gerenciales mensuales de infraestructura'
    ]
  }
];

