import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kiki Makeup Studio',
  description: 'Korean-Style Bridal & Personal Makeup in Kepong, KL'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
