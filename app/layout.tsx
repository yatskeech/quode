import './global.css';

import { cx } from 'class-variance-authority';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import type { ReactNode } from 'react';

import { Decoration } from '@/widgets/decoration';
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
      <body
        className={cx(
          rubik.className,
          'bg-black-1 relative min-h-screen text-white',
        )}
      >
        <div className="container">
          <Header />
        </div>
        <div className="container">
          <main>{children}</main>
        </div>
        <div className="container">
          <header>Footer</header>
        </div>
        <Decoration />
      </body>
    </html>
  );
}
