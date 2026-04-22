import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { I18nProvider } from '@/lib/i18n';
import { BookingProvider } from '@/lib/booking';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap'
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Kiki Makeup Studio',
  description: 'Korean-Style Bridal & Personal Makeup in Kepong, KL'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <I18nProvider>
          <BookingProvider>{children}</BookingProvider>
        </I18nProvider>
      </body>
    </html>
  );
}