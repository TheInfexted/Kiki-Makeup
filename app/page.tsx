import { Hero } from '@/components/Hero';
import { PhotoStrip } from '@/components/PhotoStrip';
import { ServicesSection } from '@/components/ServicesSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { BookingWizard } from '@/components/BookingWizard';
import { FAQAccordion } from '@/components/FAQAccordion';
import { LocationSection } from '@/components/LocationSection';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main>
      <Hero />
      <PhotoStrip />
      <ServicesSection />
      <PortfolioSection />
      <BookingWizard />
      <FAQAccordion />
      <LocationSection />
      <Footer />
    </main>
  );
}
