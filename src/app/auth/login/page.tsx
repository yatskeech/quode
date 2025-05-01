import { Button, Input, NavLink } from '@/shared/ui';

export default function LoginPage() {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <Input placeholder="Электронная почта" />
        <Input placeholder="Пароль" type="password" />
      </div>
      <div className="flex flex-col gap-4">
        <Button variant="gradient" size="lg">
          Войти
        </Button>
        <span className="text-gray text-center text-sm">
          Ещё нет аккаунта?{' '}
          <NavLink href="/auth/register" className="text-white underline">
            Зарегистрироваться
          </NavLink>
        </span>
      </div>
    </form>
  );
}
