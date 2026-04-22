'use client';

import { useTranslation } from '@/lib/i18n';
import { ui } from '@/lib/content';

export function StepContact({
  name,
  phone,
  nameError,
  phoneError,
  onNameChange,
  onPhoneChange
}: {
  name: string;
  phone: string;
  nameError?: string;
  phoneError?: string;
  onNameChange: (v: string) => void;
  onPhoneChange: (v: string) => void;
}) {
  const { t } = useTranslation();
  return (
    <div>
      <h3 className="headline text-3xl mb-6">{t(ui.booking.step4.title)}</h3>
      <label className="block mb-4">
        <span className="font-sans text-xs font-semibold uppercase tracking-wider text-warmbrown mb-2 block">
          {t(ui.booking.step4.name)}
        </span>
        <input
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          className="w-full border border-tan bg-surface px-3 py-3 font-sans text-base text-espresso"
        />
        {nameError && <p className="font-sans text-xs text-red-700 mt-1">{nameError}</p>}
      </label>
      <label className="block">
        <span className="font-sans text-xs font-semibold uppercase tracking-wider text-warmbrown mb-2 block">
          {t(ui.booking.step4.phone)}
        </span>
        <input
          type="tel"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          placeholder="+60 12-345 6789"
          className="w-full border border-tan bg-surface px-3 py-3 font-sans text-base text-espresso"
        />
        {phoneError && <p className="font-sans text-xs text-red-700 mt-1">{phoneError}</p>}
      </label>
    </div>
  );
}
