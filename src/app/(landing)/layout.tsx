import type { ReactNode } from 'react';

import { Footer } from '@/widgets/footer_';
import { Header } from '@/widgets/header';

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
