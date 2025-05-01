import { cx } from 'class-variance-authority';
import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';

export function NavLink({
  className,
  ...rest
}: ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      {...rest}
      className={cx(
        'transition-all outline-none hover:opacity-75 focus:opacity-75',
        className,
      )}
    />
  );
}
