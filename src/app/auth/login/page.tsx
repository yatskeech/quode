import { LoginForm } from '@/features/auth';
import { NavLink } from '@/shared/ui';

export default function LoginPage() {
  return (
    <>
      <LoginForm />
      <span className="text-gray text-center text-sm">
        Ещё нет аккаунта?{' '}
        <NavLink href="/auth/register" className="text-white underline">
          Зарегистрироваться
        </NavLink>
      </span>
    </>
  );
}
