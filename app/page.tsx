import { Hero } from '@/components/Hero';
import { PhotoStrip } from '@/components/PhotoStrip';
import { ServicesSection } from '@/components/ServicesSection';
import { PortfolioSection } from '@/components/PortfolioSection';

export default function Page() {
  return (
    <main>
      <Hero />
      <PhotoStrip />
      <ServicesSection />
      <PortfolioSection />
    </main>
  );
}
