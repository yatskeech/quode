'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/shared/ui';

import { registerSchema } from '../model/schema';
import { FormInput } from './FormInput';

export function RegisterForm() {
  const {
    register,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur', resolver: zodResolver(registerSchema) });

  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <FormInput
          {...register('email')}
          placeholder="Электронная почта"
          error={errors.email?.message}
        />
        <FormInput
          {...register('password')}
          placeholder="Пароль"
          autoComplete="new-password"
          type="password"
          error={errors.password?.message}
        />
        <FormInput
          {...register('confirm')}
          placeholder="Подтвердите пароль"
          autoComplete="new-password"
          type="password"
          error={errors.confirm?.message}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Button variant="gradient" size="lg" disabled={!isValid}>
          Зарегистрироваться
        </Button>
      </div>
    </form>
  );
}
