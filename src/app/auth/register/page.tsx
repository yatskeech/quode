import { Button, Input, NavLink } from '@/shared/ui';

export default function RegisterPage() {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <Input placeholder="Электронная почта" />
        <Input placeholder="Пароль" type="password" />
        <Input placeholder="Подтвердите пароль" type="password" />
      </div>
      <div className="flex flex-col gap-4">
        <Button variant="gradient" size="lg">
          Зарегистрироваться
        </Button>
        <span className="text-gray text-center text-sm">
          Уже есть аккаунт?{' '}
          <NavLink href="/auth/login" className="text-white underline">
            Войти
          </NavLink>
        </span>
      </div>
    </form>
  );
}
