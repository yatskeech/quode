import Link from 'next/link';

import { Button, Logo } from '@/shared/ui';

export function Header() {
  return (
    <header className="flex items-center justify-between py-8">
      <Link href="/">
        <Logo className="w-32" />
      </Link>
      <div className="flex items-center gap-4">
        <Button asChild variant="text">
          <Link href="/login">Войти</Link>
        </Button>
        <Button asChild variant="gradient">
          <Link href="/register">Зарегистрироваться</Link>
        </Button>
      </div>
    </header>
  );
}
