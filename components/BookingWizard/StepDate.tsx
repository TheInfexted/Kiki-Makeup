'use client';

import { useMemo } from 'react';
import { useTranslation } from '@/lib/i18n';
import { ui } from '@/lib/content';

export function StepDate({
  value,
  onChange,
  error
}: {
  value: string;
  onChange: (iso: string) => void;
  error?: string;
}) {
  const { t } = useTranslation();
  const min = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d.toISOString().slice(0, 10);
  }, []);

  return (
    <div>
      <h3 className="headline text-3xl mb-6">{t(ui.booking.step2.title)}</h3>
      <label className="block">
        <span className="font-sans text-xs font-semibold uppercase tracking-wider text-warmbrown mb-2 block">
          {t(ui.booking.step2.label)}
        </span>
        <input
          type="date"
          value={value}
          min={min}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border border-tan bg-surface px-3 py-3 font-sans text-base text-espresso"
        />
      </label>
      {error && <p className="font-sans text-xs text-red-700 mt-2">{error}</p>}
    </div>
  );
}
