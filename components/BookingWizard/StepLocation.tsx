'use client';

import { useTranslation } from '@/lib/i18n';
import { ui } from '@/lib/content';

export type LocationChoice = 'studio' | 'onsite';

export function StepLocation({
  choice,
  area,
  onChoiceChange,
  onAreaChange
}: {
  choice: LocationChoice;
  area: string;
  onChoiceChange: (c: LocationChoice) => void;
  onAreaChange: (a: string) => void;
}) {
  const { t } = useTranslation();
  return (
    <div>
      <h3 className="headline text-3xl mb-6">{t(ui.booking.step3.title)}</h3>
      <div className="flex gap-2 mb-4">
        <button
          type="button"
          onClick={() => onChoiceChange('studio')}
          className={`flex-1 border px-4 py-3 font-sans text-sm font-medium ${
            choice === 'studio' ? 'bg-espresso text-cream border-espresso' : 'bg-surface border-tan'
          }`}
        >
          {t(ui.booking.step3.studio)}
        </button>
        <button
          type="button"
          onClick={() => onChoiceChange('onsite')}
          className={`flex-1 border px-4 py-3 font-sans text-sm font-medium ${
            choice === 'onsite' ? 'bg-espresso text-cream border-espresso' : 'bg-surface border-tan'
          }`}
        >
          {t(ui.booking.step3.onsite)}
        </button>
      </div>
      {choice === 'onsite' && (
        <label className="block">
          <span className="font-sans text-xs font-semibold uppercase tracking-wider text-warmbrown mb-2 block">
            {t(ui.booking.step3.areaLabel)}
          </span>
          <input
            type="text"
            value={area}
            onChange={(e) => onAreaChange(e.target.value)}
            placeholder={t(ui.booking.step3.areaPlaceholder)}
            className="w-full border border-tan bg-surface px-3 py-3 font-sans text-base text-espresso"
          />
        </label>
      )}
    </div>
  );
}
