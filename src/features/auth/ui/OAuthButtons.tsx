'use client';

import { useSearchParams } from 'next/navigation';

import { githubAction, googleAction } from '../api/action';
import { OAuthButton } from './OAuthButton';

export function OAuthButtons() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  return (
    <div className="flex flex-wrap gap-2">
      <OAuthButton
        provider="google"
        onClick={() => googleAction(callbackUrl ?? undefined)}
      >
        Продолжить с Google
      </OAuthButton>
      <OAuthButton
        provider="github"
        onClick={() => githubAction(callbackUrl ?? undefined)}
      >
        Продолжить с GitHub
      </OAuthButton>
    </div>
  );
}
