import './global.css';

import { cx } from 'class-variance-authority';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import type { ReactNode } from 'react';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

const rubik = Rubik({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Quode',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru">
      <body className={cx(rubik.className, 'bg-black-1 text-white')}>
        <div className="container">
          <div className="bg-decorations flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow py-20">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
