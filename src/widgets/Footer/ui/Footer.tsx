import { RiGithubFill, RiInstagramLine, RiTelegram2Fill } from 'react-icons/ri';

import { Button, Link } from '@/shared/ui';

export function Footer() {
  return (
    <footer className="flex justify-center gap-2 py-8">
      <Button asChild size="icon">
        <Link variant="none" href="https://t.me/yatskeech">
          <RiTelegram2Fill className="h-4 w-4" />
        </Link>
      </Button>
      <Button asChild size="icon">
        <Link variant="none" href="https://instagram.com/yatskeech">
          <RiInstagramLine className="h-4 w-4" />
        </Link>
      </Button>
      <Button asChild size="icon">
        <Link variant="none" href="https://github.com/yatskeech">
          <RiGithubFill className="h-4 w-4" />
        </Link>
      </Button>
    </footer>
  );
}
