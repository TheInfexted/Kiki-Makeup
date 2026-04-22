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

const siteUrl = 'https://makeup.ninedsales.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Kiki Makeup Studio · Korean-Style Bridal & Personal Makeup in Kepong, KL',
  description:
    "Solo Korean-style makeup artist in Kepong, KL. Bridal, personal, and on-site makeup. 4 years' experience. Book your slot via WhatsApp.",
  keywords: [
    'makeup artist Kepong',
    'Korean makeup Malaysia',
    'bridal makeup KL',
    'MUA Kuala Lumpur',
    '韩系新娘妆',
    '吉隆坡化妆师'
  ],
  openGraph: {
    title: 'Kiki Makeup Studio · Korean-Style Bridal & Personal Makeup',
    description: 'Bridal, personal, and on-site Korean-style makeup in Kepong, KL.',
    url: siteUrl,
    siteName: 'Kiki Makeup Studio',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'zh_CN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kiki Makeup Studio',
    description: 'Korean-Style Bridal & Personal Makeup · Kepong, KL',
    images: ['/og-image.jpg']
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <I18nProvider>
          <BookingProvider>{children}</BookingProvider>
        </I18nProvider>
      </body>
    </html>
  );
}