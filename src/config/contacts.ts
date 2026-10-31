export const WHATSAPP_CONTACTS = {
  ulises: {
    name: 'Ulises Gordillo',
    phone: '3834269513',
    international: '5493834269513',
    display: '+54 9 (383) 426-9513',
    role: 'Dirección Técnica & Proyectos',
  },
  gabriel: {
    name: 'Gabriel',
    phone: '3834238349',
    international: '5493834238349',
    display: '+54 9 (383) 423-8349',
    role: 'Soporte Comercial & Infraestructura',
  },
};

export const PRIMARY_WHATSAPP = WHATSAPP_CONTACTS.ulises.international;
export const SECONDARY_WHATSAPP = WHATSAPP_CONTACTS.gabriel.international;

export function getWhatsAppUrl(text: string, target: 'ulises' | 'gabriel' = 'ulises'): string {
  const number = target === 'ulises' ? PRIMARY_WHATSAPP : SECONDARY_WHATSAPP;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
