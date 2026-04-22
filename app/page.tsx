import { Hero } from '@/components/Hero';
import { PhotoStrip } from '@/components/PhotoStrip';
import { ServicesSection } from '@/components/ServicesSection';

export default function Page() {
  return (
    <main>
      <Hero />
      <PhotoStrip />
      <ServicesSection />
    </main>
  );
}
