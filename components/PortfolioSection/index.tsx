'use client';

import { useState } from 'react';
import { useTranslation } from '@/lib/i18n';
import { styles, ui, type Style } from '@/lib/content';
import { StyleCard } from './StyleCard';
import { StyleGallery } from './StyleGallery';

export function PortfolioSection() {
  const { t } = useTranslation();
  const [active, setActive] = useState<Style | null>(null);

  return (
    <section id="portfolio" className="bg-cream py-16 px-6">
      <div className="max-w-content mx-auto">
        <p className="eyebrow mb-3">{t(ui.portfolio.eyebrow)}</p>
        <h2 className="headline text-4xl md:text-5xl mb-10">{t(ui.portfolio.title)}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {styles.map((s) => (
            <StyleCard key={s.id} style={s} onClick={() => setActive(s)} />
          ))}
        </div>
      </div>
      {active && <StyleGallery style={active} onClose={() => setActive(null)} />}
    </section>
  );
}
