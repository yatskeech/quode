import type { ReactNode } from 'react';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-decorations-subtract">
      <div className="bg-decorations container">
        <Header />
        <main className="py-20">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
