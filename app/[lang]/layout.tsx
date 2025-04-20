import type React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import LanguageSwitcher from '@/components/language-switcher';
import ThemeToggle from '@/components/theme-toggle';
import Navigation from '@/components/navigation';
import I18nProvider from '@/components/i18n-provider';
import { Inter } from 'next/font/google';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

// Define the supported languages
export const locales = ['en', 'zh'];

// Generate static params for all supported languages
export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={inter.className}>
        <I18nProvider lang={params.lang}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen bg-background">
              <header className="container mx-auto py-4 px-4 flex justify-between items-center border-b">
                <Navigation lang={params.lang} />
                <div className="flex items-center gap-4">
                  <LanguageSwitcher currentLang={params.lang} />
                  <ThemeToggle />
                </div>
              </header>
              <main className="container mx-auto py-8 px-4">{children}</main>
              <footer className="container mx-auto py-4 px-4 border-t">
                <p className="text-center text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Next.js i18n Demo
                </p>
              </footer>
            </div>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
