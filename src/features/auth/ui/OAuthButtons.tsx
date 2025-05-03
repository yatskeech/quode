import { RiGithubFill, RiGoogleFill } from 'react-icons/ri';

import { Button } from '@/shared/ui';

import { githubAction, googleAction } from '../api/action';

export function OAuthButtons() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outlined"
        onClick={googleAction}
        className="flex flex-grow items-center justify-center gap-4 text-nowrap"
      >
        <RiGoogleFill size={24} />
        Войти через Google
      </Button>
      <Button
        variant="outlined"
        onClick={githubAction}
        className="flex flex-grow items-center justify-center gap-4 text-nowrap"
      >
        <RiGithubFill size={24} />
        Войти через Github
      </Button>
    </div>
  );
}
