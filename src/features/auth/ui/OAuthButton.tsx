'use client';

import { RiGithubFill, RiGoogleFill } from 'react-icons/ri';

import { Button } from '@/shared/ui';

interface OAuthButtonProps {
  provider: 'google' | 'github';
  onClick: () => void;
  children: React.ReactNode;
}

export function OAuthButton({ provider, onClick, children }: OAuthButtonProps) {
  const Icon = provider === 'google' ? RiGoogleFill : RiGithubFill;

  return (
    <Button
      variant="outlined"
      onClick={onClick}
      className="flex items-center justify-center gap-4 text-nowrap"
    >
      <Icon size={24} />
      {children}
    </Button>
  );
}
