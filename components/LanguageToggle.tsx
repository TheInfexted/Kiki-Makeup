'use client';

import { useTranslation } from '@/lib/i18n';
import { ui } from '@/lib/content';

export function LanguageToggle({ className = '' }: { className?: string }) {
  const { lang, setLang, t } = useTranslation();
  return (
    <button
      type="button"
      onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
      aria-label={t(ui.language.aria)}
      className={`font-sans text-xs font-semibold uppercase tracking-wider border border-current px-3 py-1 ${className}`}
    >
      {t(ui.language.toggle)}
    </button>
  );
}
