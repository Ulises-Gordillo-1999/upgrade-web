export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': 'https://upgrade-informatica.com/#organization',
    name: 'UPGRADE | Informática, Infraestructura IT & Soluciones de Software',
    alternateName: 'UPGRADE Informática y Seguridad',
    legalName: 'UPGRADE Soluciones Tecnológicas',
    description:
      'Especialistas en infraestructura IT, cableado estructurado Cat 6 y fibra óptica, redes Wi-Fi empresariales MikroTik/UniFi, servidores, videovigilancia CCTV 4K, soporte técnico corporativo y software sectorial (Barber OS, Gym OS, ERP) en Catamarca y región NOA.',
    url: 'https://upgrade-informatica.com',
    logo: 'https://upgrade-informatica.com/logo_upgrade_solo.jpg',
    image: 'https://upgrade-informatica.com/logo_upgrade_informatica_y_seguridad.jpg',
    telephone: '+5493834269513',
    priceRange: '$$',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+5493834269513',
        contactType: 'technical support',
        areaServed: ['AR-K', 'AR'],
        availableLanguage: ['Spanish'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+5493834238349',
        contactType: 'sales',
        areaServed: ['AR-K', 'AR'],
        availableLanguage: ['Spanish'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'San Fernando del Valle de Catamarca',
      addressLocality: 'San Fernando del Valle de Catamarca',
      addressRegion: 'Catamarca',
      postalCode: '4700',
      addressCountry: 'AR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -28.4696,
      longitude: -65.7852,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'San Fernando del Valle de Catamarca',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Catamarca',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Región NOA',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:30',
        closes: '13:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '16:30',
        closes: '20:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '13:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Catálogo de Soluciones Tecnológicas UPGRADE',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Infraestructura IT y Cableado Estructurado',
            description:
              'Diseño, tendido y certificación de cableado Cat 6, fibra óptica, gabinetes rack 42U y switches gestionables.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Redes Wi-Fi Empresariales y Enlaces Failover',
            description:
              'Despliegue de APs Ubiquiti UniFi, routers MikroTik con balanceo Dual WAN y failover automático 24/7.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Seguridad Perimetral y CCTV 4K con IA',
            description:
              'Circuitos cerrados de videovigilancia IP, NVRs profesionales con analítica perimetral y visualización remota.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'UPGRADE Barber OS',
            description:
              'Sistema SaaS integral para barberías y salones: turnero online, cobro Mercado Pago y PWA con huella.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Soporte Técnico Corporativo y Abonos Mensuales',
            description:
              'Mantenimiento preventivo, soporte de hardware de puestos y servidores con SLA garantizado.',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

