'use client';

import Image from 'next/image';

export function PhotoStrip() {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="w-full bg-cream">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5">
        {[1, 2, 3, 4].map((n) => (
          <button
            type="button"
            key={n}
            onClick={scrollToPortfolio}
            className="relative aspect-square overflow-hidden group"
            aria-label={`Sample work ${n}`}
          >
            <Image
              src={`/images/strip/${n}.jpg`}
              alt=""
              fill
              sizes="(max-width:768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
