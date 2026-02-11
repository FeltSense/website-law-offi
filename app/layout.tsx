import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Law Office Of Justice B Adjei',
  description: 'Experienced, dedicated legal representation serving Port Arthur with personalized attention to your unique legal needs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
