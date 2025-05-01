import type { ReactNode } from 'react';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

export default function DecoratedLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="bg-decorations-subtract min-h-screen">
      <div className="bg-decorations container">
        <Header />
        <main className="flex-grow py-20">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
