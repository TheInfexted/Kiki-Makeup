import { contact, ui, type Lang } from '@/lib/content';

export type BookingPayload = {
  serviceLabel: string;
  dateIso: string;
  location: string;
  name: string;
  phone: string;
};

export function buildWhatsAppUrl(
  payload: BookingPayload,
  { lang }: { lang: Lang }
): string {
  const labels = {
    service: ui.booking.labelService[lang],
    date: ui.booking.labelDate[lang],
    location: ui.booking.labelLocation[lang],
    name: ui.booking.labelName[lang],
    phone: ui.booking.labelPhone[lang]
  };
  const lines = [
    ui.booking.whatsappGreeting[lang],
    `${labels.service}: ${payload.serviceLabel}`,
    `${labels.date}: ${payload.dateIso}`,
    `${labels.location}: ${payload.location}`,
    `${labels.name}: ${payload.name}`,
    `${labels.phone}: ${payload.phone}`,
    '',
    ui.booking.whatsappFooter[lang]
  ];
  const encoded = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${contact.whatsappNumber}?text=${encoded}`;
}
