import { RiGithubFill, RiInstagramLine, RiTelegram2Fill } from 'react-icons/ri';

import { Button } from '@/shared/ui';

export function Footer() {
  return (
    <footer className="flex justify-center gap-2 py-8">
      <Button size="icon">
        <RiTelegram2Fill className="h-4 w-4" />
      </Button>
      <Button size="icon">
        <RiInstagramLine className="h-4 w-4" />
      </Button>
      <Button size="icon">
        <RiGithubFill className="h-4 w-4" />
      </Button>
    </footer>
  );
}
