import { LoginForm } from '@/features/auth';
import { Link } from '@/shared/ui';

export default function LoginPage() {
  return (
    <>
      <LoginForm />
      <span className="text-gray text-center text-sm">
        Ещё нет аккаунта?{' '}
        <Link href="/auth/register" className="text-white underline">
          Зарегистрироваться
        </Link>
      </span>
    </>
  );
}
