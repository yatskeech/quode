import Link from 'next/link';

import { Logo } from '@/shared/ui';

export function Header() {
  return (
    <header className="flex items-center justify-between py-8">
      <Link href="/">
        <Logo className="w-32" />
      </Link>
      <div className="flex items-center gap-4">
        <button className="text-gray cursor-pointer rounded-xl px-8 py-3 text-sm">
          Войти
        </button>
        <button className="bg-gradient-purple cursor-pointer rounded-xl px-8 py-3 text-sm">
          Зарегистрироваться
        </button>
      </div>
    </header>
  );
}
