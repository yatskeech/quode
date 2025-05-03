import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { CredentialsSignin, type User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import { verifyPassword } from '../lib';
import { prisma } from './prisma';

const ERROR_MESSAGE = 'Неверная электронная почта или неверный пароль';

class AuthError extends CredentialsSignin {
  code = 'auth';

  constructor(message?: string, options?: ErrorOptions) {
    super(message, options);

    if (message) {
      this.message = message;
    }
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Электронная почта', type: 'email' },
        password: { label: 'Пароль', type: 'password' },
      },
      async authorize(credentials) {
        const email = credentials.email as string;
        const password = credentials.password as string;

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user || !user.password) {
          throw new AuthError(ERROR_MESSAGE);
        }
        const isValid = await verifyPassword(password, user.password);

        if (!isValid) {
          throw new AuthError(ERROR_MESSAGE);
        }
        return { id: user.id, email: user.email, name: user.name };
      },
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as AdapterUser & User;
      return session;
    },
  },
});
