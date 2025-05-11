import { LoginForm } from '@/features/auth';
import { Link } from '@/shared/ui';

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const params = await searchParams;

  return (
    <>
      <LoginForm searchParams={params} />
      <span className="text-gray text-center text-sm">
        Ещё нет аккаунта?{' '}
        <Link href="/auth/register" className="text-white underline">
          Зарегистрироваться
        </Link>
      </span>
    </>
  );
}
