'use client';

import Image from 'next/image';
import { useTranslation } from '@/lib/i18n';
import { ui, type Style } from '@/lib/content';

export function StyleCard({ style, onClick }: { style: Style; onClick: () => void }) {
  const { t } = useTranslation();
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex bg-surface border border-tan/50 text-left w-full overflow-hidden hover:border-caramel transition-colors"
    >
      <div className="relative w-24 h-24 shrink-0">
        <Image
          src={`/images/portfolio/${style.id}/1.jpg`}
          alt=""
          fill
          sizes="96px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center px-4 py-3 min-w-0">
        <p className="font-serif italic text-lg text-espresso truncate">{t(style.name)}</p>
        <p className="eyebrow text-caramel mt-0.5">{t(style.subtitle)}</p>
        <p className="font-sans text-xs text-warmbrown mt-1">
          {style.lookCount} {t(ui.portfolio.looksCount)}
        </p>
      </div>
    </button>
  );
}
