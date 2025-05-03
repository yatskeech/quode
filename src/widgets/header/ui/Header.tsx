import { Profile } from '@/entities/user';
import { auth } from '@/shared/api';
import { Button, Link, Logo } from '@/shared/ui';

export async function Header() {
  const session = await auth();

  return (
    <header className="box-content flex h-14 items-center justify-between py-8">
      <Link href="/">
        <Logo className="w-32" />
      </Link>
      {session?.user ? (
        <Profile user={session.user} />
      ) : (
        <div className="flex items-center gap-4">
          <Button asChild variant="text">
            <Link variant="none" href="/auth/login">
              Войти
            </Link>
          </Button>
          <Button asChild variant="gradient">
            <Link variant="none" href="/auth/register">
              Зарегистрироваться
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
