import { Suspense } from 'react';

import { LoginForm } from '@/features/auth';
import { Link } from '@/shared/ui';

export default async function LoginPage() {
  return (
    <>
      <Suspense>
        <LoginForm />
      </Suspense>
      <span className="text-gray text-center text-sm">
        Ещё нет аккаунта?{' '}
        <Link href="/auth/register" className="text-white underline">
          Зарегистрироваться
        </Link>
      </span>
    </>
  );
}
