import type { ReactNode } from 'react';

import { Footer } from '@/widgets/footer_';
import { Header } from '@/widgets/header';

export default function ProblemsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-decorations container flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow py-4">{children}</main>
      <Footer />
    </div>
  );
}
