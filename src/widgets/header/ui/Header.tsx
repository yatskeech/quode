import Link from 'next/link';

import { Button, Logo, NavLink } from '@/shared/ui';

export function Header() {
  return (
    <header className="flex items-center justify-between py-8">
      <NavLink href="/">
        <Logo className="w-32" />
      </NavLink>
      <div className="flex items-center gap-4">
        <Button asChild variant="text">
          <Link href="/auth/login">Войти</Link>
        </Button>
        <Button asChild variant="gradient">
          <Link href="/auth/register">Зарегистрироваться</Link>
        </Button>
      </div>
    </header>
  );
}
