import { ReactNode } from 'react';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

export default async function ProblemLayout({
  children,
}: {
  children?: ReactNode;
}) {
  return (
    <div className="bg-decorations flex h-screen flex-col">
      <div className="container">
        <Header />
      </div>
      <main className="flex w-full flex-grow gap-4 overflow-hidden px-6">
        {children}
      </main>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
}
