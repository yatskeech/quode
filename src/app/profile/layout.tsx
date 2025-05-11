import { ReactNode } from 'react';

import { Footer } from '@/widgets/footer_';
import { Header } from '@/widgets/header';

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-decorations container flex min-h-screen flex-col">
      <Header />
      <main className="py-8">{children}</main>
      <Footer />
    </div>
  );
}
