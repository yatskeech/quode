import { signOut } from 'next-auth/react';
import { useState } from 'react';

export function useSignOut() {
  const [isLoading, setIsLoading] = useState(false);

  const onSignOut = async () => {
    setIsLoading(true);
    await signOut();
  };

  return { isLoading, onSignOut };
}
