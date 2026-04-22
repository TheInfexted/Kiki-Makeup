import { describe, it, expect } from 'vitest';
import { buildWhatsAppUrl } from './buildWhatsAppUrl';

describe('buildWhatsAppUrl', () => {
  const base = {
    serviceLabel: 'Bridal Day + Night (RM1,100)',
    dateIso: '2026-06-15',
    location: 'On-site (Petaling Jaya 47301)',
    name: 'Jane Lee',
    phone: '+60 12-345-6789'
  };

  it('produces a wa.me URL with the configured number', () => {
    const url = buildWhatsAppUrl(base, { lang: 'en' });
    expect(url.startsWith('https://wa.me/60179202880?text=')).toBe(true);
  });

  it('URL-encodes the message body', () => {
    const url = buildWhatsAppUrl(base, { lang: 'en' });
    const text = decodeURIComponent(url.split('?text=')[1]);
    expect(text).toContain("Hi Kiki! I'd like to book:");
    expect(text).toContain('Service: Bridal Day + Night (RM1,100)');
    expect(text).toContain('Date: 2026-06-15');
    expect(text).toContain('Location: On-site (Petaling Jaya 47301)');
    expect(text).toContain('Name: Jane Lee');
    expect(text).toContain('Phone: +60 12-345-6789');
    expect(text).toContain('Sent from makeup.ninedsales.com');
  });

  it('localises labels in Chinese', () => {
    const url = buildWhatsAppUrl(base, { lang: 'zh' });
    const text = decodeURIComponent(url.split('?text=')[1]);
    expect(text).toContain('Hi Kiki!我想预约:');
    expect(text).toContain('服务: Bridal Day + Night (RM1,100)');
    expect(text).toContain('日期: 2026-06-15');
    expect(text).toContain('姓名: Jane Lee');
  });
});
