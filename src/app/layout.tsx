import './global.css';

import { cx } from 'class-variance-authority';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import type { ReactNode } from 'react';

const rubik = Rubik({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Quode',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className={cx(rubik.className, 'bg-black-1 text-white')}>
        {children}
      </body>
    </html>
  );
}
