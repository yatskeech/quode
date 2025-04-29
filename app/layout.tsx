import './global.css';

import { cx } from 'class-variance-authority';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import type { ReactNode } from 'react';

import { Header } from '@/widgets/header';

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
        <div className="bg-decorations container min-h-screen">
          <div className="">
            <Header />
            <main>{children}</main>
            <header>Footer</header>
          </div>
        </div>
      </body>
    </html>
  );
}
