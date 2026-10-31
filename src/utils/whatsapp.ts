import { PRIMARY_WHATSAPP } from '@/config/contacts';

export interface QuoteData {
  service: string;
  scale: string;
  scope: string;
  name: string;
  company: string;
  location: string;
  additionalNotes?: string;
}

export function buildWhatsAppMessage(data: QuoteData): string {
  const lines = [
    '👋 *NUEVA SOLICITUD DE COTIZACIÓN - UPGRADE WEB*',
    '----------------------------------------',
    `🏢 *Empresa / Solicitante:* ${data.name || 'No especificado'}${data.company ? ` (${data.company})` : ''}`,
    `📍 *Ubicación:* ${data.location || 'Catamarca'}`,
    `⚙️ *Servicio Requerido:* ${data.service}`,
    `👥 *Escala / Tamaño:* ${data.scale}`,
    `🎯 *Tipo de Proyecto:* ${data.scope}`,
  ];

  if (data.additionalNotes && data.additionalNotes.trim()) {
    lines.push(`📝 *Detalle adicional:* ${data.additionalNotes.trim()}`);
  }

  lines.push('----------------------------------------');
  lines.push('🚀 *Enviado desde el Cotizador Oficial de UPGRADE (upgrade-informatica.com)*');

  return lines.join('\n');
}

export function generateWhatsAppUrl(phone: string = PRIMARY_WHATSAPP, data: QuoteData): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const message = buildWhatsAppMessage(data);
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
