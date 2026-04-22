'use client';

import { Instagram } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import { contact, ui } from '@/lib/content';
import { LanguageToggle } from './LanguageToggle';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-espresso text-cream py-10 px-6">
      <div className="max-w-content mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex flex-col gap-3">
          <p className="font-sans text-xs text-cream/80">{t(ui.footer.copy)}</p>
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-cream/90 hover:text-cream flex items-center gap-2"
          >
            <Instagram size={14} />
            {t(ui.location.instagramCta)} · {contact.instagramHandle}
          </a>
        </div>
        <LanguageToggle className="text-cream border-cream" />
      </div>
    </footer>
  );
}
