import { RegisterForm } from '@/features/auth';
import { NavLink } from '@/shared/ui';

export default function RegisterPage() {
  return (
    <>
      <RegisterForm />
      <span className="text-gray text-center text-sm">
        Уже есть аккаунт?{' '}
        <NavLink href="/auth/login" className="text-white underline">
          Войти
        </NavLink>
      </span>
    </>
  );
}
