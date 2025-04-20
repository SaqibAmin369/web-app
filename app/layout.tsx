import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Innhee',
  description: 'Saqib Amin',
  icons: {
    icon: '/placeholder-logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
