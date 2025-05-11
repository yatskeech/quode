'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { registerAction } from '../api/action';
import { RegisterSchema, registerSchema } from '../model/schema';
import { FormButton } from './FormButton';
import { FormInput } from './FormInput';

export function RegisterForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  const {
    register,
    setError,
    clearErrors,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
  } = useForm({ mode: 'onChange', resolver: zodResolver(registerSchema) });

  const onSubmit = async (data: RegisterSchema) => {
    try {
      await registerAction(data, callbackUrl ?? undefined);
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
          autoComplete="new-password"
          type="password"
          invalid={Boolean(errors.root)}
          error={errors.password?.message}
        />
        <FormInput
          {...register('confirm')}
          placeholder="Подтвердите пароль"
          autoComplete="new-password"
          type="password"
          invalid={Boolean(errors.root)}
          error={errors.confirm?.message}
        />
      </div>
      <FormButton
        isLoading={isSubmitting}
        disabled={isDisable}
        error={errors.root?.message}
      >
        Зарегистрироваться
      </FormButton>
    </form>
  );
}
