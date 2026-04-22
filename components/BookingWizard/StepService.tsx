'use client';

import { useTranslation } from '@/lib/i18n';
import { services, ui } from '@/lib/content';

export function StepService({
  value,
  onChange
}: {
  value: string | null;
  onChange: (id: string) => void;
}) {
  const { t } = useTranslation();
  const ordered = [
    ...services.filter((s) => s.group === 'wedding'),
    ...services.filter((s) => s.group === 'personal'),
    ...services.filter((s) => s.group === 'special'),
    ...services.filter((s) => s.group === 'class')
  ];
  return (
    <div>
      <h3 className="headline text-3xl mb-6">{t(ui.booking.step1.title)}</h3>
      <div className="flex flex-col gap-2">
        {ordered.map((svc) => {
          const selected = value === svc.id;
          return (
            <button
              type="button"
              key={svc.id}
              onClick={() => onChange(svc.id)}
              className={`text-left border px-4 py-3 transition-colors ${
                selected ? 'bg-espresso text-cream border-espresso' : 'bg-surface border-tan hover:border-caramel'
              }`}
            >
              <div className="font-sans font-semibold text-sm">{t(svc.name)}</div>
              <div className={`font-sans text-xs mt-0.5 ${selected ? 'text-cream/80' : 'text-warmbrown'}`}>
                RM{svc.price.toLocaleString()}
                {svc.note && ` · ${t(svc.note)}`}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
