'use server';

import { redirect } from 'next/navigation';

import { prisma } from '@/shared/api';
import { signIn } from '@/shared/api';
import { hashPassword } from '@/shared/lib';

import type { LoginSchema, RegisterSchema } from '../model/schema';

export async function googleAction() {
  await signIn('google', { redirectTo: '/' });
}

export async function githubAction() {
  await signIn('github', { redirectTo: '/' });
}

export async function loginAction(data: LoginSchema) {
  await signIn('credentials', {
    email: data.email,
    password: data.password,
    redirect: false,
  });

  redirect('/');
}

export async function registerAction(data: RegisterSchema) {
  const { email, password } = data;

  const existing = await prisma.user.findUnique({ where: { email } });

  if (!existing) {
    await prisma.user.create({
      data: { email, password: await hashPassword(password) },
    });

    return await loginAction(data);
  }

  if (existing?.password) {
    throw new Error('Пользователь с такой электронной почтой уже существует');
  }

  await prisma.user.update({
    where: { email },
    data: { password: await hashPassword(password) },
  });

  return await loginAction(data);
}
