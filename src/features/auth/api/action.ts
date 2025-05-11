'use server';

import { prisma } from '@/shared/api';
import { signIn } from '@/shared/api';
import { hashPassword } from '@/shared/lib';

import type { LoginSchema, RegisterSchema } from '../model/schema';

export async function googleAction(callbackUrl?: string) {
  await signIn('google', { redirectTo: callbackUrl ?? '/' });
}

export async function githubAction(callbackUrl?: string) {
  await signIn('github', { redirectTo: callbackUrl ?? '/' });
}

export async function loginAction(
  data: LoginSchema,
  options?: {
    callbackUrl?: string;
  },
) {
  await signIn('credentials', {
    email: data.email,
    password: data.password,
    redirectTo: options?.callbackUrl ?? '/',
  });
}

export async function registerAction(
  data: RegisterSchema,
  callbackUrl?: string,
) {
  const { email, password } = data;

  const existing = await prisma.user.findUnique({ where: { email } });

  if (!existing) {
    await prisma.user.create({
      data: { email, password: await hashPassword(password) },
    });

    return await loginAction(data, { callbackUrl });
  }

  if (existing?.password) {
    throw new Error('Пользователь с такой электронной почтой уже существует');
  }

  await prisma.user.update({
    where: { email },
    data: { password: await hashPassword(password) },
  });

  return await loginAction(data, { callbackUrl });
}
