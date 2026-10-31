import { 
  Network, 
  Wifi, 
  Server, 
  Video, 
  ShieldAlert, 
  Cpu, 
  Radio, 
  HardDrive 
} from 'lucide-react';

export interface InfrastructureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  specs: string[];
  highlight: string;
  badge: string;
}

export const INFRASTRUCTURE_SERVICES: InfrastructureItem[] = [
  {
    id: 'cabling',
    title: 'Cableado Estructurado & Fibra',
    subtitle: 'Conectividad física certificada Cat 6 / Fibra Óptica',
    description:
      'Instalación prolija y homologada de puestos de red para puestos de trabajo, ordenamiento de patch panels, rotulado bajo norma TIA/EIA y tendido de fibra óptica para enlaces entre sucursales o naves industriales.',
    icon: Network,
    badge: 'Norma TIA/EIA-568',
    highlight: 'Cero interferencias electromagnéticas',
    specs: [
      'Cableado UTP/FTP Cat 6 y 6A 100% Cobre',
      'Fusión y conectorización de Fibra Óptica',
      'Ordenamiento y etiquetado integral de puestos',
      'Certificación y testeo de atenuación y continuidad'
    ]
  },
  {
    id: 'wifi',
    title: 'Redes Wi-Fi Empresariales',
    subtitle: 'Roaming sin cortes con MikroTik & Ubiquiti UniFi',
    description:
      'Soluciones inalámbricas de alta densidad diseñadas para oficinas, hoteles, restaurantes y depósitos. Distribución inteligente de carga, portal cautivo de invitados y segmentación de redes corporativas.',
    icon: Wifi,
    badge: 'MikroTik & UniFi',
    highlight: 'Cero zonas ciegas garantizado',
    specs: [
      'Access Points Wi-Fi 6 con roaming continuo (Fast Roaming)',
      'Segmentación por VLANs (Invitados, POS/Cobros, Personal)',
      'Monitoreo centralizado en la nube / Cloud Controller',
      'Routers balanceadores con control de ancho de banda (QoS)'
    ]
  },
  {
    id: 'servers-racks',
    title: 'Servidores, Racks & Storage NAS',
    subtitle: 'Centro de cómputos ordenado y respaldos automáticos',
    description:
      'Montaje de racks de pared o piso (42U/24U), switches gestionables Gigabit/10G, servidores dedicados, almacenamiento masivo en red (NAS) con copias de seguridad redundantes contra fallas o ransomware.',
    icon: Server,
    badge: 'Alta Disponibilidad',
    highlight: 'Protección contra pérdida de datos',
    specs: [
      'Racks organizados con pasacables de alta densidad',
      'Storage NAS Synology / TrueNAS con arreglos RAID 1/5/10',
      'Virtualización de servicios con Proxmox VE y Docker',
      'Sistemas de alimentación ininterrumpida (UPS Smart)'
    ]
  },
  {
    id: 'cctv',
    title: 'Videovigilancia IP & Seguridad',
    subtitle: 'CCTV 4K, NVR inteligente y acceso remoto',
    description:
      'Instalación de cámaras IP de alta resolución con visión nocturna infrarroja/ColorVu, detección de movimiento por inteligencia artificial, cruce de línea y visualización en tiempo real desde celular o centro de monitoreo.',
    icon: Video,
    badge: 'IA & Visión Nocturna',
    highlight: 'Acceso seguro desde tu celular',
    specs: [
      'Cámaras IP domo y bala 4K Ultra HD PoE',
      'Grabadores NVR con discos rígidos de videovigilancia 24/7',
      'Analítica de personas y vehículos sin falsas alarmas',
      'App móvil protegida con cifrado de extremo a extremo'
    ]
  },
  {
    id: 'failover',
    title: 'Seguridad Perimetral & Dual WAN',
    subtitle: 'Tolerancia a fallos: tu empresa nunca sin internet',
    description:
      'Configuración de routers de grado industrial con enlace redundante (Dual WAN). Si tu proveedor de internet principal se cae, el sistema conmuta en milisegundos a la línea secundaria sin interrumpir facturación ni llamadas.',
    icon: ShieldAlert,
    badge: 'Failover Automático',
    highlight: 'Continuidad de facturación asegurada',
    specs: [
      'Conmutación automática de enlaces (Failover en <1s)',
      'Balanceo de carga dinámico entre 2 o más ISPs',
      'Firewall perimetral y filtrado de sitios no laborales',
      'VPN segura para teletrabajo y conexión entre sucursales'
    ]
  }
];

