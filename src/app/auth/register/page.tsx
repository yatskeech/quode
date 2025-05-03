import { RegisterForm } from '@/features/auth';
import { Link } from '@/shared/ui';

export default function RegisterPage() {
  return (
    <>
      <RegisterForm />
      <span className="text-gray text-center text-sm">
        Уже есть аккаунт?{' '}
        <Link href="/auth/login" className="text-white underline">
          Войти
        </Link>
      </span>
    </>
  );
}
