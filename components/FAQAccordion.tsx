'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import { faqs, ui } from '@/lib/content';

export function FAQAccordion() {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="bg-cream py-16 px-6">
      <div className="max-w-content mx-auto">
        <p className="eyebrow mb-3">{t(ui.faq.eyebrow)}</p>
        <h2 className="headline text-4xl md:text-5xl mb-10">{t(ui.faq.title)}</h2>
        <div className="border-t border-tan/50">
          {faqs.map((f) => {
            const open = openId === f.id;
            return (
              <div key={f.id} className="border-b border-tan/50">
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : f.id)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between py-4 text-left gap-4"
                >
                  <span className="font-sans text-base font-medium text-espresso">
                    {t(f.question)}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-caramel transition-transform ${open ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}
                  style={{ visibility: open ? 'visible' : 'hidden' }}
                >
                  <p className="font-sans text-sm text-warmbrown leading-relaxed">
                    {t(f.answer)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
