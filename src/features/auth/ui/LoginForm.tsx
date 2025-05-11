'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { loginAction } from '../api/action';
import { LoginSchema, loginSchema } from '../model/schema';
import { FormButton } from './FormButton';
import { FormInput } from './FormInput';

export function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  const {
    register,
    setError,
    clearErrors,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
  } = useForm({ mode: 'onChange', resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginSchema) => {
    try {
      await loginAction(data, { callbackUrl: callbackUrl ?? undefined });
    } catch (e) {
      if (isRedirectError(e)) return;

      if (e instanceof Error) {
        setError('root', { message: e.message });
      }
    }
  };

  const handleChange = () => clearErrors('root');
  const isDisable =
    !isValid || isSubmitting || Boolean(Object.keys(errors).length);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onChange={handleChange}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-3">
        <FormInput
          {...register('email')}
          placeholder="Электронная почта"
          autoComplete="email"
          invalid={Boolean(errors.root)}
          error={errors.email?.message}
        />
        <FormInput
          {...register('password')}
          placeholder="Пароль"
          autoComplete="current-password"
          type="password"
          invalid={Boolean(errors.root)}
          error={errors.password?.message}
        />
      </div>
      <FormButton
        isLoading={isSubmitting}
        disabled={isDisable}
        error={errors.root?.message}
      >
        Войти
      </FormButton>
    </form>
  );
}
