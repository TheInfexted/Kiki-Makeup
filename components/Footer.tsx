'use client';

import { useTranslation } from '@/lib/i18n';
import { ui } from '@/lib/content';
import { LanguageToggle } from './LanguageToggle';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-espresso text-cream py-10 px-6">
      <div className="max-w-content mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="font-sans text-xs text-cream/80">{t(ui.footer.copy)}</p>
        <LanguageToggle className="text-cream border-cream" />
      </div>
    </footer>
  );
}
