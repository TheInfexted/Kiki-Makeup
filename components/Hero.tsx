'use client';

import Image from 'next/image';
import { useTranslation } from '@/lib/i18n';
import { useBooking } from '@/lib/booking';
import { ui } from '@/lib/content';
import { LanguageToggle } from './LanguageToggle';

export function Hero() {
  const { t } = useTranslation();
  const { wizardRef } = useBooking();

  const scrollTo = (target: 'booking' | 'portfolio') => {
    const el =
      target === 'booking'
        ? wizardRef.current
        : document.getElementById('portfolio');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative w-full min-h-[88vh] overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-espresso/75" />
      <div className="absolute top-0 right-0 p-5 z-10">
        <LanguageToggle className="text-cream border-cream" />
      </div>
      <div className="relative z-10 flex flex-col justify-end min-h-[88vh] px-6 pb-12 pt-24 max-w-content mx-auto">
        <p className="eyebrow text-cream/90 mb-4">{t(ui.hero.eyebrow)}</p>
        <h1 className="headline text-5xl md:text-6xl text-cream mb-4">
          {t(ui.hero.headline)}
        </h1>
        <div className="h-px w-10 bg-cream/70 my-4" />
        <p className="font-sans text-sm text-cream/90 mb-8 leading-relaxed max-w-md">
          {t(ui.hero.subhead)}
        </p>
        <div className="flex flex-col gap-3 items-start">
          <button type="button" onClick={() => scrollTo('booking')} className="btn-primary-inverse">
            {t(ui.hero.ctaPrimary)} →
          </button>
          <button
            type="button"
            onClick={() => scrollTo('portfolio')}
            className="link-underline text-cream"
          >
            {t(ui.hero.ctaSecondary)}
          </button>
        </div>
      </div>
    </section>
  );
}
