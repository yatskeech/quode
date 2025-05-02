'use client';

import { RiGithubFill, RiGoogleFill } from 'react-icons/ri';

import { signIn } from '@/shared/api/auth';
import { Button } from '@/shared/ui';

export function OAuthButtons() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outlined"
        onClick={() => signIn('google', { redirectTo: '/' })}
        className="flex flex-grow items-center justify-center gap-4 text-nowrap"
      >
        <RiGoogleFill size={24} />
        Войти через Google
      </Button>
      <Button
        variant="outlined"
        onClick={() => signIn('github', { redirectTo: '/' })}
        className="flex flex-grow items-center justify-center gap-4 text-nowrap"
      >
        <RiGithubFill size={24} />
        Войти через Github
      </Button>
    </div>
  );
}
