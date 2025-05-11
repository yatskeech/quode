import { ReactNode } from 'react';

import { OAuthButtons } from '@/features/auth';
import { Logo } from '@/shared/ui';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-decorations container">
      <main className="flex min-h-screen flex-grow items-center justify-center py-12">
        <div className="bg-black-3 mx-auto flex w-full max-w-144 flex-col items-center gap-6 rounded-4xl border p-8">
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-5">
              <Logo className="w-32" />
              <h1 className="text-center text-3xl font-bold">
                Полный доступ к базе алгоритмов — бесплатно
              </h1>
            </div>
            <span className="text-gray text-sm">
              Авторизуйтесь, чтобы узнать больше
            </span>
          </div>
          <div className="flex w-full flex-col gap-6">
            <OAuthButtons />
            <div className="flex items-center justify-between gap-6 text-center">
              <span className="bg-gray h-px w-full rounded" />
              <span className="text-gray text-sm">Или</span>
              <span className="bg-gray h-px w-full rounded" />
            </div>
            <div className="flex flex-col gap-5">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
