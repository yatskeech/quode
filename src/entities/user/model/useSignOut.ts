'use client';

import { signOut } from 'next-auth/react';
import { useState } from 'react';

export function useSignOut() {
  const [isLoading, setIsLoading] = useState(false);

  const onSignOut = async () => {
    try {
      setIsLoading(true);
      await signOut({ callbackUrl: '/' });
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, onSignOut };
}
