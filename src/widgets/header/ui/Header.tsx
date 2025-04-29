import Link from 'next/link';

import { Button, Logo } from '@/shared/ui';

export function Header() {
  return (
    <header className="flex items-center justify-between py-8">
      <Link href="/">
        <Logo className="w-32" />
      </Link>
      <div className="flex items-center gap-4">
        <Button variant="text">Войти</Button>
        <Button variant="gradient">Зарегистрироваться</Button>
      </div>
    </header>
  );
}
