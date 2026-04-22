'use client';

import Image from 'next/image';
import { useTranslation } from '@/lib/i18n';
import { ui, type Style } from '@/lib/content';
import { X } from 'lucide-react';

export function StyleGallery({ style, onClose }: { style: Style; onClose: () => void }) {
  const { t } = useTranslation();
  const images = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-espresso/95 overflow-y-auto px-4 py-8"
    >
      <div className="max-w-content mx-auto">
        <div className="flex items-center justify-between mb-6 text-cream">
          <div>
            <p className="eyebrow text-cream/80">{t(style.subtitle)}</p>
            <h3 className="headline italic text-3xl text-cream">{t(style.name)}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 border border-cream/50"
            aria-label={t(ui.portfolio.close)}
          >
            <X size={16} />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {images.map((n) => (
            <div key={n} className="relative aspect-square overflow-hidden">
              <Image
                src={`/images/portfolio/${style.id}/${n}.jpg`}
                alt={`${t(style.name)} ${n}`}
                fill
                sizes="(max-width:768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
