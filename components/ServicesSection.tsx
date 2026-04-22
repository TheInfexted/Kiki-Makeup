'use client';

import { useTranslation } from '@/lib/i18n';
import { useBooking } from '@/lib/booking';
import { services, ui, type Service } from '@/lib/content';

function Group({ label, items }: { label: string; items: Service[] }) {
  const { t } = useTranslation();
  const { setPendingService } = useBooking();
  return (
    <div className="mb-10">
      <h3 className="eyebrow mb-4 text-caramel">{label}</h3>
      <ul className="divide-y divide-tan/40 border-y border-tan/40">
        {items.map((svc) => (
          <li key={svc.id} className="flex items-center justify-between py-4 gap-4">
            <div className="min-w-0">
              <p className="font-sans text-base text-espresso">{t(svc.name)}</p>
              {svc.note && (
                <p className="font-sans text-xs text-warmbrown mt-1">{t(svc.note)}</p>
              )}
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-serif italic text-lg text-espresso">
                RM{svc.price.toLocaleString()}
              </span>
              <button
                type="button"
                onClick={() => setPendingService(svc.id)}
                className="font-sans text-xs font-semibold uppercase tracking-wider text-caramel hover:text-espresso whitespace-nowrap"
              >
                {t(ui.services.bookThis)}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServicesSection() {
  const { t } = useTranslation();
  const personal = services.filter((s) => s.group === 'personal');
  const wedding = services.filter((s) => s.group === 'wedding');
  const special = services.filter((s) => s.group === 'special');
  const classes = services.filter((s) => s.group === 'class');

  return (
    <section id="services" className="bg-cream py-16 px-6">
      <div className="max-w-content mx-auto">
        <p className="eyebrow mb-3">{t(ui.services.eyebrow)}</p>
        <h2 className="headline text-4xl md:text-5xl mb-10">{t(ui.services.title)}</h2>
        <Group label={t(ui.services.group.personal)} items={personal} />
        <Group label={t(ui.services.group.wedding)} items={wedding} />
        <Group label={t(ui.services.group.special)} items={special} />
        <Group label={t(ui.services.group.class)} items={classes} />
        <p className="font-sans text-xs text-warmbrown italic mb-6">
          {t(ui.services.eyeShape)}
        </p>
        <p className="font-sans text-xs text-warmbrown leading-relaxed border-t border-tan/40 pt-4">
          {t(ui.services.footnote)}
        </p>
      </div>
    </section>
  );
}
