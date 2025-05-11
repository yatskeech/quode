import { Suspense } from 'react';

import { RegisterForm } from '@/features/auth';
import { Link } from '@/shared/ui';

export default function RegisterPage() {
  return (
    <>
      <Suspense>
        <RegisterForm />
      </Suspense>
      <span className="text-gray text-center text-sm">
        Уже есть аккаунт?{' '}
        <Link href="/auth/login" className="text-white underline">
          Войти
        </Link>
      </span>
    </>
  );
}
